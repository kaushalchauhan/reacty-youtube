import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";

const LiveData = {
  name: "Kaushal Chauhan",
  message: "Hi, there this is youtube live chat😁",
};

const LiveChat = () => {
  const dispatch = useDispatch();
  const [chatMsg, setChatMsg] = useState("");
  const LiveDatafromStore = useSelector((store) => store.livechat.messages);
  // const handleSubmitMsg = () => {
  //   dispatch({ name: "guest user ", message: chatMsg });
  //   setChatMsg("");
  //   // console.log("hello");
  // };
  useEffect(() => {
    const id = setInterval(() => {
      // API Pooling
      dispatch(addMessage(LiveData));
    }, 2000);
    return () => clearInterval(id);
  }, []);
  return (
    <div>
      <div className="ml-2 p-2 border border-black w-full h-[580px] bg-slate-100 rounded-md overflow-y-scroll flex flex-col-reverse">
        {LiveDatafromStore.map((data, index) => (
          <ChatMessage key={index} name={data?.name} message={data?.message} />
        ))}
      </div>
      <form
        className="px-2 mt-2 flex gap-2"
        onSubmit={(e) => {
          e.preventDefault();
          if (chatMsg) {
            dispatch(addMessage({ name: "guest user ", message: chatMsg }));
            setChatMsg("");
          }
        }}
      >
        <input
          className="w-full p-2 border border-black outline-none"
          type="text"
          value={chatMsg}
          onChange={(e) => setChatMsg(e.target.value)}
        />
        <button className="bg-green-300 px-2">Send</button>
      </form>
    </div>
  );
};

export default LiveChat;
