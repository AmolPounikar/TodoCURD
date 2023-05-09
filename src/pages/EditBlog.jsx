import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const EditBlog = () => {
  const [editData, seteditData] = useState([]);
  const { id } = useParams();

  const get = async () => {
    const url = `http://localhost:5000/blogs/${id}`;
    const { data } = await axios.get(url);
    seteditData(data);
    console.log(data);
  };

  const put = () => {
    const url = `http://localhost:5000/blogs/${id}`;
    const { data } = axios.put(url, editData);
    console.log(data);
  };

  useEffect(() => {
    get();
  }, []);

  return (
    <>
      <div>
        <div class="container">
          <div class="row">
            <div class="col-sm-6 offset-sm-3">
              <div class="card">
                <div class="card-header">Signup</div>
                <div class="card-body">
                  <div>
                    <label for="title" class="form-label">
                      Title
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="title"
                      placeholder="Enter your Title"
                      value={editData.title}
                      onChange={(e) =>
                        seteditData({ ...editData, title: e.target.value })
                      }
                    />
                    <div class="valid-feedback">Looks good!</div>
                    <div class="invalid-feedback">
                      Please choose a username.
                    </div>
                  </div>
                  <div>
                    <label for="title" class="form-label">
                      Your Name{" "}
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="name"
                      placeholder="Enter your Name"
                      value={editData.name}
                      onChange={(e) =>
                        seteditData({ ...editData, name: e.target.value })
                      }
                    />
                    <div class="valid-feedback">Looks good!</div>
                    <div class="invalid-feedback">
                      Please choose a username.
                    </div>
                  </div>
                  <div class="mt-2">
                    <label for="desc" class="form-label">
                      Description
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="desc"
                      placeholder="Enter Your Description"
                      value={editData.desc}
                      onChange={(e) =>
                        seteditData({ ...editData, desc: e.target.value })
                      }
                    />
                    <div class="valid-feedback">Looks good!</div>
                    <div class="invalid-feedback">
                      Please choose a username.
                    </div>
                  </div>
                  <div class="mt-2">
                    <label for="img" class="form-label">
                      Enter Image URL
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="img"
                      placeholder="Enter Image URL"
                      value={editData.img}
                      onChange={(e) =>
                        seteditData({ ...editData, img: e.target.value })
                      }
                    />
                    <div class="valid-feedback">Looks good!</div>
                    <div class="invalid-feedback">
                      Please choose a password.
                    </div>
                  </div>
                  <div class="mt-2">
                    <label for="contact" class="form-label">
                      Contact
                    </label>
                    <input
                      type="no"
                      class="form-control"
                      id="no"
                      placeholder="Confirm Your contact No"
                      value={editData.no}
                      onChange={(e) =>
                        seteditData({ ...editData, no: e.target.value })
                      }
                    />
                    <div class="valid-feedback">Looks good!</div>
                    <div class="invalid-feedback">
                      Please Recheck Your Password.
                    </div>
                  </div>
                  <Link to={"/:id"}>
                    <button onClick={put} class="btn btn-primary w-100 mt-3">
                      Submit Changes
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditBlog;
