
import React, { useContext, useEffect } from 'react';
import './App.css';
// import Create from './Pages/Create'

import Signup from './Pages/Signup'
// import ViewPost from './Pages/ViewPost'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import axios from 'axios'
import Home from './Pages/Home';
import { authContext } from './context/AuthContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from './Pages/Search';
import LoginPage from './Pages/Login';
import CreatePage from './Pages/Create';


function App() {



    axios.defaults.baseURL = "http://localhost:5000/";
    axios.defaults.withCredentials = true;
    const {setRefresh, refresh, user, setUser}=useContext(authContext)
    useEffect(()=>{
      (async function(){
        let { data } = await axios.get("/check-auth");
        setUser({ login: data.loggedIn, details:data.user })
      })()
    },[refresh])
    console.log(user)
    





  return (
    <div>

      <Router>

        <Routes>

        <Route path='/sell' element={<CreatePage />} />
        </Routes>

     
      </Router>

    </div>
  );
}

export default App;
