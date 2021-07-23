import { BsPlayFill } from 'react-icons/bs'
import { AiFillCloseCircle } from 'react-icons/ai'
import { useHistory } from 'react-router-dom'
import { AiFillStar } from 'react-icons/ai'
import './styles.css'

const Summary = ({text}) => {
  return(
      <div className="movie-summary" dangerouslySetInnerHTML={{__html: text}}/>
  );
}

const MovieContent = ({image, rating, genres, name, summary}) => {
  const { goBack } = useHistory()

  // Refatorar o código / Otimizar
  return(
    <div className="movie-content">
      <div className="movie">
         <div className="movie-header">
            <button onClick={goBack} className="btn-close" >
              <AiFillCloseCircle size="32px" color="#fff"/>
            </button>
          <img className="medium-img" src={image.medium} alt="" />
          <div className="generos">
            <p className="movie-avaliation">
              <AiFillStar /> {rating.average}
            </p>
              {genres.map( genero => <p>{genero}</p>)}
          </div>
            <button className="btn">
               <BsPlayFill size="32px" color="#fff"/> Continuar
            </button>
         </div>
          <div className="movie-info">
             <p className="movie-name">{name}</p>
              <Summary text={summary}/>
          </div>
      </div>
   </div>
  );
}

export { MovieContent }