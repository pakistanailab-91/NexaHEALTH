export const ADMIN_CREDENTIALS = {
  email: 'admin@nexahealth.nhs.uk',
  password: 'admin123'
}

export const validateCredentials = (email: string, password: string) => {
  return email === ADMIN_CREDENTIALS.email && password === ADMIN_CREDENTIALS.password
}

export const createUser = (email: string) => {
  return {
    name: 'Sarah Johnson',
    email: email,
    initials: 'SJ',
    role: 'Governance Manager'
  }
}
