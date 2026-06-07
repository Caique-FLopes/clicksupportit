import Anthropic from "@anthropic-ai/sdk";
import * as fs from "fs";
import * as path from "path";

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

export interface Persona {
  nome: string;
  idade: number;
  cargo: string;
  pais: string;
  objetivo: string;
  perfil: string;
  experiencia_tech: string;
  contexto: string;
  dados_formulario: {
    nome: string;
    email: string;
    pais: string;
    servico: string;
    mensagem: string;
  };
}

export interface UXAnalysis {
  primeira_impressao: string;
  confianca_inicial: number;
  consegue_identificar_cta: boolean;
  onde_esta_o_cta: string;
  jornada: Array<{
    passo: number;
    acao: string;
    pensamento: string;
    dificuldade: number;
  }>;
  conseguiu_solicitar_orcamento: boolean;
  motivo_falha: string;
  pontos_positivos: string[];
  pontos_negativos: string[];
  sugestoes: string[];
  nota_clareza: number;
  nota_credibilidade: number;
  nota_navegacao: number;
  nota_conversao: number;
  comentario_final: string;
}

export function loadPersona(filePath: string): Persona {
  const raw = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(raw);
}

function loadPromptTemplate(templatePath: string): string {
  return fs.readFileSync(templatePath, "utf-8");
}

function buildPrompt(persona: Persona, pageContent: string): string {
  const templatePath = path.resolve(
    process.cwd(),
    "ux-agent/prompts/persona.txt"
  );
  let template = loadPromptTemplate(templatePath);

  return template
    .replace("{{nome}}", persona.nome)
    .replace("{{idade}}", String(persona.idade))
    .replace("{{cargo}}", persona.cargo)
    .replace("{{pais}}", persona.pais)
    .replace("{{objetivo}}", persona.objetivo)
    .replace("{{perfil}}", persona.perfil)
    .replace("{{experiencia_tech}}", persona.experiencia_tech)
    .replace("{{contexto}}", persona.contexto)
    .replace("{{conteudo_pagina}}", pageContent);
}

export async function analyzeWithPersona(
  persona: Persona,
  pageContent: string
): Promise<UXAnalysis> {
  const prompt = buildPrompt(persona, pageContent);

  const response = await anthropic.messages.create({
    model: "claude-sonnet-4-5",
    max_tokens: 4000,
    messages: [
      {
        role: "user",
        content: prompt,
      },
    ],
  });

  const raw = response.content[0].type === "text" ? response.content[0].text : "";

  // Extrai o JSON da resposta (remove possíveis blocos de código)
  const jsonMatch = raw.match(/\{[\s\S]*\}/);
  if (!jsonMatch) {
    throw new Error(`Claude não retornou JSON válido. Resposta: ${raw}`);
  }

  return JSON.parse(jsonMatch[0]) as UXAnalysis;
}
