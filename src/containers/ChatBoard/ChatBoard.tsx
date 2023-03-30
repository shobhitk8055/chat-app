import React, { useState, useEffect } from "react";
import { IMessage } from "../../types/Message";
import Messages from "../Messages/Messages";
import PeopleList from "../PeopleList/PeopleList";
import conversations from "../../assets/conversations.json";
import { useChatStore } from "../../store/chat";

interface Props {}

function ChatBoard(props: Props) {
  const {} = props;
  const [activePerson, setActivePerson] = useState<string>();
  const [messsageList, setMessageList] = useState<IMessage[]>([]);

  useEffect(() => {
    useChatStore.getState().setAllConversations(conversations);
  }, []);

  return (
    <section style={{ backgroundColor: "#eee" }}>
      <div className="container py-4">
        <div className="row">
          <PeopleList
            activePerson={activePerson}
            setActivePerson={setActivePerson}
            setMessages={(messages) => setMessageList(messages)}
          />
          <Messages messageList={messsageList} />
        </div>
      </div>
    </section>
  );
}

export default ChatBoard;
