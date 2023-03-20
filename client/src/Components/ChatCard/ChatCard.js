import "./ChatCard.scss";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import Avatar from "react-avatar";
import { Link } from "react-router-dom";

const ChatCard = ({ name, profilePic, msgCount, favorite }) => (
  <div className="card">
    <Link
      to={"/chat/q132ed"}
      style={{
        width: "100%",
        "text-decoration": "none",
        color: "aliceblue",
      }}
    >
      <div className="person-details">
        <Avatar name={name} size="40" round={true} src={profilePic} />
        <div className="person-name">{name}</div>
      </div>
    </Link>

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
