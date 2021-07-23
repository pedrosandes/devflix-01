import './styles.css'

const BackgroundImage = ({data}) => {
  const image = data.image.original
  return(
    <div className="background-img">
      <img src={image} alt="" />
    </div>
  );
}

export { BackgroundImage }