import React from "react";
import { IUser } from "../../types/User";

interface Props {
  user: IUser;
  lastMessage: string;
  lastMessageAt: string;
  unreadMessages: number;
}

function Person(props: Props) {
  const { user, lastMessage, lastMessageAt, unreadMessages } = props;

  return (
    <li className="p-2 border-bottom" style={{ backgroundColor: "#eee" }}>
      <a href="#!" className="d-flex justify-content-between">
        <div className="d-flex flex-row">
          <img
            src={user.image}
            alt="avatar"
            className="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
            width={60}
          />
          <div className="pt-1">
            <p className="fw-bold mb-0">{user.name}</p>
            <p className="small text-muted">{lastMessage}</p>
          </div>
        </div>
        <div className="pt-1">
          <p className="small text-muted mb-1">{lastMessageAt}</p>
          {unreadMessages > 0 && (
            <span className="badge bg-danger float-end">{unreadMessages}</span>
          )}
        </div>
      </a>
    </li>
  );
}

export default Person;
