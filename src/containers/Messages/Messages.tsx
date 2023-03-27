import React from "react";
import Message from "../../components/Message/Message";
import { IMessage } from "../../types/Message";

interface Props {
  messageList: IMessage[];
}

function Messages(props: Props): React.ReactElement {
  const { messageList } = props;

  return (
    <div className="col-md-6 col-lg-7 col-xl-8">
      <ul className="list-unstyled messages">
        {messageList.map((i) => (
          <Message message={i} />
        ))}
      </ul>
      
      <div className="form-outline mb-3 d-flex">
        <input
          className="form-control me-2 bg-white send-message-input"
          id="textAreaExample2"
          defaultValue={""}
        />
        <label className="form-label" htmlFor="textAreaExample2">
          Message
        </label>
        <button type="button" className="btn btn-info btn-rounded float-end">
          Send
        </button>
      </div>
    </div>
  );
}

export default Messages;
