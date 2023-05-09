import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function AddBlog() {
    const [userData, setuserData] = useState({

    })

    const handleSubit = () => {

        const url = "http://localhost:5000/blogs"
        const { data } = axios.post(url, userData)
        console.log(userData);
    }
    return (
        <div>

            <div class="container">
                <div class="row">
                    <div class="col-sm-6 offset-sm-3">
                        <div class="card">
                            <div class="card-header">Add_Blog</div>
                            <div class="card-body">
                                <div>
                                    <label for="title" class="form-label">Title</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="title"
                                        placeholder="Enter your Title"
                                        value={userData.title}
                                        onChange={e => setuserData({ ...userData, title: e.target.value })}
                                    />
                                    <div class="valid-feedback">Looks good!</div>
                                    <div class="invalid-feedback">Please choose a username.</div>
                                </div>
                                <div>
                                    <label for="title" class="form-label">Your Name </label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="name"
                                        placeholder="Enter your Name"
                                        value={userData.name}
                                        onChange={e => setuserData({ ...userData, name: e.target.value })}
                                    />
                                    <div class="valid-feedback">Looks good!</div>
                                    <div class="invalid-feedback">Please choose a username.</div>
                                </div>
                                <div class="mt-2">
                                    <label for="desc" class="form-label">Description</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="desc"
                                        placeholder="Enter Your Description"
                                        value={userData.desc}
                                        onChange={e => setuserData({ ...userData, desc: e.target.value })}
                                    />
                                    <div class="valid-feedback">Looks good!</div>
                                    <div class="invalid-feedback">Please choose a username.</div>
                                </div>
                                <div class="mt-2">
                                    <label for="img" class="form-label">Enter Image URL</label>
                                    <input
                                        type='text'
                                        class="form-control"
                                        id="img"
                                        placeholder="Enter Image URL"
                                        value={userData.img}
                                        onChange={e => setuserData({ ...userData, img: e.target.value })}
                                    />
                                    <div class="valid-feedback">Looks good!</div>
                                    <div class="invalid-feedback">Please choose a password.</div>
                                </div>
                                <div class="mt-2">
                                    <label for="contact" class="form-label"
                                    >Contact</label
                                    >
                                    <input
                                        type="no"
                                        class="form-control"
                                        id="no"
                                        placeholder="Confirm Your contact No"
                                        value={userData.no}
                                        onChange={e => setuserData({ ...userData, no: e.target.value })}
                                    />
                                    <div class="valid-feedback">Looks good!</div>
                                    <div class="invalid-feedback">
                                        Please Recheck Your Password.
                                    </div>
                                </div>
                                <Link to={"/:id"}>
                                    <button
                                        onClick={handleSubit}
                                        class="btn btn-primary w-100 mt-3">
                                        Add Data
                                    </button>
                                </Link>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    )
}
