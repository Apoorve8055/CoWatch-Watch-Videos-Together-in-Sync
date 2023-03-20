import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Avatar from "react-avatar";
import ReportRoundedIcon from "@mui/icons-material/ReportRounded";
import ReceivedMsgCard from "../../Components/ReceivedMsgCard/ReceivedMsgCard";
import SendMsgCard from "../../Components/SendMsgCard/SendMsgCard";
import EmojiPicker from "../../Components/EmojiPicker/EmojiPicker";
import SentimentSatisfiedRoundedIcon from "@mui/icons-material/SentimentSatisfiedRounded";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import "./Chat.scss";

const Chat = () => {
  const { id } = useParams();
  const [isPickerOpen, setIsPickerOpen] = useState(false);
  const [msg, setMsg] = useState("");

  const handleChange = (event) => {
    setMsg(event.target.value);
  };

  const handleEmojiSelect = (emoji) => {
    setMsg((prevMsg) => prevMsg + emoji.native);
    setIsPickerOpen(false); // Close the picker after selecting an emoji
  };

  const handlePickerOpen = () => {
    setIsPickerOpen(true);
  };

  const handlePickerClose = () => {
    setIsPickerOpen(false);
  };

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
            marginRight: "5px",
          }}
        />
      </div>
      <div className="chat-body">
        <div className="chat-area">
          <ReceivedMsgCard />
          <SendMsgCard />
          {isPickerOpen && ( // Display the picker only when isPickerOpen is true
            <div className="emoji-panel">
              <EmojiPicker onSelect={handleEmojiSelect} />
            </div>
          )}
        </div>

        <div className="chat-footer">
          <Avatar
            className="avatar"
            name={"Apoorve"}
            size="35"
            round={true}
            src={"https://avatars.githubusercontent.com/u/30072249?v=4"}
          />

          <input
            className="input"
            placeholder="Enter Your message"
            onChange={handleChange}
            value={msg}
          />
          <SentimentSatisfiedRoundedIcon
            onClick={handlePickerOpen}
            style={{ cursor: "pointer" }}
          />
          <div className="send-btn">
            <SendRoundedIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
