import './styles.css'

const BottomBox = (props) => {
  return(
    <div className="bottom-box">
        <i>{props.icon}</i>
        <span>{props.children}</span>
      </div>
  );
}

export { BottomBox }

