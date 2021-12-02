const passwordValidator = (
  password,
  options = { minLength: 6, maxLength: 16, minNumbers: 1, minSpecialCaracters: 1, minCapitalLetters: 1, minLowerCaseLetters: 1, minLetters: 1 }
) => {
  if (!password) return false

  let capitalLetters = 0
  let lowerCaseLeters = 0
  let numbers = 0
  let specialCaracters = 0
  const specialCaractersList = '/([~`!@#$%^&*+=-[]\\\';,/{}|":<>?])'

  for (let i = 0; i <= password.length; i++) {
    const asciiValue = password.charCodeAt(i)
    if (asciiValue >= 65 && asciiValue <= 90) {
      capitalLetters++
    }
    if (asciiValue >= 97 && asciiValue <= 122) {
      lowerCaseLeters++
    }
    if (asciiValue >= 48 && asciiValue <= 57) {
      numbers++
    }
    if (specialCaractersList.indexOf(password[i]) !== -1) {
      specialCaracters++
    }
  }
  if (
    capitalLetters >= options.minCapitalLetters &&
    lowerCaseLeters >= options.minLowerCaseLetters &&
    capitalLetters + lowerCaseLeters >= options.minLetters &&
    numbers >= options.minNumbers &&
    specialCaracters >= options.minSpecialCaracters &&
    password.length >= options.minLength &&
    password.length <= options.maxLength
  ) {
    return true
  } else {
    return false
  }
}

export default passwordValidator
