import { useState, useEffect } from 'react';
import { getShows, getCapeShow } from '../../api/movies';
import { NavBar } from '../../components/shared/NavBar';
import Logo from '../../assets/icons/logo.svg';
import ConfirmIcon from '../../assets/icons/confirm.svg';
import InfoIcon from '../../assets/icons/InfoIcon.svg';
import PlayIcon from '../../assets/icons/play.svg';

import './styles.css';

const Home = () => {
  const [shows, setShows] = useState([]);
  const [showCape, setShowCape] = useState({});

  const randomId = () => {
    const id = Math.floor(Math.random() * (300 - 2) + 2);
    return id;
  };

  useEffect(() => {
    const fetchShows = async () => {
      setShows(await getShows());
    };
    const fetchShow = async (id) => {
      setShowCape(await getCapeShow(id));
    };
    fetchShows();
    fetchShow(randomId());
  }, []);

  // const firstsShows = shows.slice(0, 10);

  const { image, genres, name } = showCape;

  if (!showCape.id) return <p>Loading...</p>;

  return (
    <>
      <header className="header">
        <img height="46" src={Logo} alt="Netflix Logo" />
        <nav className="nav-top">
          <ul className="nav-list">
            <li className="nav-item">Tv Shows</li>
            <li className="nav-item">Movies</li>
            <li className="nav-item">My List</li>
          </ul>
        </nav>
      </header>

      <div className="background-image">
        <img src={image.original} alt="Background" />
      </div>

      <div className="show-cape">
        <div className="show-cape-info">
          <span className="show-title">{name}</span>
          <ul className="cape-genres">
            {genres.map((genero) => (
              <li key={genero}>{genero}</li>
            ))}
          </ul>
          <div className="show-cape-options">
            <div className="cape-mylist">
              <img
                width="20"
                height="15"
                src={ConfirmIcon}
                alt="My list Icon"
              />
              <span>My List</span>
            </div>

            <button className="cape-btn">
              <img width="24" height="24" src={PlayIcon} alt="Play icon" /> Play
            </button>

            <div className="cape-info">
              <img width="18" height="18" src={InfoIcon} alt="Info icon" />
              <span>Info</span>
            </div>
          </div>
        </div>
      </div>
      <NavBar />
    </>
  );
};

export { Home };
