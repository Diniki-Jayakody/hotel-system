
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
  const[check_out_date , setCheck_out_date] = useState("")
  const[check_in_date , setCheck_in_date] = useState("")
  const[noOf_people , setNoOf_people] = useState(0)
  const[customerId , setCustomerId] = useState("")

  function addNewBooking(){
    alert(roomNo)
    alert(check_in_date)
    hotelApi.post("/booking/add",{
      roomNo,
      customerId:"12345678a",
      noOf_people,
      check_in_date,
      check_out_date
  })
  .then((res) => { 
      console.log("result - ",res.data)
    //  alert(res.data)
      if(res.data=="added"){
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
                    <Button style={{border:'none', backgroundColor:'transparent', fontWeight:'580', fontSize:'1.3vw'}} icon={<ArrowLeftOutlined style={{fontSize:'1.6vw'}}/>} >
                        Back</Button>
                        </Link></div>
     
                   
                    
                    <div  className={RoomHomeStyles.bookingForm}>
                        <h3 style={{textAlign:'center', paddingTop:'2vw'}}>Book Room</h3>

                        <div style={{marginLeft:'3vw'}}>
                                <p className={RoomHomeStyles.labels}>Room No</p>
                                <input name='type'type='text' className={RoomHomeStyles.inputs}
                                value={roomNo}
                                onChange={(e)=>setRoomNo(e.target.value)}/> <br/>

                                <p className={RoomHomeStyles.labels}>No of People</p>
                                <input name='type'type='text' className={RoomHomeStyles.inputs}
                                value={noOf_people}
                                onChange={(e)=>setNoOf_people(e.target.value)}/> <br/>

                                <p className={RoomHomeStyles.labels}>Check in Date</p>
                                <input type='date' className={RoomHomeStyles.inputs}
                                value={check_in_date}
                                onChange={(e)=>setCheck_in_date(e.target.value)}/> <br/>

                                <p className={RoomHomeStyles.labels}>Check out Date</p>
                                <input type='date' className={RoomHomeStyles.inputs}
                                value={check_out_date}
                                onChange={(e)=>setCheck_out_date(e.target.value)}/> <br/>
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