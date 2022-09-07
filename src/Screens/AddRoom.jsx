
import React from "react";
import {Link} from 'react-router-dom'
import { Button } from "antd";
import {ArrowLeftOutlined  } from '@ant-design/icons';

import RoomHomeStyles from './AddRoom.module.css';
import NavBar from '../Common_Components/NavBar'
import SubFooter from '../Common_Components/SubFooter'
import { useState } from "react";
import hotelApi from "../api/sliitApi";











function validateForm() {
    let x = document.forms["addForm"]["type"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }
function AddRoom()
{


  const[roomNo , setRoomNo] = useState(0)
  const[roomType , setRoomType] = useState("")
  const[price , setPrice] = useState(0)
  const[sleeps , setSleeps] = useState("")
  const[facilities , setFacilities] = useState("")
  const[description , setDescription] = useState("")
  const[imageUrl , setImageUrl] = useState("../Resources/Room.png")

  function validateFormRequired() {
    if(roomNo!=0&&roomType!=""&&sleeps!=""&&facilities!=0&&description!=""&&price!=0){
      return true
    }
    else{
      return false
    }
  }

  function addNewRoom(){
    let validation = validateFormRequired()
    if(!validation){
      alert("Please fill the full form")
      return
    }
    hotelApi.post("/room/add",{
      roomNo,
      roomType,
      sleeps,
      price,
      facilities,
      description,
      image_url:imageUrl
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
            <NavBar/>
            <div style={{height:'auto', width:'65vw', marginLeft:'30vw'}}>
        
            <div> <Link to='/room_home'>
                    <Button style={{border:'none', backgroundColor:'transparent', fontWeight:'580', fontSize:'1.3vw'}} icon={<ArrowLeftOutlined style={{fontSize:'1.6vw'}}/>} >
                        Back</Button>
                        </Link></div>
     
                    <div style={{height:'0.25vw'}}></div>
                    
                    <div  className={RoomHomeStyles.form}>
                        <h3 style={{textAlign:'center', fontSize:'1.7vw', paddingTop:'2vw'}}>Add Rooms</h3>
                        <table>
                          <tr>
                           <td>  <label className={RoomHomeStyles.labels}>Room No</label></td> 
                           <td>  <input name='type'type='text' className={RoomHomeStyles.inputs}
                            value={roomNo}
                            onChange={(e)=>setRoomNo(e.target.value)}/></td> 
                          </tr><br/>
                          <tr>
                          <td> <label className={RoomHomeStyles.labels}>Room Type</label></td> 
                          <td>  <input name='type'type='text' className={RoomHomeStyles.inputs}
                            value={roomType}
                            onChange={(e)=>setRoomType(e.target.value)}/> </td> 
                           </tr><br/>
                           <tr>
                           <td>  <label className={RoomHomeStyles.labels}>Sleeps</label></td> 
                           <td> <input type='text' className={RoomHomeStyles.inputs}
                            value={sleeps}
                            onChange={(e)=>setSleeps(e.target.value)}/> </td> 
                             </tr><br/>
                             <tr>
                             <td>  <label className={RoomHomeStyles.labels}>Current Price</label></td> 
                             <td> <input type="number" className={RoomHomeStyles.inputs}
                            value={price}
                            onChange={(e)=>setPrice(e.target.value)}/></td> 
                             </tr><br/>
                             <tr>
                             <td>  <label className={RoomHomeStyles.labels}>Facilities</label></td> 
                             <td> <textarea type='text' className={RoomHomeStyles.inputs}
                            value={facilities}
                            onChange={(e)=>setFacilities(e.target.value)}/> </td> 
                             </tr><br/>
                             <tr>
                             <td> <label className={RoomHomeStyles.labels}>Description</label></td> 
                             <td>  <textarea type='text' className={RoomHomeStyles.inputs}
                            value={description}
                            onChange={(e)=>setDescription(e.target.value)}/></td> 
                             </tr>
                        </table>
                        <div><p className={RoomHomeStyles.labels}>Image</p>
                        <input  type='file' className={RoomHomeStyles.inputs}/> <br/>

                       <center><button className={RoomHomeStyles.submitBtn} type="Submit" value="Submit" onsubmit="return validateForm()" onClick={addNewRoom}>Add Room</button></center> </div>
                    </div>
                    
                   
           </div>
           <div><SubFooter/></div>
        </div>
        </>
    );
}

export default AddRoom;