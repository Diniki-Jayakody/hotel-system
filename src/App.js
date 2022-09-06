import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


import HomePage from "./Screens/HomePage";
import RoomHome from "./Screens/RoomHome";
import RoomBookingHome from "./Screens/RoomBookingHome";
import AddRoom from "./Screens/AddRoom";
import ViewBookedRoom from "./Screens/ViewBookedRoom";
import AddBooking from "./Screens/AddBooking";


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={ <HomePage/>}/>
          <Route path='/room_home' element={ <RoomHome/>}/>
          <Route path='/room_booking_home' element={ <RoomBookingHome/>}/>
          <Route path='/add_room' element={ <AddRoom/>}/>
          <Route path='/view_booked_room' element={ <ViewBookedRoom/>}/>
          <Route path='/add_booking' element={ <AddBooking/>}/>
        </Routes>
      </Router>   
    </div>
  );
}

export default App;
