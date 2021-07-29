import homeIcon from '../../../assets/icons/home.svg';
import searchIcon from '../../../assets/icons/search.svg';
import soonIcon from '../../../assets/icons/soon.svg';
import downloadIcon from '../../../assets/icons/download.svg';
import moreIcon from '../../../assets/icons/more.svg';

import './styles.css';

const navIcons = [
  {
    name: 'Home',
    icon: homeIcon,
    width: '23.87',
    height: '20.35',
  },
  {
    name: 'Search',
    icon: searchIcon,
    width: '19.38',
    height: '20.1',
  },
  {
    name: 'Coming Soon',
    icon: soonIcon,
    width: '22',
    height: '23',
  },
  {
    name: 'Downloads',
    icon: downloadIcon,
    width: '20',
    height: '24.62',
  },
  {
    name: 'More',
    icon: moreIcon,
    width: '19',
    height: '14',
  },
];

const NavIcon = (props) => {
  return (
    <li className="nav-icon">
      <img
        width={props.width}
        height={props.height}
        src={props.icon}
        alt="Icon"
      />
      <span>{props.children}</span>
    </li>
  );
};

const NavBar = () => {
  return (
    <nav>
      <ul className="nav-bar">
        {navIcons.map(({ name, icon, width, height }) => (
          <NavIcon key={name} width={width} height={height} icon={icon}>
            {name}
          </NavIcon>
        ))}
      </ul>
    </nav>
  );
};

export { NavBar };
