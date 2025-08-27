import React, { useEffect, useState } from "react";
import LiveMessage from "../components/LiveMessage";
import { useDispatch, useSelector } from "react-redux";
import { addLiveMessage } from "../redux/chatSlice";
import { generateRandomName, makeRandomMessage } from "../assets/helper";

const LiveContainer = () => {
  const [sendMessage, setSendMessage] = useState("");
  const dispatch = useDispatch();

  const chatMessage = useSelector((store) => store.chat.message);

  useEffect(() => {
    const timer = setInterval(() => {
      dispatch(
        addLiveMessage({
          name: generateRandomName(),
          message: makeRandomMessage(25),
        })
      );
    }, 1500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const handleMessageSend = () => {
    dispatch(
      addLiveMessage({
        name: "Armaan Shaikh",
        message: sendMessage,
      })
    );
    setSendMessage("");
  };
  return (
    <>
      <div className="p-2 m-2  h-[600px] border border-black bg-blue-200 rounded-lg overflow-y-scroll flex flex-col-reverse">
        {chatMessage.map((chat) => (
          <LiveMessage name={chat.name} message={chat.message} />
        ))}
      </div>
      <div className="border m-2 border-black p-2">
        <input
          className="w-96 border border-black px-2 "
          type="text"
          value={sendMessage}
          onChange={(e) => setSendMessage(e.target.value)}
          placeholder="Type something"
        />
        <button
          className="px-4 bg-green-300 mx-2 rounded-lg cursor-pointer"
          onClick={handleMessageSend}
        >
          Send
        </button>
      </div>
    </>
  );
};

export default LiveContainer;
