import "./Chat.scss";
import { useParams } from "react-router-dom";
import Avatar from "react-avatar";
import ReportRoundedIcon from "@mui/icons-material/ReportRounded";
const Chat = () => {
  const { id } = useParams();
  return (
    <div className="chat-container">
      <div className="chat-header">
        <div className="chat-user">
          <Avatar
            className="avatar"
            name={"Apoorve"}
            size="40"
            round={true}
            src={"https://avatars.githubusercontent.com/u/30072249?v=4"}
          />
          <div className="username">apoorve verma</div>
        </div>
        <ReportRoundedIcon
          style={{
            "margin-right": "5px",
          }}
        />
      </div>
      <div className="chat-body">chat-body</div>
    </div>
  );
};
export default Chat;
