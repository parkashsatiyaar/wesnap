import React from "react";
import Navbar from "./Navbar";
const Home = () => {
  return (
    <div className="container">
      <Navbar />
      <div className="profile_wrapper row">
        <div className="user-data col-md-12">
          <div className="profile-img">
            <img
              src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
              alt=""
            />
            <p>Parkash Satiyaar</p>
          </div>
        </div>
        <div className="user-post col-md-12 row">
          <div className="col-md-6 text-center">
            <img
              src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
              alt=""
            />
            <div className="post-button">
              <i className="far fa-heart">100k</i>
              <i className="far fa-comment">20k</i>
              <i className="far fa-share-square">3k</i>
            </div>
          </div>
          <div className="col-md-6">
            <div className="all-comment">
              <div className="user-comment">
                <div className="user-img">
                  <img
                    src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
                    alt=""
                  />
                  <p>Parkash Satiyaar</p>
                  <br />
                  <p className="comment">Comment h bhai</p>
                </div>
              </div>
              <div className="user-comment">
                <div className="user-img">
                  <img
                    src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
                    alt=""
                  />
                  <p>Parkash Satiyaar</p>
                  <br />
                  <p className="comment">Comment h bhai</p>
                </div>
              </div>
              <div className="user-comment">
                <div className="user-img">
                  <img
                    src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
                    alt=""
                  />
                  <p>Parkash Satiyaar</p>
                  <br />
                  <p className="comment">Comment h bhai</p>
                </div>
              </div>
              <div className="user-comment">
                <div className="user-img">
                  <img
                    src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
                    alt=""
                  />
                  <p>Parkash Satiyaar</p>
                  <br />
                  <p className="comment">Comment h bhai</p>
                </div>
              </div>
              <div className="user-comment">
                <div className="user-img">
                  <img
                    src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
                    alt=""
                  />
                  <p>Parkash Satiyaar</p>
                  <br />
                  <p className="comment">Comment h bhai</p>
                </div>
              </div>
            </div>
            <div className="add-comment">
              <input
                className="form-control"
                placeholder="write comment..."
                type="text"
                name="comment"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
