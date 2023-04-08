import React from "react";
import people from "../../assets/people.json";
import { upperFirst } from "lodash";
import { IUser } from "../../types/User";
import { useConversationStore } from "../../store/conversation";
import { useUserStore } from "../../store/user";

interface AddPersonProps {
  setPersonConversations: (i: IUser) => void;
}
const AddPerson = (props: AddPersonProps) => {
  const { setPersonConversations } = props;
  const { loggedInUser } = useUserStore();

  return (
    <div
      className="modal fade"
      id="addPersonModal"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Choose a contact
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <ul className="list-group">
              {people.filter(i => i.id !== loggedInUser.id).map((i, index) => (
                <li
                  key={index}
                  onClick={() => setPersonConversations(i)}
                  data-bs-dismiss="modal"
                  className="list-group-item"
                >
                  <img className="listImage" src={i.image} />
                  {upperFirst(i.name)}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPerson;
