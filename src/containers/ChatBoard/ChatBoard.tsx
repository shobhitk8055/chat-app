import React from "react";
import Chat from "../Chat/Chat";
import Conversations from "../Conversations/Conversations";

interface Props {}

function ChatBoard(props: Props) {
  const {} = props;

  return (
    <section style={{ backgroundColor: "#eee" }}>
      <div className="container py-5">
        <div className="row">
          <Conversations />
          <Chat />
        </div>
      </div>
    </section>
  );
}

export default ChatBoard;
