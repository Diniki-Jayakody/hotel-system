import React from "react";

import { Link} from "react-router-dom";

import {ArrowRightOutlined } from '@ant-design/icons';
import RoomHomeStyles from './RoomHome.module.css';
import NavBar from '../Common_Components/NavBar';
import SubFooter from '../Common_Components/subFooter';
import { useState, useEffect } from "react";
import hotelApi from "../api/sliitApi";
import Image from './Image/Room.png'




import { message, Popconfirm } from 'antd';



function RoomHome()
{
    const addroom='/add_room';
    const viewroom='/view_room';

    const[rooms , setRooms] = useState([])
    const[room , setRoom] = useState({})
    const[logicRoom , setLogicRoom] = useState(false)
    const[roomNo , setRoomNo] = useState(0)
    const[imageUrl , setImageUrl] = useState("../Resources/Room.png")


    function deleteRoom(){
        alert(room.room_no)
        hotelApi.delete("/room/delete/"+room.room_no,{

        })
        .then((res) => { 
            console.log("result - ",res.data)
           // alert(res.data.msg)
            if(res.data.msg=="deleted"){
                alert("deleted")
                window.location.reload()
            }
        })
  
      // Catch errors if any
      .catch((err) => { 
        console.log(err)
      });
    }

    const confirm = (e) => {
        console.log(e);
        message.success('Click on Yes');
        deleteRoom()
      };
      
      const cancel = (e) => {
        console.log(e);
        message.error('Click on No');
        window.location.reload()
      };

    function selectRoom(room){
        setRoom(room)
        setLogicRoom(true)
    }

    function backToRoomHome(){
        setLogicRoom(false)
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
           {logicRoom?<div>
                <div>
                   <button onClick={backToRoomHome}> back</button>
                </div>
                <div>
                    <h3>View Rooms</h3>
                    <h4>{room.room_type}</h4>
                    <p></p>
                    <h4>{room.description}</h4>
                    <p></p>
                    <h4>{room.sleeps}</h4>
                    <p></p>
                    <h4>{room.facilities}</h4>
                    <p></p>
                    <h4>{room.current_price}</h4>
                    <p></p>
                    <img src={Image}></img>
                  
                </div>
                <div>
                    <button>Update</button> 
                <Popconfirm
    title="Are you sure to delete this room?"
    onConfirm={confirm}
    onCancel={cancel}
    okText="Yes"
    cancelText="No"
  >
                <button>Delete</button>
                </Popconfirm>
                </div>
                
            </div>: <div>
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

                            {rooms.length!=0&&rooms.map((room)=>(
                                <tr className={RoomHomeStyles.tableRow}>
                                <td className={RoomHomeStyles.tableData}>{room.room_no}</td>
                                <td className={RoomHomeStyles.tableData}>{room.room_type}</td>
                                <td className={RoomHomeStyles.tableData}>{room.sleeps}</td>
                                <td className={RoomHomeStyles.tableData}>{room.current_price}</td>
                                <td onClick={()=>selectRoom(room)}>
                                <ArrowRightOutlined style={{fontSize:'2vw', padding:'0.5vw 0vw 0vw 1vw', color:'black'}}/>
                                    </td>  
                               
                    
                            </tr>
                            ))}
                            
                            {/* <tr className={RoomHomeStyles.tableRow}>
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
                               
                    
                            </tr> */}
                            

                        </table>
                        </center>
                    </div>
                </div>
                <div ><SubFooter/></div>
            </div>}
        </>
    );
}

export default RoomHome;