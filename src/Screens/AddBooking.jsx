
import React from "react";
import {Link} from 'react-router-dom'
import arrow from '../Resources/arrow.jpg'
import { Button } from "antd";
import {ArrowLeftOutlined  } from '@ant-design/icons';
import RoomHomeStyles from './AddRoom.module.css';
import Footer from '../Common_Components/Footer'
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
  const[checkInDate , setCheckInDate] = useState('')
  const[checkOutDate , setCheckOutDate] = useState("")

  function addNewBooking(){
    alert(roomNo)
    alert(roomType)
    hotelApi.post("/room/add",{
      roomNo,
      roomType,
      checkInDate,
      checkOutDate,

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
            
            <div style={{height:'auto', width:'65vw', marginLeft:'10vw'}}>
        
                    <div> <Link to='/room_home'>
                    <Button style={{border:'none', backgroundColor:'transparent', fontWeight:'600', fontSize:'1.4vw'}} icon={<ArrowLeftOutlined style={{fontSize:'1.6vw'}}/>} >
                        Back</Button>
                        </Link></div>
     
                   
                    
                    <div  className={RoomHomeStyles.bookingForm}>
                        <h3 style={{textAlign:'center', paddingTop:'2vw'}}>Book Room</h3>

                        <div style={{marginLeft:'3vw'}}>
                                <p className={RoomHomeStyles.labels}>Room Type</p>
                                <input name='type'type='text' className={RoomHomeStyles.inputs}
                                value={roomNo}
                                onChange={(e)=>setRoomType(e.target.value)}/> <br/>

                                <p className={RoomHomeStyles.labels}>No of People</p>
                                <input name='type'type='text' className={RoomHomeStyles.inputs}
                                value={roomNo}
                                onChange={(e)=>setRoomType(e.target.value)}/> <br/>

                                <p className={RoomHomeStyles.labels}>Check in Date</p>
                                <input type='date' className={RoomHomeStyles.inputs}
                                value={roomType}
                                onChange={(e)=>setCheckInDate(e.target.value)}/> <br/>

                                <p className={RoomHomeStyles.labels}>Check out Date</p>
                                <input type='date' className={RoomHomeStyles.inputs}
                                value={null}
                                onChange={(e)=>setCheckOutDate(e.target.value)}/> <br/>
                        </div>
                       <center><button onClick={addNewBooking} className={RoomHomeStyles.submitBtn}>Book</button></center> 
                        
                    </div>
                    
           
           </div>
           <div><Footer/></div>
        </div>
        </>
    );
}

export default AddBooking;