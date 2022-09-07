
import React from "react";
import {Link} from 'react-router-dom'
import { Button } from "antd";
import {ArrowLeftOutlined  } from '@ant-design/icons';
import RoomHomeStyles from './AddRoom.module.css';
import Footer from '../Common_Components/Footer'
import { useState } from "react";
import hotelApi from "../api/sliitApi";


function AddBooking()
{

  const[roomNo , setRoomNo] = useState(0)
  const[roomType , setRoomType] = useState("")
  const[check_out_date , setCheck_out_date] = useState("")
  const[check_in_date , setCheck_in_date] = useState("")
  const[noOf_people , setNoOf_people] = useState(0)
  const[customerId , setCustomerId] = useState("")

  function validateFormRequired() {
    if(roomNo!=0&&check_in_date!=""&&check_out_date!=""&&noOf_people!=0){
      return true
    }
    return false
  }

  function addNewBooking(){
    if(!validateFormRequired){
      alert("Please fill the full form")
      return
    }
    hotelApi.post("/booking/add",{
      roomNo,
      customerId:"12345678a",
      noOf_people,
      check_in_date,
      check_out_date
  })
  .then((res) => { 
      console.log("result - ",res.data)
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
            
            <div style={{height:'auto', width:'45vw', marginLeft:'15vw'}}>
        
                    <div> <Link to='/'>
                    <Button style={{border:'none', backgroundColor:'transparent', fontWeight:'580', fontSize:'1.3vw', marginTop:'2vw'}} icon={<ArrowLeftOutlined style={{fontSize:'1.6vw'}}/>} >
                        Back</Button>
                        </Link></div>
     
                   
                    
                    <div  className={RoomHomeStyles.bookingForm}>
                        <h3 style={{textAlign:'center', paddingTop:'2vw'}}>Book Room</h3>

                        <div >
                          <table>
                            <tr>
                              <td><label className={RoomHomeStyles.labels}>Room No</label></td>  
                              <td> <input name='type'type='text' className={RoomHomeStyles.inputs}
                                value={roomNo}
                                onChange={(e)=>setRoomNo(e.target.value)}/> </td>  
                            </tr>
                                <br/>
                                <tr>
                                  <td><label className={RoomHomeStyles.labels}>No of People</label></td>
                                  <td><input name='type' type="number" className={RoomHomeStyles.inputs}
                                  value={noOf_people}
                                  onChange={(e)=>setNoOf_people(e.target.value)}/> </td>
                                </tr>
                                <br/>
                                <tr>
                                <td><label className={RoomHomeStyles.labels}>Check in Date</label></td>
                                <td><input type='date' className={RoomHomeStyles.inputs}
                                  value={check_in_date}
                                  onChange={(e)=>setCheck_in_date(e.target.value)}/></td>
                                </tr>  <br/>
                                <tr>
                                <td><label className={RoomHomeStyles.labels}>Check out Date</label></td>
                                <td><input type='date' className={RoomHomeStyles.inputs}
                                  value={check_out_date}
                                  onChange={(e)=>setCheck_out_date(e.target.value)}/> </td>
                                </tr><br/>
                              </table>
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