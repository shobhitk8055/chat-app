import React from "react";
import { useChatStore } from "../../store/chat";
import { IMessage } from "../../types/Message";
import { getDateString } from "../../utils/format";

const Image = ({ source }: { source: string }) => {
  return (
    <img
      src={source}
      alt="avatar"
      className="rounded-circle d-flex align-self-start me-3 shadow-1-strong"
      width={60}
    />
  );
};

const Content = ({ message }: { message: IMessage }) => {
  return (
    <div className="card">
      <div className="card-header d-flex justify-content-between p-3">
        <p className="fw-bold mb-0">{message.sender.name}</p>
        <p className="text-muted small mb-0">
          <span>
            <i className="far fa-clock" /> <span>{getDateString(message.time)}</span>
          </span>
        </p>
      </div>
      <div className="card-body">
        <p className="mb-0">{message.text}</p>
      </div>
    </div>
  );
};

const Message = ({ message }: { message: IMessage }) => {
  const { loggedInUser } = useChatStore();

  return (
    <li className="d-flex justify-content-between mb-4">
      {message.sender.id === loggedInUser.id ? (
        <>
          <Image source={message.sender.image} />
          <Content message={message} />
        </>
      ) : (
        <>
          <Content message={message} />
          <Image source={message.sender.image} />
        </>
      )}
    </li>
  );
};

export default Message;
