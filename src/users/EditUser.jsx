import React, { useState,useEffect } from "react";
import axios from "axios";
import { Link, useNavigate,useParams } from 'react-router-dom';

const EditUser = () => {
    let navigate=useNavigate();
    const {id}=useParams()
    const [user, setUser] = useState({
        fname: "",
        lname: "",
        username: "",
        avatar:""
    });

    const {fname,lname,username,avatar } = user;
    const onInputChange = (e) => {
        setUser({...user,[e.target.name]:e.target.value})
    };

    useEffect(()=>{
        loadUser();
    },[])

    const onSubmit=async (e)=>{
        e.preventDefault()
        await axios.put(`http://localhost:7000/data/${id}`,user)
        navigate("/adminhome")
    }
    const loadUser = async () => {
        const result=await axios.get(`http://localhost:7000/data/${id}`)
        setUser(result.data)
    }

    return (
        <div className="container mt-5">
            <div className="row ">
                <div
                    className=
                        "col-lg-3 mx-auto p-4 mt-2 shadow ">
                    <h2 className="text-center m-4">Edit User</h2>
                    <form onSubmit={e=>onSubmit(e)}>

                        <div className="mb-3">
                            <label htmlFor="FirstName" className="form-label">
                                FirstName
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter your FirstName"
                                name="fname"
                                value={fname}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="LastName" className="form-label">
                                LastName
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter your Lastname"
                                name="lname"
                                value={lname}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">
                                UserName
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Enter your username"
                                name="username"
                                value={username}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                                <div className="mb-3">
                                    <label  className="form-label">
                                        Image
                                     </label>
                                    <input
                                        type="file"
                                        className="form-control"
                                        placeholder="Enter your image"
                                        name="avatar"
                                
                                        onChange={(e) => onInputChange(e)}/>
                                </div>
                        <button type="submit" className="btn btn-warning">
                            Submit
                        </button>
                        <Link className="btn btn-danger ms-3 " to="/adminhome" >Cancel</Link>
                                
                         
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditUser;
