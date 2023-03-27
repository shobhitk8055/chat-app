import React from "react";

interface Props {}

function Chat(props: Props) {
  const {} = props;

  return (
    <div className="col-md-6 col-lg-7 col-xl-8">
 
      <ul className="list-unstyled messages">
        <li className="d-flex justify-content-between mb-4">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
            alt="avatar"
            className="rounded-circle d-flex align-self-start me-3 shadow-1-strong"
            width={60}
          />
          <div className="card">
            <div className="card-header d-flex justify-content-between p-3">
              <p className="fw-bold mb-0">Brad Pitt</p>
              <p className="text-muted small mb-0">
                <i className="far fa-clock" /> 12 mins ago
              </p>
            </div>
            <div className="card-body">
              <p className="mb-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </li>
        <li className="d-flex justify-content-between mb-4">
          <div className="card w-100">
            <div className="card-header d-flex justify-content-between p-3">
              <p className="fw-bold mb-0">Lara Croft</p>
              <p className="text-muted small mb-0">
                <i className="far fa-clock" /> 13 mins ago
              </p>
            </div>
            <div className="card-body">
              <p className="mb-0">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium.
              </p>
            </div>
          </div>
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-5.webp"
            alt="avatar"
            className="rounded-circle d-flex align-self-start ms-3 shadow-1-strong"
            width={60}
          />
        </li>
        <li className="d-flex justify-content-between mb-4">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
            alt="avatar"
            className="rounded-circle d-flex align-self-start me-3 shadow-1-strong"
            width={60}
          />
          <div className="card">
            <div className="card-header d-flex justify-content-between p-3">
              <p className="fw-bold mb-0">Brad Pitt</p>
              <p className="text-muted small mb-0">
                <i className="far fa-clock" /> 10 mins ago
              </p>
            </div>
            <div className="card-body">
              <p className="mb-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </li>
       
      </ul>
      <div className="form-outline mb-3 d-flex">
            <input
              className="form-control me-2 bg-white"
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

export default Chat;
