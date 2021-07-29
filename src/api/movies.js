// Faz a requisição de 1 filme/serie/show
const SHOW_URL = 'https://api.tvmaze.com/shows/';
const SHOWS_URL = 'https://api.tvmaze.com/shows';

const getShow = async (id = 33) => {
  const requestOptions = {
    method: 'GET',
    redirect: 'follow',
  };

  try {
    const data = await fetch(SHOW_URL + id, requestOptions);
    const response = await data.json();
    return response;
  } catch (error) {
    return console.log('Error =>' + error);
  }
};

// Pega todos os filmes/series/shows
const getShows = async () => {
  const requestOptions = {
    method: 'GET',
    redirect: 'follow',
  };

  try {
    const data = await fetch(SHOWS_URL, requestOptions);
    const response = await data.json();
    return response;
  } catch (error) {
    return console.log('Error =>' + error);
  }
};

export { getShow, getShows };
