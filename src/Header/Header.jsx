import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './Option/HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';

const Header = () => {
    return (
      <div className="header">
        <div className="header_izq">
          <img
            src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg"
            alt="/"
          />
          <div className="header_search">
            <SearchIcon className="seachClass" />
            <input type="text" placeholder="Buscar" />
          </div>
        </div>
        <div className="header_rigth">
          <HeaderOption Icon={HomeIcon} title="Inicio" />
          <HeaderOption Icon={SupervisorAccountIcon} title="Mi red" />
          <HeaderOption Icon={BusinessCenterIcon} title="Empleos" />
          <HeaderOption Icon={ChatBubbleIcon} title="Mensajes" />
          <HeaderOption Icon={NotificationsActiveIcon} title="Notificación" />
          <HeaderOption avatar="avatar/avatar_6.png" title="Yo" />
        </div>
      </div>
    );
}
 
export default Header;