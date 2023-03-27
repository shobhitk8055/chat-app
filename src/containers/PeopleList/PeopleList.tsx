import React from "react";
import Person from "../../components/Person/Person";

interface Props {}

function PeopleList(props: Props): React.ReactElement {
  const {} = props;

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
              user={{
                name: "Danny Smith",
                image:
                  "https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-1.webp",
              }}
              lastMessage="Lorem ipsum dolor sit."
              lastMessageAt="Just now"
              unreadMessages={1}
            />
            <li className="p-2 border-bottom">
              <a href="#!" className="d-flex justify-content-between">
                <div className="d-flex flex-row">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-1.webp"
                    alt="avatar"
                    className="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
                    width={60}
                  />
                  <div className="pt-1">
                    <p className="fw-bold mb-0">Danny Smith</p>
                    <p className="small text-muted">Lorem ipsum dolor sit.</p>
                  </div>
                </div>
                <div className="pt-1">
                  <p className="small text-muted mb-1">5 mins ago</p>
                </div>
              </a>
            </li>
            <li className="p-2 border-bottom">
              <a href="#!" className="d-flex justify-content-between">
                <div className="d-flex flex-row">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-2.webp"
                    alt="avatar"
                    className="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
                    width={60}
                  />
                  <div className="pt-1">
                    <p className="fw-bold mb-0">Alex Steward</p>
                    <p className="small text-muted">Lorem ipsum dolor sit.</p>
                  </div>
                </div>
                <div className="pt-1">
                  <p className="small text-muted mb-1">Yesterday</p>
                </div>
              </a>
            </li>
            <li className="p-2 border-bottom">
              <a href="#!" className="d-flex justify-content-between">
                <div className="d-flex flex-row">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-3.webp"
                    alt="avatar"
                    className="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
                    width={60}
                  />
                  <div className="pt-1">
                    <p className="fw-bold mb-0">Ashley Olsen</p>
                    <p className="small text-muted">Lorem ipsum dolor sit.</p>
                  </div>
                </div>
                <div className="pt-1">
                  <p className="small text-muted mb-1">Yesterday</p>
                </div>
              </a>
            </li>
            <li className="p-2 border-bottom">
              <a href="#!" className="d-flex justify-content-between">
                <div className="d-flex flex-row">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-4.webp"
                    alt="avatar"
                    className="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
                    width={60}
                  />
                  <div className="pt-1">
                    <p className="fw-bold mb-0">Kate Moss</p>
                    <p className="small text-muted">Lorem ipsum dolor sit.</p>
                  </div>
                </div>
                <div className="pt-1">
                  <p className="small text-muted mb-1">Yesterday</p>
                </div>
              </a>
            </li>
            <li className="p-2 border-bottom">
              <a href="#!" className="d-flex justify-content-between">
                <div className="d-flex flex-row">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-5.webp"
                    alt="avatar"
                    className="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
                    width={60}
                  />
                  <div className="pt-1">
                    <p className="fw-bold mb-0">Lara Croft</p>
                    <p className="small text-muted">Lorem ipsum dolor sit.</p>
                  </div>
                </div>
                <div className="pt-1">
                  <p className="small text-muted mb-1">Yesterday</p>
                </div>
              </a>
            </li>
            <li className="p-2">
              <a href="#!" className="d-flex justify-content-between">
                <div className="d-flex flex-row">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                    alt="avatar"
                    className="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
                    width={60}
                  />
                  <div className="pt-1">
                    <p className="fw-bold mb-0">Brad Pitt</p>
                    <p className="small text-muted">Lorem ipsum dolor sit.</p>
                  </div>
                </div>
                <div className="pt-1">
                  <p className="small text-muted mb-1">5 mins ago</p>
                  <span className="text-muted float-end">
                    <i className="fas fa-check" aria-hidden="true" />
                  </span>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PeopleList;
