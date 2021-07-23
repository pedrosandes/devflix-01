import { useState, useEffect } from 'react'
import { getShow } from '../../api/movies'
import { BackgroundImage } from '../../components/MovieInfo/BackgroundImage'
import { BottomBar } from '../../components/MovieInfo/BottomBar'
import { MovieContent } from '../../components/MovieInfo/MovieContent'
import './styles.css'

const MovieInfo = () => {

  const [show, setShow] = useState({})

  useEffect(async () => {
    setShow(await getShow()) 
  }, [])

  return(
    <>
    {
      show.id 
      ?
      // BackgroundImage - Cria o efeito de background
      // MovieContent - É o conteúdo da página em si
      // BottomBar - É o menu inferior
        <>
          <BackgroundImage data={show}/>
          <MovieContent data={show}/>
          <BottomBar />
        </>
      : <p>Loading...</p>
    }
  </>
  );
}

export { MovieInfo }