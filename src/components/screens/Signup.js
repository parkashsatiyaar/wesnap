import React, { useState } from "react";
import M from "materialize-css";
import { Link, useHistory } from "react-router-dom";
import Sidebar from "./Sidebar";
const Signup = () => {
  const history = useHistory();
  const [name, setname] = useState("");
  const [password, setpassword] = useState("");
  const [email, setemail] = useState("");
  const postData = () => {
    fetch("/signup", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "",
        email: "",
        password: "",
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          M.toast({ html: data.error, classes: "error" });
        } else {
          M.toast({ html: data.message, classes: "success" });
          history.push("/signin");
        }
      });
  };
  return (
    <div className="container">
      <div className="row">
        <Sidebar />
        <div className="col-lg-6">
          <div className="container text-center">
            <div className="logo">
              <img className="wp" src="wp.png" alt="logo" />
            </div>

            <div className="form text-center">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  autoComplete="off"
                  autoFocus
                  className="form-control"
                  value={name}
                  onChange={(e) => setname(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  autoComplete="off"
                  className="form-control"
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  autoComplete="off"
                  className="form-control"
                  value={password}
                  onChange={(e) => setpassword(e.target.value)}
                />
              </div>
              <div className="form-group">
                <button
                  className="btn"
                  type="submit"
                  onClick={() => postData()}
                >
                  Sign Up
                </button>
              </div>
            </div>
            <div className="text-center wrapper">
              <p>
                Already have an account? <Link to="/signin">Sign in</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer text-center">
        <Link to="#">About</Link>
        <Link to="#">Privacy</Link>
        <Link to="#">Terms</Link>
        <Link to="#">Help</Link>
        <div className="copy">
          <p>
            &copy; 2021 All Rights reserved to<Link to="/">WeSnap</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
