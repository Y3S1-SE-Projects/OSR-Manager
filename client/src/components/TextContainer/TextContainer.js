import React from "react";

import onlineIcon from "../../icons/onlineIcon.png";

import "./TextContainer.css";

const TextContainer = ({ users }) => (
  <div className="textContainer">
    <div>
      <h1>
        OSR-Manager Realtime Chat{" "}
        <span role="img" aria-label="emoji">
          💬
        </span>
      </h1>
      <h4>
        Communicate with your supervisors by creating a unique room and senbding
        a invitation.{" "}
        <span role="img" aria-label="emoji">
          ⬅️
        </span>
      </h4>
      <h4>
        You can also create personal rooms to communicate with your peers about
        the research paper{" "}
        <span role="img" aria-label="emoji">
          ⬅️
        </span>
      </h4>
    </div>
    {users ? (
      <div>
        <h1>People currently chatting:</h1>
        <div className="activeContainer">
          <h2>
            {users.map(({ name }) => (
              <div key={name} className="activeItem">
                {name}
                <img alt="Online Icon" src={onlineIcon} />
              </div>
            ))}
          </h2>
        </div>
      </div>
    ) : null}
  </div>
);

export default TextContainer;
