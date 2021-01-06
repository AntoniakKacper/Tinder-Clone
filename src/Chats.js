import React from "react";
import { Chat } from "./Chat";

export const Chats = () => {
  return (
    <div className="chats">
      <Chat
        name="Megan"
        message="Hello"
        timestamp="40 seconds ago"
        profilePic="https://ocdn.eu/pulscms-transforms/1/FpGk9kpTURBXy81ZmRmMTJjYThiYjJkODE3ZmRlODNmZGE3YzYxMTU1ZC5qcGeTlQPNAjYjzQiRzQTSkwmmOWU4NjQ1BpMFzQI6zQEsgaEwAQ/megan-fox.jpg"
      />
      <Chat
        name="Taylor"
        message="Hi"
        timestamp="20 seconds ago"
        profilePic="https://upload.wikimedia.org/wikipedia/commons/d/d9/191125_Taylor_Swift_at_the_2019_American_Music_Awards.png"
      />
      <Chat
        name="Ryan"
        message="Whats up"
        timestamp="18 seconds ago"
        profilePic="https://fwcdn.pl/ppo/69/71/56971/449737.3.jpg"
      />
      <Chat
        name="Tom"
        message="Yo :)"
        timestamp="11 seconds ago"
        profilePic="https://upload.wikimedia.org/wikipedia/commons/3/33/Tom_Cruise_by_Gage_Skidmore_2.jpg"
      />
    </div>
  );
};
