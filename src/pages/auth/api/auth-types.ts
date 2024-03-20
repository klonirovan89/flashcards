export type LoginArgs = {
  email: string
  password: string
  rememberMe?: boolean
}

export type User = {
  avatar: null | string
  created: string
  email: string
  id: string
  isEmailVerified: boolean
  name: string
  updated: string
}
export type SignUpArgs = {
  email: string
  html?: string
  name?: string
  password: string
  sendConfirmationEmail?: boolean
  subject?: string
}

export type SignUpResponse = {
  avatar: string
  created: string
  email: string
  id: string
  isEmailVerified: boolean
  name: string
  updated: string
}

export type PasswordRecovery = {
  email: string
  html: string
}
