import React from "react";
import {Link} from 'react-router-dom'
import arrow from '../Resources/arrow.jpg'
import RoomHomeStyles from './AddRoom.module.css';
import NavBar from '../Common_Components/NavBar'

function validateForm() {
    let x = document.forms["addForm"]["type"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
    return true
  }
  
function AddRoom()
{
    
    return(
        
        <>
        
         <div>
            <NavBar/>
            <div style={{height:'auto', width:'65vw', marginLeft:'30vw'}}>
        
                    <div> <Link to='/room_home'><button style={{paddingLeft: '0vw', border: 0, backgroundColor: "white", padding: 'vw'}}><img src={arrow} width="20vw" height="20vw"/> Back</button ></Link></div>
     
                    <div style={{height:'0.25vw'}}></div>
                    <form name="addForm" action="/post form" method="post" onsubmit="return validateForm()">
                    <div  className={RoomHomeStyles.form}>
                        <h2 style={{textAlign:'center'}}>Add Rooms</h2>
                        <p className={RoomHomeStyles.labels}>Room Type</p>
                        <input name='type'type='text' className={RoomHomeStyles.inputs}/> <br/>
                        <p className={RoomHomeStyles.labels}>Sleeps</p>
                        <input type='text' className={RoomHomeStyles.inputs}/> <br/>
                        <p className={RoomHomeStyles.labels}>Current Price</p>
                        <input type='text' className={RoomHomeStyles.inputs}/> <br/>
                        <p className={RoomHomeStyles.labels}>Facilities</p>
                        <input type='text' className={RoomHomeStyles.inputs}/> <br/>
                        <p className={RoomHomeStyles.labels}>Description</p>
                        <textarea type='text' className={RoomHomeStyles.inputs}/> <br/>
                        <p className={RoomHomeStyles.labels}>Image</p>
                        <input type='file' className={RoomHomeStyles.inputs}/> <br/>

                        <button className={RoomHomeStyles.submitBtn} type="Submit" value="Submit" onsubmit="return validateForm()">Add Rooms</button>
                    </div>
                    </form>
           </div>
        </div>
        </>
    );
}

export default AddRoom;