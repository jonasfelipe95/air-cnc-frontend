const isAdult = birthday => {
  const date = new Date(birthday).getTime()
  const now = new Date().getTime()
  const age = (now - date) / (1000 * 60 * 60 * 24 * 365)

  return age >= 18
}

export default isAdult
