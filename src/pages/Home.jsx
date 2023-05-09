import React, { useEffect, useState } from 'react';
import axios from "axios"
import { Link } from 'react-router-dom';
import "./style.css"



const Home = () => {
    const [getData, setgetData] = useState([]);

    const get = async () => {
        const url = "http://localhost:5000/blogs"
        const { data } = await axios.get(url)

        setgetData(data)

    }

    const handleDelete = async (id) => {
        const url = `http://localhost:5000/blogs/${id}`
        const { data } = await axios.delete(url)
        get()

    }

    useEffect(() => {
        get()
    }, [])

    return (
        <div className='img'>

            <Link to={"/addBlog"} className="d-flex justify-content-center mt-4">   
            <button className='btn btn-primary '>Add Blog</button></Link>

            <div className="container ">
                <div className="row">
                    {
                        getData.map(item => <>
                            <div className="col-sm-6">
                                <div className="card mt-3">
                                    <div className="card-head"><h1 className='text-center text-primary'>{item.title}</h1></div>
                                    <div className="card-body">
                                        <img src={item.img} style={{ height: "", width: "100%" }} />
                                    </div>
                                    <div className="desc " style={{ height: "150px" }}><p className='m-4'>{item.desc}</p></div>
                                    <div className="card-footer">
                                        <div >Blog Written by :<span className='fs-5 text-d'> {item.name}</span> </div>
                                        <hr />
                                        <div className='d-flex justify-content-center gap-5 mt-3'>
                                            <Link to={`/blogDetails/${item.id}`} >   <button className='btn btn-primary'><i class="bi bi-eye"></i></button></Link>
                                            <Link to={`/editBlog/${item.id}`}> <button className='btn btn-warning  '><i class="bi bi-pencil-square"></i></button>
                                            </Link>
                                            <button
                                                onClick={e => handleDelete(item.id)}
                                                className='btn btn-danger '><i class="bi bi-trash"></i></button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </>)
                    }
                </div>
            </div>
        </div>
    );
}

export default Home;
