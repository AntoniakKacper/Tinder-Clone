import React, { useState } from "react";
import "./ChatScreen.css";

import Avatar from "@material-ui/core/Avatar";

export const ChatScreen = () => {
  const [input, setInput] = useState();
  const [messages, setMessages] = useState([
    {
      name: "Megan",
      image:
        "https://ocdn.eu/pulscms-transforms/1/FpGk9kpTURBXy81ZmRmMTJjYThiYjJkODE3ZmRlODNmZGE3YzYxMTU1ZC5qcGeTlQPNAjYjzQiRzQTSkwmmOWU4NjQ1BpMFzQI6zQEsgaEwAQ/megan-fox.jpg",
      message: "Hello",
    },
    {
      name: "Taylor",
      image:
        "https://ocdn.eu/pulscms-transforms/1/FpGk9kpTURBXy81ZmRmMTJjYThiYjJkODE3ZmRlODNmZGE3YzYxMTU1ZC5qcGeTlQPNAjYjzQiRzQTSkwmmOWU4NjQ1BpMFzQI6zQEsgaEwAQ/megan-fox.jpg",
      message: "How it going!",
    },
    {
      message: "How are you?",
    },
  ]);

  const handleSend = (e) => {
    e.preventDefault();

    setMessages([...messages, { message: input }]);
    setInput("");
  };

  return (
    <div className="chatScreen">
      <p className="chatScreen__timestamp">
        YOU MATCHED WITH MEGAN ON 10/08/2021
      </p>
      {messages.map((message) =>
        message.name ? (
          <div className="chatScreen_message">
            <Avatar
              className="chatScreen__image"
              alt={message.name}
              src={message.image}
            ></Avatar>
            <p className="chatScreen_text">{message.message}</p>
          </div>
        ) : (
          <div className="chatScreen_message">
            <p className="chatScreen_textUser">{message.message}</p>
          </div>
        )
      )}

      <form className="chatScreen__input">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="chatScreen__inputField"
          type="text"
          placeholder="Type a message..."
        />
        <button
          onClick={handleSend}
          type="submit"
          className="chatScreen__inputButton"
        >
          SEND
        </button>
      </form>
    </div>
  );
};
