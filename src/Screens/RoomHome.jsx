import React from "react";

import { Link} from "react-router-dom";

import RoomHomeStyles from './RoomHome.module.css';
import NavBar from '../Common_Components/NavBar';
import SubFooter from '../Common_Components/subFooter';
import { useState, useEffect } from "react";
import hotelApi from "../api/sliitApi";


function RoomHome()
{
    const addroom='/add_room';
    const viewroom='/view_room';

    const[rooms , setRooms] = useState([])
    const[room , setRoom] = useState({})
    const[logicRoom , setLogicRoom] = useState(false)

    function deleteRoom(roomNo){
        hotelApi.delete("/room/delete/"+roomNo,{

        })
        .then((res) => { 
            console.log("result - ",res.data)
            if(res.data=="deleted"){
                alert("deleted")
                window.location.reload()
            }
        })
  
      // Catch errors if any
      .catch((err) => { 
        console.log(err)
      });
    }

    function selectRoom(room){
        setRoom(room)
        setLogicRoom(true)
    }

    useEffect(()=>{
        hotelApi.get("/room/getAll",{

        })
        .then((res) => { 
            console.log("result - ",res.data)
            setRooms(res.data)
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
                <div className={RoomHomeStyles.btnBox} style={{height:'auto', width:'65vw', marginLeft:'26vw', margintop: '200vw'}}>
                    <div className="butn-box">
                        <button className={RoomHomeStyles.Reportbttons}style={{float:'right'}}>Generate Report</button>
                        <div style={{height:'5vw'}}></div>
                        <Link to={addroom}><button className={RoomHomeStyles.bttons}>Add New Rooms</button></Link>
                        <button style={{float:'right'}} className={RoomHomeStyles.bttons}>Search </button>
                    </div>
                    <div style={{height:'4vw'}}></div>
                    <div>
                        <center>
                        <table className={RoomHomeStyles.table}>
                           
                            <tr className={RoomHomeStyles.tableHeader}>
                                <th className={RoomHomeStyles.tableHeader}>Room Code</th>
                                <th className={RoomHomeStyles.tableHeader}>Room Type</th>
                                <th className={RoomHomeStyles.tableHeader}>Sleeps</th>
                                <th className={RoomHomeStyles.tableHeader}>Price</th>
  
                               
                            </tr>
                            
                            <tr className={RoomHomeStyles.tableRow}>
                                <td className={RoomHomeStyles.tableData}>R001</td>
                                <td className={RoomHomeStyles.tableData}>abcd</td>
                                <td className={RoomHomeStyles.tableData}>2</td>
                                <td className={RoomHomeStyles.tableData}>23000</td>
                                <Link to={viewroom}> <td style={{padding:'1vw 2vw 0vw 1vw', border:'none'}}>{">>"}</td></Link>  
                               
                    
                            </tr>

                            <tr className={RoomHomeStyles.tableRow}>
                                <td className={RoomHomeStyles.tableData}>R001</td>
                                <td className={RoomHomeStyles.tableData}>abcd</td>
                                <td className={RoomHomeStyles.tableData}>2</td>
                                <td className={RoomHomeStyles.tableData}>23000</td>
                                <Link to='/view_room'> <td style={{padding:'1vw 2vw 0vw 1vw', border:'none'}}>{">>"}</td></Link>  
                               
                    
                            </tr>
                            

                        </table>
                        </center>
                    </div>
                </div>
                <div ><SubFooter/></div>
            </div>
        </>
    );
}

export default RoomHome;