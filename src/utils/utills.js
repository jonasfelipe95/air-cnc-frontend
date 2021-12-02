/* eslint-disable no-useless-escape */
export const cnpjMask = cnpj => {
  if (!cnpj) return

  cnpj = cnpj.padStart(14, '0')

  if (cnpj.length === 17) {
    cnpj = cnpj
      .split('')
      .map((el, index) => {
        return index === 10 ? el + '0' : el
      })
      .join('')
  }

  return cnpj.replace(/(\d{2})(\d{3})(\d{3})(\d{3,4})(\d{2})/g, '$1.$2.$3/$4-$5')
}

export const cpfMask = cpf => {
  if (!cpf) return ''
  return cpf
    .replace(/\D/g, '')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})$/, '$1-$2')
}

export const phoneMask = phone => {
  if (!phone) return ''
  phone = phone.replace(/\D/g, '')
  phone = phone.replace(/(\d{0})(\d)/, '$1($2')
  phone = phone.replace(/(\d{2})(\d)/, '$1) $2')

  removeMask(phone).length < 11 ? (phone = phone.replace(/(\d{4})(\d)/, '$1-$2')) : (phone = phone.replace(/(\d{5})(\d)/, '$1-$2'))
  return phone
}

export const removeMask = element => {
  if (!element) return
  return element.match(/\d+/g) && element.match(/\d+/g).join('')
}

export const nameMask = text => {
  if (text) {
    return text.match(/[A-Za-zÀ-ÿ  ]+/g).join('')
  }
}

export const emailIsValid = email => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export const cpfIsValid = cpf => {
  let sum = 0
  let rest
  if (cpf === '00000000000') return false

  for (let i = 1; i <= 9; i++) {
    sum = sum + parseInt(cpf.substring(i - 1, i)) * (11 - i)
  }

  rest = (sum * 10) % 11

  if (rest === 10 || rest === 11) rest = 0
  if (rest !== parseInt(cpf.substring(9, 10))) return false

  sum = 0

  for (let i = 1; i <= 10; i++) {
    sum = sum + parseInt(cpf.substring(i - 1, i)) * (12 - i)
  }

  rest = (sum * 10) % 11

  if (rest === 10 || rest === 11) rest = 0
  if (rest !== parseInt(cpf.substring(10, 11))) return false

  return true
}

export const currencyMask = text => 'R$ ' + text.replace(/\./, ',')

export const removeCurrencyMask = text => text.replace(/,/g, '.').replace(/R\$ /g, '').replace(/\s/, '')

export default { cnpjMask, cpfMask, phoneMask, removeMask, nameMask, emailIsValid, cpfIsValid, currencyMask, removeCurrencyMask }
