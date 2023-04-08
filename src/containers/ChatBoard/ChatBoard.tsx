import { useState, useEffect } from "react";
import { IMessage } from "../../types/Message";
import Messages from "../Messages/Messages";
import PeopleList from "../PeopleList/PeopleList";
import recentChats from "../../assets/recentChats.json";
import messageList from "../../assets/conversations.json";
import { useUserStore } from "../../store/user";
import { useConversationStore } from "../../store/conversation";
import { useMessageStore } from "../../store/message";
import AddPerson from "../../components/AddPerson/AddPerson";
import { IUser } from "../../types/User";

interface Props {}

function ChatBoard(props: Props) {
  const {} = props;
  const [activePerson, setActivePerson] = useState<string>();
  const { messages, setAllCurrentMessages } = useMessageStore();
  const { loggedInUser, setCurrentReceiver } = useUserStore();
  const { conversations, setAllConversation, pushConversation } =
    useConversationStore();

  //Load the recent conversations and all messages from json file
  useEffect(() => {
    const user = loggedInUser.id;
    const userConversations = recentChats.find((i) => i.userId === user);
    if (userConversations) {
      setAllConversation(userConversations.peoples);
    }
    useMessageStore.getState().setAllMessages(messageList);
  }, []);

  //Set a person as active and load its previous messages
  const setPerson = (user: IUser) => {
    setActivePerson(user.id);
    setCurrentReceiver(user);
    const msgs = messages.filter(
      (i) =>
        (i.sender.id === loggedInUser.id && i.receiver.id === user.id) ||
        (i.receiver.id === loggedInUser.id && i.sender.id === user.id)
    );
    setAllCurrentMessages(msgs);
    document.getElementById("messageInput")?.focus();
  };

  //New conversation handler
  const handleAddPerson = (user: IUser) => {
    const findConversation = conversations.find((i) => i.user.id === user.id);
    if (!findConversation) {
      pushConversation({
        user,
        lastMessage: "",
        lastMessageAt: "",
        unreadMessages: 0,
      });
    }
    setPerson(user);
  };

  return (
    <section style={{ backgroundColor: "#eee" }}>
      <div className="container py-4">
        <div className="row">
          <PeopleList
            conversations={conversations}
            activePerson={activePerson}
            setActivePerson={setPerson}
          />
          <Messages />
          <AddPerson setPersonConversations={handleAddPerson} />
        </div>
      </div>
    </section>
  );
}

export default ChatBoard;
