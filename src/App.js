import { BrowserRouter,Routes,Route } from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header';
import './App.css';
import { useState,useEffect } from 'react';
import HomePage from './pages/HomePage';
import RingLoader from "react-spinners/RingLoader";
import About from './pages/About';
import AddUser from "./users/AddUser";
import EditUser from "./users/EditUser";
import Admin from './pages/Admin';
import AdminHome from './pages/AdminHome';

const override= {
  display: "block",
  position:"absolute",
  top:"50%",
  left:"50%",
  transform:"translate(-50%,-50%)"
};
function App() {
  
  const[users,setUsers]=useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(()=>{
const getUsers=async()=> {
const response=await axios.get('http://localhost:7000/data'); 
setUsers(response.data)
setLoading(false);
}
getUsers();
  },[])
  return (
    <div className="App">
     <BrowserRouter>
     <Header/>
     {
      loading ? <RingLoader
      color=' rgb(162, 61, 77)'
      loading={loading}
      cssOverride={override}
      size={150}
      /> : <Routes>
          <Route path="/" element={<HomePage userList={users} />} />
          <Route path="/admin" element={<Admin/>} />
          <Route path="/adminhome" element={<AdminHome/>} />
          <Route path="/about" element={<About/>}/>
          <Route exact path="/adduser" element={<AddUser />} />
          <Route exact path="/edituser/:id" element={<EditUser />} />
      </Routes>
     }
     </BrowserRouter>
    </div>
  );
}

export default App;
