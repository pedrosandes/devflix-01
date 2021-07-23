
// Faz a requisição de 1 filme/serie/show
const getShow = async () => {
  const data = await fetch(`https://api.tvmaze.com/shows/4`)
  const response = await data.json()
  return response
}

export { getShow }