import React from "react";

import { Link} from "react-router-dom";

import {ArrowRightOutlined } from '@ant-design/icons';
import RoomHomeStyles from './RoomHome.module.css';
import NavBar from '../Common_Components/NavBar';
import { useState } from "react";
import hotelApi from "../api/sliitApi";


function RoomBookingHome()
{
    const path='/add_room';

    const[check_out_date , setCheck_out_date] = useState("")
    const[check_in_date , setCheck_in_date] = useState("")
    const[noOf_people , setNoOf_people] = useState(0)
    const[customerId , setCustomerId] = useState("")
    const[bookings , setBookings] = useState([])
    const[roomNo , setroomNo] = useState(0)

    function addBooking(){
        hotelApi.post("/booking/add",{
            roomNo,
            customerId,
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

    function getBookingByRoom(){
        if(roomNo!=0){
            hotelApi.delete("/booking/getByRoomNo/"+roomNo,{

            })
            .then((res) => { 
                console.log("result - ",res.data)
                 setBookings(res.data)
            })
      
          // Catch errors if any
          .catch((err) => { 
            console.log(err)
          });
        }
        else{
            alert("please Enter room no")
        }
    }
    
    return(
        <>
            <div>
                <NavBar/>
                <div style={{height:'auto', width:'65vw', marginLeft:'26vw'}}>
                    <div>
                        <button style={{float:'right'}}>Generate Report</button>
                        <div style={{height:'8vw'}}></div>
                        <input placeholder="Room No"  value={roomNo}
                        onChange={(e)=>setroomNo(e.target.value)}></input>
                        <button style={{float:'right'}} onClick={getBookingByRoom}>Search </button>
                    </div>
                    <div style={{height:'4vw'}}></div>
                    <div>
                        <center>
                        <table>
                           
                            <tr className={RoomHomeStyles.tableRow}>
                                <th className={RoomHomeStyles.tableHeader}>Room Code</th>
                                <th className={RoomHomeStyles.tableHeader}>Check in Date</th>
                                <th className={RoomHomeStyles.tableHeader}>Check out Date</th>
                                <th className={RoomHomeStyles.tableHeader}>No. of People</th>
                
                               
                            </tr>
                            
                            <tr className={RoomHomeStyles.tableRow}>
                                <td className={RoomHomeStyles.tableHeader}>R001</td>
                                <td className={RoomHomeStyles.tableHeader}>date</td>
                                <td className={RoomHomeStyles.tableHeader}>date</td>
                                <td className={RoomHomeStyles.tableHeader}>2</td>
                                <Link to='/view_booked_room'> 
                                <td>
                                    <ArrowRightOutlined style={{fontSize:'2vw', padding:'0.5vw 0vw 0vw 1vw', color:'black'}}/>
                                </td></Link>  
                               
                    
                            </tr>
                            

                        </table>
                        </center>
                    </div>
                </div>
            </div>
        </>
    );
}

export default RoomBookingHome;