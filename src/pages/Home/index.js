import { useState, useEffect } from 'react';
import { getShows, getShow } from '../../api/movies';
import { NavBar } from '../../components/shared/NavBar';
import Logo from '../../assets/icons/logo.svg';

import './styles.css';

const Home = () => {
  const [shows, setShows] = useState([]);
  const [showCape, setShowCape] = useState({});

  useEffect(() => {
    const fetchShows = async () => {
      setShows(await getShows());
    };
    const fetchShow = async () => {
      setShowCape(await getShow());
    };
    fetchShows();
    fetchShow();
  }, []);

  // const firstsShows = shows.slice(0, 10);

  const { image, genres } = showCape;
  console.log(showCape);

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
      <div>
        <h1 className="show-title">Teste</h1>
        <ul>
          {genres.map((genero) => (
            <li key={genero}>{genero}</li>
          ))}
        </ul>
        <div></div>
      </div>
      <NavBar />
    </>
  );
};

export { Home };
