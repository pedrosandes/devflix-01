import { useState, useEffect } from 'react';
import { getShow } from '../../api/movies';
import { NavBar } from '../../components/shared/NavBar';
import { AiOutlineArrowLeft, AiOutlineLike } from 'react-icons/ai';
import { BiPlay } from 'react-icons/bi';
import { IoShareSocialSharp } from 'react-icons/io5';
import downloadIcon from '../../assets/icons/download.svg';
import confirmIcon from '../../assets/icons/confirm.svg';

import './styles.css';

const MovieInfo = () => {
  const [show, setShow] = useState({});

  useEffect(() => {
    const fetchShow = async () => {
      setShow(await getShow());
    };
    fetchShow();
  }, []);

  // Se não tiver o id, fica na pagina de loading
  // Fazer um componente para Loading...
  if (!show.id) return <p>Loading...</p>;

  // Desestruturo o show para ficar melhor.
  const { image, rating, premiered, runtime } = show;

  const ratingInPercent = (rating) => {
    const numberInString = rating.toString();
    const percent = numberInString.replace('.', '');
    return percent;
  };

  const handlePremiered = (premieredFullYear) => {
    return premieredFullYear.slice(0, 4);
  };

  return (
    <div id="hero">
      <div className="background-image bg-image-blur ">
        <img src={image.original} alt="Background" />
      </div>
      <main className="c-main">
        <div className="main-card">
          <div className="arrow-back">
            <AiOutlineArrowLeft color="#fff" size="20px" />
          </div>
          <div className="card-show">
            <img
              width="200px"
              height="285px"
              src={image.medium}
              alt="Show card"
            />
            <div className="show-info">
              <span className="match-film">{`${ratingInPercent(
                rating.average
              )}% Match`}</span>
              <span>{handlePremiered(premiered)}</span>
              <span>{runtime}m</span>
            </div>
          </div>
        </div>
        <div className="c-show-buttons">
          <button className="btn btn-white">
            <BiPlay size="30" color="#1a1a1a" />
            Play
          </button>
          <button className="btn">
            <img width="23.87" height="20.35" src={downloadIcon} alt="" />
            Download
          </button>
        </div>
        <div className="c-more-info">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            quia qui nihil esse nobis dolorum aperiam reiciendis? Expedita alias
            rerum ea, ducimus rem ex esse eligendi velit optio sapiente in.
          </p>
        </div>
        <div className="c-options">
          <ul className="list-options">
            <li className="option">
              <img
                width="20"
                height="15"
                src={confirmIcon}
                alt="Confirm Icon"
              />
              <span>My List</span>
            </li>
            <li className="option">
              <AiOutlineLike size={22} color="#fff" />
              <span>Rate</span>
            </li>
            <li className="option">
              <IoShareSocialSharp size={22} color="#fff" />
              <span>Share</span>
            </li>
          </ul>
        </div>
      </main>
      <NavBar />
    </div>
  );
};

export { MovieInfo };
