import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


import HomePage from "./Screens/HomePage";
import RoomHome from "./Screens/RoomHome";
import RoomBookingHome from "./Screens/RoomBookingHome";
import AddRoom from "./Screens/AddRoom";
import ViewRoom from "./Screens/ViewRoom";
import ViewBookedRoom from "./Screens/ViewBookedRoom";


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={ <HomePage/>}/>
          <Route path='/room_home' element={ <RoomHome/>}/>
          <Route path='/room_booking_home' element={ <RoomBookingHome/>}/>
          <Route path='/add_room' element={ <AddRoom/>}/>
          <Route path='/view_room' element={ <ViewRoom/>}/>
          <Route path='/view_booked_room' element={ <ViewBookedRoom/>}/>
        </Routes>
      </Router>   
    </div>
  );
}

export default App;
