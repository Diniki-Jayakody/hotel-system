
import React from "react";
import {Link} from 'react-router-dom'
import arrow from '../Resources/arrow.jpg'
import { Button } from "antd";
import {ArrowLeftOutlined  } from '@ant-design/icons';
import RoomHomeStyles from './AddRoom.module.css';
import NavBar from '../Common_Components/NavBar'
import { useState } from "react";
import hotelApi from "../api/sliitApi";

function validateForm() {
    let x = document.forms["addForm"]["type"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }
function AddBooking()
{

  const[roomNo , setRoomNo] = useState(0)
  const[roomType , setRoomType] = useState("")
  const[price , setPrice] = useState(0)
  const[sleeps , setSleeps] = useState("")

  function addNewBooking(){
    alert(roomNo)
    alert(roomType)
    hotelApi.post("/room/add",{
      roomNo,
      roomType,
      sleeps,

  })
  .then((res) => { 
      console.log("result - ",res.data)
    //  alert(res.data)
      if(res.data.msg=="added"){
          alert("Added Successfully")
          window.location.reload()
      }
  })

// Catch errors if any
.catch((err) => { 
  console.log(err)
});
  }
    
    return(
        
        <>
        
         <div>
            <NavBar/>
            <div style={{height:'auto', width:'65vw', marginLeft:'30vw'}}>
        
                    <div> <Link to='/room_home'>
                    <Button type="primary" icon={<ArrowLeftOutlined style={{fontSize:'2vw'}}/>} >
                        Back</Button>
                        </Link></div>
     
                    <div style={{height:'0.25vw'}}></div>
                    
                    <div  className={RoomHomeStyles.form}>
                        <h2 style={{textAlign:'center'}}>Add Booking</h2>
                        <p className={RoomHomeStyles.labels}>Room Type</p>
                        <input name='type'type='text' className={RoomHomeStyles.inputs}
                        value={roomNo}
                        onChange={(e)=>setRoomType(e.target.value)}/> <br/>

                        <p className={RoomHomeStyles.labels}>Check in Date</p>
                        <input name='type'type='text' className={RoomHomeStyles.inputs}
                        value={roomType}
                        onChange={(e)=>setRoomType(e.target.value)}/> <br/>

                        <p className={RoomHomeStyles.labels}>Check out Date</p>
                        <input type='text' className={RoomHomeStyles.inputs}
                        value={sleeps}
                        onChange={(e)=>setSleeps(e.target.value)}/> <br/>
                       
                        
                    </div>
                    
                    <button onClick={addNewBooking}>Book</button>
           </div>
        </div>
        </>
    );
}

export default AddBooking;