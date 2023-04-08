import React, { useState, useEffect } from "react";
import Person from "../../components/Person/Person";
import { IMessage } from "../../types/Message";
import { IConversation } from "../../types/Conversation";
import { useMessageStore } from "../../store/message";
import { useUserStore } from "../../store/user";
import { IUser } from "../../types/User";

interface Props {
  conversations: IConversation[];
  activePerson?: string;
  setActivePerson: (user: IUser) => void;
}

function PeopleList(props: Props): React.ReactElement {
  const { conversations, activePerson, setActivePerson } = props;

  const [value, setValue] = useState<string>();
  const [allConversations, setAllConversations] = useState<IConversation[]>();
  const [viewConversations, setViewConversations] = useState<IConversation[]>();

  const handleValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setValue(val);
    if (val) {
      const convos = allConversations?.filter((i) =>
        i.user.name.toLowerCase().match(new RegExp(val))
      );
      setViewConversations(convos);
    } else {
      setViewConversations(allConversations);
    }
  };

  useEffect(() => {
    if (conversations) {
      setAllConversations(conversations);
      setViewConversations(conversations);
    }
  }, [conversations]);

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
              value={value}
              onChange={handleValue}
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
            <i
              data-bs-toggle="modal"
              data-bs-target="#addPersonModal"
              className="fa-solid fa-circle-plus add-icon"
            ></i>
          </div>
          {viewConversations?.length === 0 && (
            <p className="no-new-people">No chats found</p>
          )}
          <ul className="list-unstyled mb-0 person-list">
            {viewConversations?.map((person, index) => (
              <Person
                key={index}
                isActive={!!(activePerson && activePerson === person.user.id)}
                setActive={() => setActivePerson(person.user)}
                user={person.user}
                lastMessage={person.lastMessage}
                lastMessageAt={person.lastMessageAt}
                unreadMessages={person.unreadMessages}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PeopleList;
