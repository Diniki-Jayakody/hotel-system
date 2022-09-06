
import React from "react";
import {Link} from 'react-router-dom'
import arrow from '../Resources/arrow.jpg'
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
function AddRoom()
{

  const[roomNo , setRoomNo] = useState(0)
  const[roomType , setRoomType] = useState("")
  const[price , setPrice] = useState(0)
  const[sleeps , setSleeps] = useState("")
  const[facilities , setFacilities] = useState("")
  const[description , setDescription] = useState("")
  const[imageUrl , setImageUrl] = useState("../Resources/Room.png")

  function addNewRoom(){
    alert(roomNo)
    alert(roomType)
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
        
                    <div> <Link to='/room_home'><button style={{paddingLeft: '0vw', border: 0, backgroundColor: "white", padding: 'vw'}}><img src={arrow} width="20vw" height="20vw"/> Back</button ></Link></div>
     
                    <div style={{height:'0.25vw'}}></div>
                    
                    <div  className={RoomHomeStyles.form}>
                        <h2 style={{textAlign:'center'}}>Add Rooms</h2>
                        <p className={RoomHomeStyles.labels}>Room No</p>
                        <input name='type'type='text' className={RoomHomeStyles.inputs}
                        value={roomNo}
                        onChange={(e)=>setRoomNo(e.target.value)}/> <br/>
                        <p className={RoomHomeStyles.labels}>Room Type</p>
                        <input name='type'type='text' className={RoomHomeStyles.inputs}
                        value={roomType}
                        onChange={(e)=>setRoomType(e.target.value)}/> <br/>
                        <p className={RoomHomeStyles.labels}>Sleeps</p>
                        <input type='text' className={RoomHomeStyles.inputs}
                        value={sleeps}
                        onChange={(e)=>setSleeps(e.target.value)}/> <br/>
                        <p className={RoomHomeStyles.labels}>Current Price</p>
                        <input type='text' className={RoomHomeStyles.inputs}
                        value={price}
                        onChange={(e)=>setPrice(e.target.value)}/> <br/>
                        <p className={RoomHomeStyles.labels}>Facilities</p>
                        <input type='text' className={RoomHomeStyles.inputs}
                        value={facilities}
                        onChange={(e)=>setFacilities(e.target.value)}/> <br/>
                        <p className={RoomHomeStyles.labels}>Description</p>
                        <textarea type='text' className={RoomHomeStyles.inputs}
                        value={description}
                        onChange={(e)=>setDescription(e.target.value)}/> <br/>
                        <p className={RoomHomeStyles.labels}>Image</p>
                        <input type='file' className={RoomHomeStyles.inputs}/> <br/>

                        
                    </div>
                    
                    <button onClick={addNewRoom}>Add Rooms</button>
           </div>
        </div>
        </>
    );
}

export default AddRoom;