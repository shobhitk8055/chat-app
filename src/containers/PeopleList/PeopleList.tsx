import React from "react";
import Person from "../../components/Person/Person";
import { useChatStore } from "../../store/chat";
import { IMessage } from "../../types/Message";

interface Props {
  activePerson?: string;
  setActivePerson: (id: string) => void;
  setMessages: (messages: IMessage[]) => void;
}

function PeopleList(props: Props): React.ReactElement {
  const { activePerson, setActivePerson, setMessages } = props;
  const { conversations, loggedInUser } = useChatStore();

  const handleActiveUser = (id: string) => {
    setActivePerson(id);
    const messages = conversations.filter(
      (i) =>
        (i.sender.id === loggedInUser.id && i.receiver.id === id) ||
        (i.receiver.id === loggedInUser.id && i.sender.id === id)
    );
    setMessages(messages);
  };

  return (
    <div className="col-md-6 col-lg-5 col-xl-4 mb-4 mb-md-0">
      <div className="card mb-3">
        <div className="card-body">
          <div className="input-group rounded">
            <input
              type="search"
              className="form-control rounded search-conversations"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="search-addon"
            />
            <span className="input-group-text border-0" id="search-addon">
              <i className="fas fa-search"></i>
            </span>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <div className="d-flex justify-content-between mb-2 text-primary">
            <h6>Conversations</h6>
            <i className="fa-solid fa-circle-plus add-icon"></i>
          </div>
          <ul className="list-unstyled mb-0 person-list">
            <Person
              isActive={!!(activePerson && activePerson === "1")}
              setActive={() => setActivePerson("1")}
              user={{
                id: "1",
                name: "Danny Smith",
                image:
                  "https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-1.webp",
              }}
              lastMessage="Lorem ipsum dolor sit."
              lastMessageAt="Just now"
              unreadMessages={0}
            />
            <Person
              isActive={!!(activePerson && activePerson === "2")}
              setActive={() => handleActiveUser("2")}
              user={{
                id: "2",
                name: "Marlyn Manrow",
                image:
                  "https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-1.webp",
              }}
              lastMessage="Lorem ipsum dolor sit."
              lastMessageAt="Just now"
              unreadMessages={0}
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PeopleList;
