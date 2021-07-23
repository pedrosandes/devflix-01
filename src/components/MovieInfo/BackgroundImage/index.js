import './styles.css'

const BackgroundImage = ({image}) => {
  return(
    <div className="background-img">
      <img src={image} alt="" />
    </div>
  );
}

export { BackgroundImage }