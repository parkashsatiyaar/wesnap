import React, { useState, useContext } from "react";
import M from "materialize-css";
import { UserContext } from "../../App";
import { Link, useHistory } from "react-router-dom";
import Sidebar from "./Sidebar";
const Signin = () => {
  const { state, dispatch } = useContext(UserContext);
  const history = useHistory();
  const [password, setpassword] = useState("");
  const [email, setemail] = useState("");
  const postData = () => {
    fetch("/signin", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          M.toast({ html: data.error, classes: "error" });
        } else {
          localStorage.setItem("jwt", data.token);
          localStorage.setItem("user", JSON.stringify(data.user));
          dispatch({ type: "USER", payload: data.user });
          M.toast({ html: data.message, classes: "success" });
          history.push("/");
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
                  name="email"
                  placeholder="Email"
                  autoComplete="off"
                  autoFocus
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
                  Sign In
                </button>
              </div>

              <Link to="#">Forgot password?</Link>
            </div>
            <div className="text-center wrapper">
              <p>
                Don't have an account? <Link to="/signup">Sign up</Link>
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

export default Signin;
