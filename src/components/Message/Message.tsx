import React from "react";
import { IMessage } from "../../types/Message";
import { useUserStore } from "../../store/user";
import { getTime } from "../../utils/format";
import { upperFirst } from "lodash";
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
    <div className="card w-100">
      <div className="card-header d-flex justify-content-between header">
        <p className="fw-bold mb-0">{upperFirst(message.sender.name)}</p>
        <p className="text-muted small mb-0">
          <span>
            <i className="far fa-clock" /> <span>{getTime(message.time)}</span>
          </span>
        </p>
      </div>
      <div className="card-body message-body">
        <p className="mb-0">{message.text}</p>
      </div>
    </div>
  );
};

const Message = ({ message }: { message: IMessage }) => {
  const { loggedInUser } = useUserStore();

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
