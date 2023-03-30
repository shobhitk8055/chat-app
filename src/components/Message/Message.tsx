import React from "react";
import { IMessage } from "../../types/Message";

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
          <i className="far fa-clock" /> {message.time}
        </p>
      </div>
      <div className="card-body">
        <p className="mb-0">{message.text}</p>
      </div>
    </div>
  );
};

const Message = ({ message }: { message: IMessage }) => {
  return (
    <li className="d-flex justify-content-between mb-4">
      {message.type === "receive" ? (
        <>
          <Image source={message.image} />
          <Content message={message} />
        </>
      ) : (
        <>
          <Content message={message} />
          <Image source={message.image} />
        </>
      )}
    </li>
  );
};

export default Message;
