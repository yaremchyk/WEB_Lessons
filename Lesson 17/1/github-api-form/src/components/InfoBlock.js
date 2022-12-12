import axios from "axios";
import React, { useState } from "react";

export default function InfoBlock() {
  const loginRef = React.createRef();

  const [user, setUser] = useState({});

  const findUser = (e) => {
    axios
      .get(`https://api.github.com/users/${loginRef.current.value}`)
      .then((res) => {
        if (res.data.name === null) {
          res.data.name = "No Name";
        }
        if (res.data.blog === "") {
          res.data.blog = "No Blog";
        }
        if (res.data.location === null) {
          res.data.location = "No City";
        }
        if (res.data.email === null) {
          res.data.email = "No Email";
        }
        setUser(res.data);
      });
  };

  return (
    <div className="infBlock">
      <label for="searchInput">
        <span>Search login</span>
        <input
          type="text"
          id="searchInput"
          ref={loginRef}
          onBlur={findUser}
        ></input>
      </label>
      <hr></hr>

      <div className="styledDiv">
        <div id="firstDiv">
          <img
            src={user.avatar_url}
            height="196px"
            width="196px"
            alt="Github Avatar"
          ></img>
          <div className="valueDiv">
            <span className="mainSpan">Name:</span>
            <span>{user.name}</span>
          </div>
          <hr></hr>
          <div className="valueDiv">
            <span className="mainSpan">Login:</span>
            <span>{user.login}</span>
          </div>
          <hr></hr>
        </div>

        <div id="secDiv">
          <div className="valueDiv">
            <span className="mainSpan">Url to github:</span>
            <span>{user.url}</span>
          </div>
          <hr></hr>
          <div className="valueDiv">
            <span className="mainSpan">Blog:</span>
            <span>{user.blog}</span>
          </div>
          <hr></hr>
          <div className="valueDiv">
            <span className="mainSpan">City:</span>
            <span>{user.location}</span>
          </div>
          <hr></hr>
          <div className="valueDiv">
            <span className="mainSpan">Email:</span>
            <span>{user.email}</span>
          </div>
          <hr></hr>

          <div className="doubleDiv">
            <div className="valueDiv">
              <span className="mainSpan">Followers:</span>
              <span>{user.followers}</span>
            </div>
            <div className="valueDiv">
              <span className="mainSpan">Following:</span>
              <span>{user.following}</span>
            </div>
          </div>
          <hr></hr>
        </div>
      </div>
    </div>
  );
}
