import React from "react";

import { Link} from "react-router-dom";
import {SearchOutlined } from '@ant-design/icons';
import {ArrowRightOutlined } from '@ant-design/icons';
import RoomHomeStyles from './RoomHome.module.css';
import NavBar from '../Common_Components/NavBar';
import SubFooter from '../Common_Components/SubFooter';
import { useState } from "react";
import hotelApi from "../api/sliitApi";
import { useEffect } from "react";


function RoomBookingHome()
{
    const path='/add_room';

    const[check_out_date , setCheck_out_date] = useState("")
    const[check_in_date , setCheck_in_date] = useState("")
    const[noOf_people , setNoOf_people] = useState(0)
    const[customerId , setCustomerId] = useState("")
    const[bookings , setBookings] = useState([])
    const[roomNo , setroomNo] = useState(1)
    const[booking , setBooking] = useState({})

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
            hotelApi.get("/booking/getByRoomNo/"+roomNo,{

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
    
    useEffect(()=>{
            
        hotelApi.get("/booking/getByRoomNo/"+roomNo,{

        })
        .then((res) => { 
            console.log("result - ",res.data)
             setBookings(res.data)
        })
  
      // Catch errors if any
      .catch((err) => { 
        console.log(err)
      });
      
    },[])
    return(
        <>
            <div>
                <NavBar/>
                <div style={{height:'auto', width:'65vw', marginLeft:'26vw'}}>
                    <div>
                        <button className={RoomHomeStyles.bttons} style={{float:'right', marginTop:'2vw'}}>Generate Report</button>
                        <div style={{height:'8vw'}}></div>
                        <table style={{float:'right'}}>
                            <tr>
                             <td><input style={{height:'2vw', width:'10vw', borderRadius:'0.8vw', fontSize:'1.2vw'}} placeholder="Room No"  value={roomNo}
                                onChange={(e)=>setroomNo(e.target.value)}></input></td>   
                                <td> <button className={RoomHomeStyles.searchBtn} style={{float:'right'}} onClick={getBookingByRoom}><SearchOutlined style={{fontSize:'1.5vw'}}/> </button></td>   
                            </tr>
                        </table>
                    </div>
                    <div style={{height:'4vw'}}></div>
                   {bookings.length!=0? <div>
                        <center>
                        <table>
                           
                            <tr className={RoomHomeStyles.tableRow}>
                                <th className={RoomHomeStyles.tableHeader}>Room Code</th>
                                <th className={RoomHomeStyles.tableHeader}>Check in Date</th>
                                <th className={RoomHomeStyles.tableHeader}>Check out Date</th>
                                <th className={RoomHomeStyles.tableHeader}>No. of People</th>
                                <th className={RoomHomeStyles.tableHeader}>Customer No</th>
                
                               
                            </tr>
                            
                            {bookings.length!=0&&bookings.map((booking)=>(
                                <tr className={RoomHomeStyles.tableRow}>
                                <td className={RoomHomeStyles.tableData}>{booking.room_no}</td>
                                <td className={RoomHomeStyles.tableData}>{booking.check_in_date}</td>
                                <td className={RoomHomeStyles.tableData}>{booking.check_out_date}</td>
                                <td className={RoomHomeStyles.tableData}>{booking.noOf_people}</td>
                                <td className={RoomHomeStyles.tableData}>{booking.customerId}</td>

                                  
                               
                    
                            </tr>
                            ))}
                            

                        </table>
                        </center>
                    </div>:<div>
                        <h3 style={{fontSize:'1.5vw'}}>No Bookings Available For This Room</h3>
                        </div>}
                </div>
                <div ><SubFooter/></div>
            </div>
        </>
    );
}

export default RoomBookingHome;