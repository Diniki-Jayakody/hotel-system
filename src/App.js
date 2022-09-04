import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


import HomePage from "./Screens/HomePage";
import RoomHome from "./Screens/RoomHome";
import AddRoom from "./Screens/AddRoom";
import ViewRoom from "./Screens/AddRoom";


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={ <HomePage/>}/>
          <Route path='/room_home' element={ <RoomHome/>}/>
          <Route path='/add_room' element={ <AddRoom/>}/>
          <Route path='/view_room' element={ <ViewRoom/>}/>
        </Routes>
      </Router>   
    </div>
  );
}

export default App;
