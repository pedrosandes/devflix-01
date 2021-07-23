import { 
  AiOutlinePlus, 
  AiOutlineLike, 
  AiOutlineShareAlt,
  AiOutlineUserAdd } from 'react-icons/ai'

import { BottomBox } from '../BottomBox/index'
import './styles.css'

const BottomBar = () => {
  return(
    <div className="bottom-bar">
      <BottomBox icon={<AiOutlinePlus size="25px" color="#E6E6E6"/>}>
        Adicionar à lista
      </BottomBox>
      <BottomBox icon={<AiOutlineLike size="25px" color="#E6E6E6"/>}>
       Classifique
      </BottomBox>
      <BottomBox icon={<AiOutlineShareAlt size="25px" color="#E6E6E6"/>}>
      Compartilhe
      </BottomBox>
      <BottomBox icon={<AiOutlineUserAdd size="25px" color="#E6E6E6"/>}>
      indique à<br/> um amigo
      </BottomBox>
    </div>
  );
}

export { BottomBar }