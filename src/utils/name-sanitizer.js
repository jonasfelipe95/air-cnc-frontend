const nameSanitizer = text => {
  if (text) {
    return text.replace(/[^A-Za-zÀ-ÿ  ]/g, '')
  }
}

export default nameSanitizer
