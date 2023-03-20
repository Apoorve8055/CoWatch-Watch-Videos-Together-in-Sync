import "./Sidebar.scss";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { useState } from "react";
import ChatCard from "../ChatCard/ChatCard";
const Sidebar = () => {
  const [activeChatType, setActiveChatType] = useState("normal");
  const chats = [
    {
      name: "Apoorve Verma",
      profilePic:
        "https://apoorveverma.com/wp-content/uploads/2021/07/WhatsApp_Image_2021-07-06_at_2.18.13_PM-removebg-preview.png",
      msgCount: "1",
      favorite: true,
      group: false,
    },
    {
      name: "Ceyhun Akar",
      profilePic: "https://randomuser.me/api/portraits/med/men/72.jpg",
      msgCount: "",
      favorite: true,
      group: false,
    },
    {
      name: "Ritthy Rivera",
      profilePic: "https://randomuser.me/api/portraits/med/men/87.jpg",
      msgCount: "1",
      favorite: false,
      group: false,
    },
    {
      name: "C",
      profilePic: "",
      msgCount: "1",
      favorite: false,
      group: false,
    },
    {
      name: "Ann Dehn",
      profilePic: "https://randomuser.me/api/portraits/med/women/39.jpg",
      msgCount: "1",
      favorite: false,
      group: false,
    },
    {
      name: "Ann Dehn",
      profilePic: "https://randomuser.me/api/portraits/med/women/39.jpg",
      msgCount: "1",
      favorite: false,
      group: false,
    },
    {
      name: "Ann Dehn",
      profilePic: "https://randomuser.me/api/portraits/med/women/39.jpg",
      msgCount: "1",
      favorite: true,
      group: false,
    },
    {
      name: "Dev Group",
      profilePic: "",
      msgCount: "1",
      favorite: true,
      group: true,
    },
  ];
  const handleChatType = (chatType) => {
    setActiveChatType(chatType);
  };

  const filteredChats = chats.filter((chat) => {
    if (activeChatType === "normal" && !chat.group) {
      return true;
    } else if (activeChatType === "group" && chat.group) {
      return true;
    } else if (activeChatType === "favorites" && chat.favorite) {
      return true;
    }
    return false;
  });

  return (
    <div className="Sidebar">
      <div className="search">
        <SearchRoundedIcon className="icon" />
        <input placeholder="Search Conversation" />
      </div>
      <div className="chat-container">
        <div className="chat-type">
          {["favorites", "normal", "group"].map((chatType) => (
            <div
              key={chatType}
              className={`chat-type-item ${
                chatType === activeChatType ? "active" : ""
              }`}
              onClick={() => handleChatType(chatType)}
            >
              {chatType}
            </div>
          ))}
        </div>

        <div className="chat-area">
          {filteredChats.map((chat, index) => (
            <ChatCard
              key={index}
              name={chat.name}
              profilePic={chat.profilePic}
              msgCount={chat.msgCount}
              favorite={chat.favorite}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
