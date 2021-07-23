import { useState, useEffect } from 'react'
import { getShow } from '../../api/movies'
import { BackgroundImage } from '../../components/movieInfo/BackgroundImage'
import { NavBar } from '../../components/movieInfo/NavBar'
import { MovieContent } from '../../components/movieInfo/MovieContent'

const MovieInfo = () => {

  const [show, setShow] = useState({})
  
  useEffect(async () => {
    setShow(await getShow(4)) 
  }, [])
  
  // Se não tiver o id, fica na pagina de loading
  if(!show.id) return (<p>Loading...</p>)

  // Desestruturo o show para ficar melhor.
  const {image, rating, genres, name, summary} = show
    
     // BackgroundImage - Cria o efeito de background
      // MovieContent - É o conteúdo da página em si
      // BottomBar - É o menu inferior
  
  return(
    <>
      <BackgroundImage image={image.original}/>
      <MovieContent 
        image={image}
        rating={rating}
        genres={genres} 
        name={name} 
        summary={summary}
        />
      <NavBar />  
  </>
  );
}

export { MovieInfo }