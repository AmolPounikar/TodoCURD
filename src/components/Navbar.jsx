import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div>

            <nav class="navbar navbar-dark navbar-expand-lg bg-dark">
                <div class="container-fluid">
                    <Link class="navbar-brand" to="/">Navbar</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <Link class="nav-link active" to="/:id">Home</Link>
                            <Link class="nav-link" to="/addBlog">Add Blogs</Link>
                            <Link class="nav-link" to="/blogDetails/:id">Blog Details</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
        // <nav class="navbar navbar-expand-lg bg-light">
        //   <div class="container-fluid">
        //     <a class="navbar-brand" href="#">Navbar</a>
        //     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
        //       <span class="navbar-toggler-icon"></span>
        //     </button>
        //     <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        //       <div class="navbar-nav">
        //         <a class="nav-link active" href="#">Home</a>
        //         <a class="nav-link" href="#">Features</a>
        //         <a class="nav-link" href="#">Pricing</a>
        //       </div>
        //     </div>
        //   </div>
        // </nav>
    )
}
