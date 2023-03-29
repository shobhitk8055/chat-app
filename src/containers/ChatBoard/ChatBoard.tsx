import React, { useState } from "react";
import Messages from "../Messages/Messages";
import PeopleList from "../PeopleList/PeopleList";

interface Props {}

function ChatBoard(props: Props) {
  const {} = props;
  const [activePerson, setActivePerson] = useState<string | null>(null);

  return (
    <section style={{ backgroundColor: "#eee" }}>
      <div className="container py-4">
        <div className="row">
          <PeopleList
            activePerson={activePerson}
            setActivePerson={setActivePerson}
          />
          <Messages messageList={[]} />
        </div>
      </div>
    </section>
  );
}

export default ChatBoard;
