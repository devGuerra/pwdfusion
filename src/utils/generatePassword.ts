export function generatePassword({ length, hasNumbers, hasSymbols, hasUppercase }:
  { length: number, hasNumbers?: boolean, hasSymbols?: boolean, hasUppercase: boolean }): string {
  let chars = 'abcdefghijklmnopqrstuvwxyz'
  hasUppercase && (chars += chars.toUpperCase())
  hasNumbers ? (chars += '0123456789') : ''
  hasSymbols ? (chars += '!@#$%^&*()_+-=[]{};:,./<>?') : ''

  return Array.from(crypto.getRandomValues(new Uint32Array(length)))
    .map((n) => chars[n % chars.length])
    .join('')
}