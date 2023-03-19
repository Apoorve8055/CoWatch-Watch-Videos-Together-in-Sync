import "./Header.scss";
import logo from "../../assets/png/user.png";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import GroupRoundedIcon from "@mui/icons-material/GroupRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import PowerSettingsNewRoundedIcon from "@mui/icons-material/PowerSettingsNewRounded";
import ChatIcon from "@mui/icons-material/Chat";

const Header = () => {
  return (
    <div className="Header">
      <div className="header-container">
        <div className="header-menu">
          <img src={logo} alt="logo" />
          <div className="menu">
            <HomeRoundedIcon className="item" />
            <ChatIcon className="item" />
            <GroupRoundedIcon className="item" />
            <SettingsRoundedIcon className="item" />
          </div>
        </div>
        <PowerSettingsNewRoundedIcon className="logOut" />
      </div>
    </div>
  );
};
export default Header;
