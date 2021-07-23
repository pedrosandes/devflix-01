import { 
  AiOutlinePlus, 
  AiOutlineLike, 
  AiOutlineShareAlt,
  AiOutlineUserAdd } from 'react-icons/ai'

import './styles.css'

const navIcons = [
  {
    name: 'Adicionar à lista',
    icon: <AiOutlinePlus size="25px" color="#E6E6E6"/>,
  },
  {
    name: 'Classifique',
    icon: <AiOutlineLike size="25px" color="#E6E6E6"/>,
  },
  {
    name: 'Compartilhe',
    icon: <AiOutlineShareAlt size="25px" color="#E6E6E6"/>,
  },
  {
    name: 'Indique à um amigo',
    icon: <AiOutlineUserAdd size="25px" color="#E6E6E6"/>,
  }

]

const NavIcon = (props) => {
  return(
    <div className="bottom-box">
        <i>{props.icon}</i>
        <span>{props.children}</span>
      </div>
  );
}

const NavBar = () => {
  return(
    <div className="bottom-bar">
      {navIcons.map( ({name, icon}) => <NavIcon icon={icon}>{name}</NavIcon> )}
    </div>
  );
}

export { NavBar }