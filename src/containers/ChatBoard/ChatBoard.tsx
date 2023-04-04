import { useState, useEffect } from "react";
import { IMessage } from "../../types/Message";
import Messages from "../Messages/Messages";
import PeopleList from "../PeopleList/PeopleList";
import recentChats from "../../assets/recentChats.json";
import messageList from "../../assets/conversations.json";
import { useUserStore } from "../../store/user";
import { useConversationStore } from "../../store/conversation";
import { useMessageStore } from "../../store/message";

interface Props {}

function ChatBoard(props: Props) {
  const {} = props;
  const [activePerson, setActivePerson] = useState<string>();

  const { loggedInUser } = useUserStore();
  const { conversations, setAllConversation } = useConversationStore();

  useEffect(() => {
    const user = loggedInUser.id;
    const userConversations = recentChats.find((i) => i.userId === user);
    if (userConversations) {
      setAllConversation(userConversations.peoples);
    }
    useMessageStore.getState().setAllMessages(messageList);
  }, []);

  return (
    <section style={{ backgroundColor: "#eee" }}>
      <div className="container py-4">
        <div className="row">
          <PeopleList
            conversations={conversations}
            activePerson={activePerson}
            setActivePerson={setActivePerson}
          />
          <Messages />
        </div>
      </div>
    </section>
  );
}

export default ChatBoard;
