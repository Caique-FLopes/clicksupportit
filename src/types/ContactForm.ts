export interface ContactForm {
  name: string
  email: string
  country: string
  phone: string
  description: string
}

export interface ContactFormErrors {
  name?: string
  email?: string
  country?: string
  phone?: string
  description?: string
}
