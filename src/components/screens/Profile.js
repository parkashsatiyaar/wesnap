import React from "react";
import Navbar from "./Navbar";
const Profile = () => {
  return (
    <div className="container">
      <Navbar />
      <div className="Block">
        <div className="container profile_wrapper text-center">
          <div className="row">
            <div className="col-sm-6 profile">
              <img
                src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
                alt="profile"
              />
            </div>
            <div className="col-md-4 user">
              <h3>Parkash Satiyaar</h3>
              <div class="p-2 mt-2  d-flex justify-content-between rounded text-black stats">
                <div class="d-flex flex-column">
                  <span class="articles">Posts</span>
                  <span class="number1">38</span>
                </div>
                <div class="d-flex flex-column">
                  <span class="followers">Followers</span>
                  <span class="number2">980</span>
                </div>
                <div class="d-flex flex-column">
                  <span class="rating">Following</span>
                  <span class="number3">89</span>
                </div>
              </div>
              <div class="button mt-2 d-flex flex-row align-items-center">
                <button class="btn btn-sm btn-outline-primary w-100">
                  Chat
                </button>
                <button class="btn btn-sm btn-primary w-100 ml-2">
                  Follow
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="container post_wrapper text-center">
          <div className="post row">
            <div className="col-md-4 post_img">
              <img
                src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
                alt=""
              />
            </div>
            <div className="col-md-4 post_img">
              <img
                src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
                alt=""
              />
            </div>
            <div className="col-md-4 post_img">
              <img
                src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
