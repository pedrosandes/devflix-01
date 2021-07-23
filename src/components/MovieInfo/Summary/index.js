const Summary = ({text}) => {
  return(
      <div className="movie-summary" dangerouslySetInnerHTML={{__html: text}}/>
  );
}

export { Summary}