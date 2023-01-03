import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';

const AddUser = () => {
    let navigate=useNavigate();
  const [user, setUser] = useState({
    id:"",
    fname: "",
    lname: "",
    username: "",
    avatar:""
  });
  
  const {id, fname,lname,username,avatar } = user;
  const onInputChange = (e) => {
  
    setUser({ ...user, [e.target.name]: e.target.value });
   
    
  };
 
  const onSubmit=async (e)=>{
      e.preventDefault()
      await axios.post(" http://localhost:7000/data",user)
      navigate("/adminhome")
  }
  return (
    <div className="container">
      <div className="row ">
        <div
          className=
            "col-lg-3 mx-auto p-4 mt-2 shadow ">
          <h2 className="text-center m-4">Add User</h2>
          <form onSubmit={(e)=>onSubmit(e)}>
          <div className="mb-3">
              <label className="form-label">
                Id
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your Id"
                name="id"
                value={id}
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
                
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">
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
              <label  className="form-label">
                 LastName
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your LastName"
                name="lname"
                value={lname}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label  className="form-label">
                Username
              </label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email username"
                name="username"
                value={username}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            
            <button  type="submit" className="btn btn-warning">
              Submit
            </button>
            <Link className="btn btn-danger ms-3" to="/adminhome" >Cancel</Link>
          </form>
        </div>
      </div>
      
    </div>
  );
};

export default AddUser;



