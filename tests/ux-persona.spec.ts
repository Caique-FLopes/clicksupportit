import { test, expect } from "@playwright/test";
import * as fs from "fs";
import * as path from "path";
import * as dotenv from "dotenv";
import {
  loadPersona,
  analyzeWithPersona,
  type Persona,
  type UXAnalysis,
} from "../ux-agent/src/agent";

dotenv.config();

// ─── Diretórios de saída ───────────────────────────────────────────────────────
const SCREENSHOTS_DIR = path.resolve(process.cwd(), "ux-agent/screenshots");
const RESULTS_DIR = path.resolve(process.cwd(), "ux-agent/results");

function ensureDirs() {
  [SCREENSHOTS_DIR, RESULTS_DIR].forEach((dir) => {
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  });
}

// ─── Salva relatório JSON ──────────────────────────────────────────────────────
function saveReport(
  persona: Persona,
  analysis: UXAnalysis,
  timestamp: string
) {
  const report = {
    timestamp,
    persona: {
      nome: persona.nome,
      cargo: persona.cargo,
      pais: persona.pais,
      objetivo: persona.objetivo,
    },
    analise: analysis,
    notas: {
      media: (
        (analysis.nota_clareza +
          analysis.nota_credibilidade +
          analysis.nota_navegacao +
          analysis.nota_conversao) /
        4
      ).toFixed(1),
      clareza: analysis.nota_clareza,
      credibilidade: analysis.nota_credibilidade,
      navegacao: analysis.nota_navegacao,
      conversao: analysis.nota_conversao,
    },
  };

  const filename = `${timestamp}-${persona.nome.replace(/\s+/g, "-").toLowerCase()}.json`;
  fs.writeFileSync(
    path.join(RESULTS_DIR, filename),
    JSON.stringify(report, null, 2),
    "utf-8"
  );

  return report;
}

// ─── Teste Principal ───────────────────────────────────────────────────────────
test.describe("UX Persona Test – Solicitação de Orçamento", () => {
  test("Carlos Oliveira consegue solicitar um orçamento de suporte técnico", async ({
    page,
  }, testInfo) => {
    // LLM API call + page interactions need more than the default 30s
    test.setTimeout(120_000);
    ensureDirs();
    const timestamp = new Date().toISOString().replace(/[:.]/g, "-");

    // Carrega a persona
    const personaPath = path.resolve(
      process.cwd(),
      "ux-agent/personas/carlos-oliveira.json"
    );
    const persona = loadPersona(personaPath);

    // ── 1. Navega até o site ────────────────────────────────────────────────────
    await page.goto("/");
    await page.waitForLoadState("networkidle");

    // Screenshot da página inicial
    await page.screenshot({
      path: path.join(SCREENSHOTS_DIR, `${timestamp}-01-home.png`),
      fullPage: true,
    });

    // ── 2. Captura o conteúdo da página ────────────────────────────────────────
    const pageContent = await page.locator("body").innerText();

    // ── 3. Envia para o agente Claude analisar como a persona ──────────────────
    console.log(`\n[UX Agent] Analisando como: ${persona.nome}...`);
    const analysis = await analyzeWithPersona(persona, pageContent);
    console.log(
      `[UX Agent] Confiança inicial: ${analysis.confianca_inicial}/10`
    );
    console.log(
      `[UX Agent] Encontrou CTA: ${analysis.consegue_identificar_cta}`
    );

    // ── 4. Exibe jornada do usuário no console ──────────────────────────────────
    console.log("\n[UX Agent] Jornada simulada:");
    for (const passo of analysis.jornada) {
      console.log(`  Passo ${passo.passo}: ${passo.acao}`);
      console.log(`    Pensamento: "${passo.pensamento}"`);
      console.log(`    Dificuldade: ${passo.dificuldade}/5`);
    }

    // ── 5. Playwright executa a jornada real: navega até o formulário ──────────
    // Clica no botão "Contato" do header para garantir scroll até a seção
    await page.getByRole("button", { name: "Contato" }).first().click();
    await page.locator("#contato").waitFor({ state: "visible" });

    await page.screenshot({
      path: path.join(SCREENSHOTS_DIR, `${timestamp}-02-formulario.png`),
    });

    // ── 6. Preenche o formulário com os dados da persona ───────────────────────
    const { dados_formulario } = persona;

    await page.getByPlaceholder("Seu nome").fill(dados_formulario.nome);
    await page.getByPlaceholder("seu@email.com").fill(dados_formulario.email);
    await page.getByPlaceholder(/estados unidos/i).fill(dados_formulario.pais);

    // Seleciona o tipo de serviço pelo valor do option
    await page.getByRole("combobox").selectOption({ value: dados_formulario.servico });

    // Preenche a mensagem
    await page.getByPlaceholder(/conte-nos sobre o problema/i).fill(dados_formulario.mensagem);

    await page.screenshot({
      path: path.join(SCREENSHOTS_DIR, `${timestamp}-03-formulario-preenchido.png`),
    });

    // ── 7. Verifica se o botão de envio está disponível (não clica no WhatsApp) ─
    const submitButton = page.locator('button[type="submit"]');
    await expect(submitButton).toBeVisible();
    await expect(submitButton).toBeEnabled();

    await page.screenshot({
      path: path.join(SCREENSHOTS_DIR, `${timestamp}-04-pronto-para-enviar.png`),
    });

    // ── 8. Salva relatório e anexa ao teste Playwright ─────────────────────────
    const report = saveReport(persona, analysis, timestamp);

    // Anexa o JSON ao relatório HTML do Playwright
    await testInfo.attach("ux-report.json", {
      body: JSON.stringify(report, null, 2),
      contentType: "application/json",
    });

    // Anexa screenshots ao relatório
    for (const screenshot of [
      `${timestamp}-01-home.png`,
      `${timestamp}-02-formulario.png`,
      `${timestamp}-03-formulario-preenchido.png`,
      `${timestamp}-04-pronto-para-enviar.png`,
    ]) {
      const screenshotPath = path.join(SCREENSHOTS_DIR, screenshot);
      if (fs.existsSync(screenshotPath)) {
        await testInfo.attach(screenshot, {
          path: screenshotPath,
          contentType: "image/png",
        });
      }
    }

    // ── 9. Asserções de UX ─────────────────────────────────────────────────────
    console.log("\n[UX Agent] Resultado da análise:");
    console.log(`  Primeira impressão: "${analysis.primeira_impressao}"`);
    console.log(`  Conseguiu solicitar orçamento: ${analysis.conseguiu_solicitar_orcamento}`);
    console.log(`  Notas: Clareza=${analysis.nota_clareza} | Credibilidade=${analysis.nota_credibilidade} | Navegação=${analysis.nota_navegacao} | Conversão=${analysis.nota_conversao}`);
    console.log(`  Média geral: ${report.notas.media}/10`);

    if (analysis.pontos_negativos.length > 0) {
      console.log("\n[UX Agent] Problemas identificados:");
      analysis.pontos_negativos.forEach((p) => console.log(`  ⚠ ${p}`));
    }

    if (analysis.sugestoes.length > 0) {
      console.log("\n[UX Agent] Sugestões de melhoria:");
      analysis.sugestoes.forEach((s) => console.log(`  → ${s}`));
    }

    // A persona deve conseguir identificar como solicitar orçamento
    expect(
      analysis.consegue_identificar_cta,
      "A persona deve conseguir encontrar o CTA de contato"
    ).toBe(true);

    // A nota de conversão deve ser satisfatória (≥ 6)
    expect(
      analysis.nota_conversao,
      `Nota de conversão deve ser ≥ 6 (recebeu ${analysis.nota_conversao})`
    ).toBeGreaterThanOrEqual(6);

    // A persona deve conseguir completar a jornada
    expect(
      analysis.conseguiu_solicitar_orcamento,
      analysis.motivo_falha || "A persona deve conseguir solicitar orçamento"
    ).toBe(true);
  });
});
