import React from 'react'
import{useState} from 'react';
import axios from 'axios'
import AdminHome from './AdminHome';

const HomePage = (props) => {
    const[value,setValue]=useState('');

    const{id,avatar,fname,lname,username}=props.userList;
    const filteredUsers=props.userList.filter(user => user.fname.toLowerCase().includes(value.toLowerCase()))
    const InputHandler=(e)=>{
        setValue(e.target.value)
          }
          
          


  return (
    <div className='container mt-3 inp' >
      
    <input onChange={InputHandler} type="text" placeholder='Search...' className='form-control w-50 mx-auto my-3' />

<table className="table table-hover">
<thead>
<tr>
<th scope="col">Id</th>
<th scope="col">Image</th>
<th scope="col">Firstname</th>
<th scope="col">Lastname</th>
<th scope="col">Username</th>


</tr>
</thead>
<tbody>
{
filteredUsers.map(user => {
return(
<tr key={user.id}>
 <td>{user.id}</td> 
 <td><img src={user.avatar} alt="" /></td> 
 <td>{user.fname}</td> 
 <td>{user.lname}</td> 
 <td>{user.username}</td> 
</tr>
)
})
}

</tbody>
</table>
</div>

)
}


export default HomePage