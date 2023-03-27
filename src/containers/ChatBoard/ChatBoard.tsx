import React from "react";
import Messages from "../Messages/Messages";
import PeopleList from "../PeopleList/PeopleList";

interface Props {}

function ChatBoard(props: Props) {
  const {} = props;

  return (
    <section style={{ backgroundColor: "#eee" }}>
      <div className="container py-5">
        <div className="row">
          <PeopleList />
          <Messages messageList={[]} />
        </div>
      </div>
    </section>
  );
}

export default ChatBoard;
