import React from "react";
import { userIcon } from "../utils/constants";

const ChatMessage = ({ name, message }) => {
  return (
    <div id="chat-msg" className="flex items-center my-1 ">
      {/* <img alt="user" src={userIcon} className="size-8" /> */}
      <span className="mx-1 text-sm font-bold">{name}</span>
      <span className="text-gray-500">{message}</span>
    </div>
  );
};

export default ChatMessage;
