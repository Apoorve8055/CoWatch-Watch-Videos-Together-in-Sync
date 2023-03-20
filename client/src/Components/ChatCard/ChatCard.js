import "./ChatCard.scss";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import Avatar from "react-avatar";
const ChatCard = ({ name, profilePic, msgCount, favorite }) => (
  <div className="card">
    <div className="person-details">
      <Avatar name={name} size="50" round={true} src={profilePic} />
      <div className="person-name">{name}</div>
    </div>
    <div className="sideIcons">
      {msgCount && <div className="message-count">{msgCount}</div>}
      {favorite ? (
        <StarRateRoundedIcon className="favorite" />
      ) : (
        <StarBorderOutlinedIcon className="icon" />
      )}
    </div>
  </div>
);

export default ChatCard;
