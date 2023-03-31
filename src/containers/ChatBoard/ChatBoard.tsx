import React, { useState, useEffect } from "react";
import { IMessage } from "../../types/Message";
import Messages from "../Messages/Messages";
import PeopleList from "../PeopleList/PeopleList";
import conversations from "../../assets/conversations.json";
import { useChatStore } from "../../store/chat";
import { IUser } from "../../types/User";

interface Props {}

function ChatBoard(props: Props) {
  const {} = props;
  const [activePerson, setActivePerson] = useState<string>();
  const [recentConversations, setRecentConversations] = useState<any[]>([]);
  const [messsageList, setMessageList] = useState<IMessage[]>([]);
  const { loggedInUser } = useChatStore();

  const getLastMessage = (i: string, id: string) => {
    return {
      text: "AB",
      time: "20-04-2020",
    };
  };
  useEffect(() => {
    useChatStore.getState().setAllConversations(conversations);
    const messages = conversations.filter(
      (i) =>
        i.sender.id === loggedInUser.id || i.receiver.id === loggedInUser.id
    );
    const users = new Map<string, IUser>();
    messages.forEach((i) => {
      users.set(i.sender.id, i.sender);
      users.set(i.receiver.id, i.receiver);
    });
    users.delete(loggedInUser.id);
    const peoples = [...users.values()];
    const peopleConversation = peoples.map((i) => {
      const lastMessage = getLastMessage(i.id, loggedInUser.id);
      return {
        user: i,
        lastMessage: lastMessage.text,
        lastMessageAt: lastMessage.time,
      };
    });
    setRecentConversations(peopleConversation);
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
