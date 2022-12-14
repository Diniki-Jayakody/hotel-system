import React from "react";

import { Link} from "react-router-dom";

import {ArrowRightOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import {Space} from 'antd'
import RoomHomeStyles from './RoomHome.module.css';
import NavBar from '../Common_Components/NavBar';
import SubFooter from '../Common_Components/SubFooter';
import { useState, useEffect } from "react";
import hotelApi from "../api/sliitApi";
import Image from './Image/hotelRoom.jpg'




import { message, Popconfirm , Button} from 'antd';



function RoomHome()
{
    const addroom='/add_room';

    const[rooms , setRooms] = useState([])
    const[room , setRoom] = useState({})
    const[logicRoom , setLogicRoom] = useState(false)
    const[logicDelete , setLogicDelete] = useState(false)


    function deleteRoom(){
        hotelApi.delete("/room/delete/"+room.room_no,{

        })
        .then((res) => { 
            console.log("result - ",res.data)
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

    function deletePress(){
        if(logicDelete){
            setLogicDelete(false)
            return;
        }
         setLogicDelete(true)
    }

    const confirm = (e) => {
        deleteRoom()
        setLogicDelete(false)
      };
      
      const cancel = (e) => {
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
                   {/* <button onClick={backToRoomHome}> back</button> */}
                   <div onClick={backToRoomHome}>
                    <Button style={{border:'none', backgroundColor:'transparent', fontWeight:'580', fontSize:'1.3vw', margin:'3vw 0vw 0vw 4vw'}} icon={<ArrowLeftOutlined style={{fontSize:'1.6vw'}}/>} >
                        Back</Button>
                    </div>
                </div>
          <center>  <div style={{height: 'auto', width:'40vw', borderRadius:'1vw', backgroundColor:'#F1F1F1'}}>
                    <h3 style={{paddingTop:'1vw'}}>View Room</h3>
                    <table className={RoomHomeStyles.viewTble}>
                        <tr className={RoomHomeStyles.tablerow}>
                        <td><h4 className={RoomHomeStyles.dataTitle}>Room Type</h4></td>
                        <td><h6 className={RoomHomeStyles.mappedData}>{room.room_type}</h6></td>
                        </tr>
                        <tr>
                        <td><h4 className={RoomHomeStyles.dataTitle}>Description</h4></td>
                        <td><h6 className={RoomHomeStyles.mappedData}>{room.description}</h6></td>
                        </tr>
                        <tr>
                        <td><h4 className={RoomHomeStyles.dataTitle}>Sleeps</h4></td>
                        <td><h6 className={RoomHomeStyles.mappedData}>{room.sleeps}</h6></td>
                        </tr>
                        <tr>
                        <td><h4 className={RoomHomeStyles.dataTitle}>Facilities</h4></td>
                        <td><h6 className={RoomHomeStyles.mappedData}>{room.facilities}</h6></td>
                        </tr>
                        <tr>
                        <td><h4 className={RoomHomeStyles.dataTitle}>Price</h4></td>
                        <td><h6 className={RoomHomeStyles.mappedData}>{room.current_price}</h6></td>
                        </tr>
                      <tr>
                            <img src={Image} style={{height:'15vw', width:'20vw', borderRadius:'1.8vw'}}></img>
                        </tr>
                      
                    </table>
                    <div    style={{marginTop:'2vw',paddingBottom: '2vw'}}>
                   
                    {logicDelete&&
                        <div style={{height:'7vw', width:'20vw', borderRadius:'0.7vw', backgroundColor:'#cfcfcf', opacity:'0.6', border:'blue'}}>
                                <h6 style={{textAlign:'center',fontSize: '1vw'}}>Sure, you want to delete this Room?</h6>
                               <table>
                                <tr> 
                                    <td><button className={RoomHomeStyles.CancelButton} style={{ border:'none'}} onClick={cancel}>Cancel</button></td>
                                    <td><button className={RoomHomeStyles.OkButton} style={{ border:'none'}} onClick={confirm}>OK</button></td>
                                    {/* <td><button style={{backgroundColor:'red', border:'none'}} onClick={} type="danger">Cancel</button></td> */}
                                </tr>
                                </table>
                        </div>}
                <button className={RoomHomeStyles.delBtn} style={{float:'right',  border:'none', opacity:'0.7', color:'aliceblue', height:'3vw', width:'8vw', borderRadius:'0.6vw',marginLeft:'2vw'}} onClick={deletePress}>Delete</button>
                
                <button style={{float:'right', backgroundColor:'#D08C05', border:'none', opacity:'0.7', color:'aliceblue', height:'3vw', width:'8vw', borderRadius:'0.4vw'}}>Update</button>
                </div>
                  <div style={{height:'3vw'}}></div>
                </div>
                </center>    
                <div style={{height:'2vw'}}>
                    

                </div>
                
            </div>: <div>
                <NavBar/>
                <div className={RoomHomeStyles.btnBox} style={{height:'auto', width:'65vw', marginLeft:'26vw', margintop: '200vw'}}>
                    <div className="butn-box">
                        <button className={RoomHomeStyles.bttons}style={{float:'right'}}>Generate Report</button>
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