import "./SendMsgCard.scss";
import Avatar from "react-avatar";

const SendMsgCard = () => {
  return (
    <div className="send-msg-contianer">
      <div className="msg-and-time">
        <div className="msg-box">msg</div>
        <span>02:10 AM</span>
      </div>
    </div>
  );
};

export default SendMsgCard;
