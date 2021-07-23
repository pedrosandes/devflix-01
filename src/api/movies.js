
// Faz a requisição de 1 filme/serie/show
const getShow = async (id = 14) => {
  const data = await fetch(`https://api.tvmaze.com/shows/${id}`)
  const response = await data.json()
  return response
}

export { getShow }