import "./ReceivedMsgCard.scss";
import Avatar from "react-avatar";

const ReceivedMsgCard = () => {
  return (
    <>
      <div className="received-msg-contianer">
        <Avatar
          className="avatar"
          name={"Apoorve"}
          size="32"
          round={true}
          src={"https://avatars.githubusercontent.com/u/30072249?v=4"}
        />

        <div className="msg-and-time">
          <div className="msg-box">msg</div>
          <span>02:10 AM</span>
        </div>
      </div>
    </>
  );
};

export default ReceivedMsgCard;
