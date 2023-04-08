import React, { useState } from "react";
import Message from "../../components/Message/Message";
import { useMessageStore } from "../../store/message";
import { useUserStore } from "../../store/user";
import moment from "moment";
import { useConversationStore } from "../../store/conversation";

interface Props {}

function CheckNew() {
  const { currentReceiver } = useUserStore();
  const { currentMessages, pushToCurrentChat, pushMessage } = useMessageStore();

  if (!currentReceiver) {
    return (
      <p className="no-new">Click on a user or start a new conversation!</p>
    );
  }
  if (currentMessages.length === 0) {
    return <p className="no-new">No recent messages!</p>;
  }
  return null;
}
function Messages(props: Props): React.ReactElement {
  const { currentMessages, pushToCurrentChat, pushMessage } = useMessageStore();
  const [inputMessage, setInputMessage] = useState<string>("");
  const { loggedInUser, currentReceiver } = useUserStore();
  const { updateConversation } = useConversationStore();

  const addMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.stopPropagation();
    if (inputMessage && currentReceiver) {
      const time = moment().format();
      const msg = {
        sender: { ...loggedInUser },
        receiver: { ...currentReceiver },
        text: inputMessage,
        time,
      };
      pushToCurrentChat(msg);
      pushMessage(msg);
      updateConversation(currentReceiver.id, inputMessage, time);
      setInputMessage("");
    }
  };

  return (
    <div className="col-md-6 col-lg-7 col-xl-8">
      <CheckNew />
      <ul className="list-unstyled messages">
        {currentMessages.map((i, index) => (
          <Message message={i} key={index} />
        ))}
      </ul>

      <form onSubmit={addMessage}>
        <div className="form-outline mb-3 d-flex">
          <input
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            className="form-control me-2 bg-white send-message-input"
            id="messageInput"
          />
          <label className="form-label" htmlFor="messageInput">
            Message
          </label>
          <button
            type="submit"
            className="btn btn-info btn-rounded float-end"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}

export default Messages;
