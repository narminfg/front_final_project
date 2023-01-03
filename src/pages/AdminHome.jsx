import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios'
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import {Link} from 'react-router-dom'


const AdminHome = (props) => {

    const[users,setUsers]=useState([]);
    

    useEffect(()=>{
      getUsers();
  
    },[])


    const getUsers=async()=> {
      const response=await axios.get('http://localhost:7000/data'); 
      setUsers(response.data)
    }
  
    



 return (
 
    <div  className='container mt-3 '>
       
    <Link className="btn btn-warning me-2 add" to={"/adduser"}>Create</Link>

    <table className="table">
<thead>
  <tr>
  <th scope="col">Id</th>
  <th scope="col">Image</th>
  <th scope="col">Firstname</th>
  <th scope="col">Lastname</th>
  <th scope="col">Username</th>
  <th scope="col">Edit</th>

  </tr>
</thead>
<tbody>
{
 users.map(user => {
      return(
      <tr key={user.id}>
        <td>{user.id}</td> 
          <td><img src={user.avatar} alt="" /></td> 
          <td>{user.fname}</td> 
          <td>{user.lname}</td> 
          <td>{user.username}</td> 
         <td>
         <Link to={`/edituser/${user.id}`} className='btn btn-warning me-2' ><FaEdit />Update</Link>
          <button onClick={async()=>{
             await axios.delete (`http://localhost:7000/data/${user.id}`)
             getUsers();}}
           className='btn btn-danger' ><MdDelete/>Delete</button>
          </td> 
      </tr>

      )
     

  })
  
}
         </tbody>
    </table>
</div>
  )


}
export default AdminHome