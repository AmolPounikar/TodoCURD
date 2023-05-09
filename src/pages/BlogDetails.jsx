import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function BlogDetails() {
    const { id } = useParams()
    const [useData, setuseData] = useState({})

    const getData = async () => {
        const url = `http://localhost:5000/blogs/${id}`
        const { data } = await axios.get(url)
        console.log(data);

        setuseData(data)
    }
    useEffect(() => {
        getData()
    }, [])

    console.log(id);
    return (
        <>

            <div className="container">
                <div className="row">

                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-head">{useData.title}</div>
                            <div className="card-body">

                                <img src={useData.img} style={{ height: "50%", width: "100%" }} alt="" />
                            </div>

                            <div className="desc"><p>{useData.decs}</p></div>
                            <div className="card-footer">
                                <div >Blog Written by :<span className='fs-5 text-d'> {useData.name}</span> </div>
                                <div >Contact No :<span className='fs-5 text-d'> {useData.no}</span> </div>


                            </div>
                        </div>
                    </div>

                </div>
                <Link to={"/:id"}  >

                    <button className='btn btn-dark d-flex mt-3 text-decoration-none' >Home</button>
                </Link>
            </div>
        </>
    )
}
