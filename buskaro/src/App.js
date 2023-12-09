import { useState } from "react";
import "./App.css";
import BookTickets from "./Pages/BookTickets";
import Queries from "./Pages/Queries";
import Signup from "./Pages/Signup";
import  Navbar from "./components/Navbar";
import Dashboard from "./Pages/Dashboard";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import {Route,Routes} from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import NearestBusStop from "./Pages/NearestBusStop";
import SearchRoute from "./Pages/SearchRoute";
import BusRoute from "./Pages/BusRoute";

function App() {
  const[isLoggedIn,setIsLoggedIn]=useState(false);
  return (
    <div className= "w-screen min-h-screen bg-richblack-900 flex flex-col">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
      <Routes>
        <Route path ="/" element={<Home  isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>}/>
        <Route path ="/login" element={<Login  isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>}/>
        <Route path ="/signup" element={<Signup isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />}/>
        <Route path ="/bookTickets" element={<BookTickets/>}/>
        <Route path ="/queries" element={<Queries/>}/>
        <Route path ="/dashboard" element={<PrivateRoute isLoggedIn={isLoggedIn}>
          <Dashboard/>
        </PrivateRoute>}/>
        <Route path="/nearestBusStop" element={<NearestBusStop/>}/>
        <Route path="/searchRoute" element={<SearchRoute/>}/>
        <Route path="/busRoutes" element={<BusRoute setIsLoggedIn={setIsLoggedIn} />}/>
      </Routes>
    </div>

  );
}

export default App;
