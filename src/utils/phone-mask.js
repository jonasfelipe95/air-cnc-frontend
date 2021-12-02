import { removeMaskOfNumbers } from './index'

const phoneMask = phone => {
  if (!phone) return ''

  const paramByTypePhone = removeMaskOfNumbers(phone).length < 11 ? /(\d{4})(\d)/ : /(\d{5})(\d)/

  return phone
    .replace(/\D/g, '')
    .replace(/(\d{0})(\d)/, '$1($2')
    .replace(/(\d{2})(\d)/, '$1) $2')
    .replace(paramByTypePhone, '$1-$2')
}

export default phoneMask
