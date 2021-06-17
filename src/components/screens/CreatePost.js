import React, { useState, useEffect } from "react";
import M from "materialize-css";
import { useHistory } from "react-router-dom";
import Navbar from "./Navbar";
const CreatePost = () => {
  const [title, settitle] = useState("");
  const [body, setbody] = useState("");
  const [image, setimage] = useState("");
  const [url, seturl] = useState("");
  useEffect(() => {
    if (url) {
      fetch("/createpost", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("jwt"),
        },
        body: JSON.stringify({
          title,
          body,
          pic: url,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.error) {
            M.toast({ html: data.error, classes: "error" });
          } else {
            M.toast({ html: data.message, classes: "success" });
            history.push("/");
          }
        });
    }
  }, [url]);
  const postDetails = () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "wesnap420");
    data.append("cloud_name", "desibalk420");
    fetch("	https://api.cloudinary.com/v1_1/desibalk420/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        seturl(data.url);
      });
  };
  const history = useHistory();
  return (
    <div className="container">
      <Navbar />
      <div className="profile_wrapper upload-form">
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            name="title"
            placeholder="Title"
            value={title}
            onChange={(e) => settitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            name="body"
            placeholder="Body"
            value={body}
            onChange={(e) => setbody(e.target.value)}
          />
        </div>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text">Upload</span>
          </div>
          <div class="custom-file">
            <input
              type="file"
              name="image"
              class="custom-file-input"
              id="inputGroupFile01"
              value={image}
              onChange={(e) => setimage(e.target.files)}
            />
            <label class="custom-file-label" for="inputGroupFile01">
              file upload
            </label>
          </div>
        </div>
        <div className="form-group text-center">
          <button className="btn" type="submit" onClick={() => postDetails()}>
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
