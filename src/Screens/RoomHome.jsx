import React from "react";

import { Link} from "react-router-dom";
import { message, Popconfirm, Button } from 'antd';
import {DeleteOutlined,QuestionCircleOutlined} from '@ant-design/icons';

import RoomHomeStyles from './RoomHome.module.css';
import NavBar from '../Common_Components/NavBar';


const confirm = (e) => {
    console.log(e);
    message.success('Click on Yes');
    
  };
  
  const cancel = (e) => {
    console.log(e);
    message.error('Click on No');
  };


function RoomHome()
{
    const path='/add_room';
    
    return(
        <>
            <div>
                <NavBar/>
                <div style={{height:'auto', width:'65vw', marginLeft:'26vw'}}>
                    <div>
                        <button style={{float:'right'}}>Generate Report</button>
                        <div style={{height:'8vw'}}></div>
                        <Link to={path}><button>Add New Rooms</button></Link>
                        <button style={{float:'right'}}>Search </button>
                    </div>
                    <div style={{height:'4vw'}}></div>
                    <div>
                        <center>
                        <table>
                           
                            <tr className={RoomHomeStyles.tableRow}>
                                <th className={RoomHomeStyles.tableHeader}>Room Code</th>
                                <th className={RoomHomeStyles.tableHeader}>Room Type</th>
                                <th className={RoomHomeStyles.tableHeader}>Sleeps</th>
                                <th className={RoomHomeStyles.tableHeader}>Price</th>
                                <th className={RoomHomeStyles.tableHeader}>Image</th>
                                <th className={RoomHomeStyles.tableHeader}></th>
                                <th className={RoomHomeStyles.tableHeader}></th>
                                <th className={RoomHomeStyles.tableHeader}></th>
                            </tr>
                            
                            <tr className={RoomHomeStyles.tableRow}>
                                <td className={RoomHomeStyles.tableHeader}>R001</td>
                                <td className={RoomHomeStyles.tableHeader}>abcd</td>
                                <td className={RoomHomeStyles.tableHeader}>2</td>
                                <td className={RoomHomeStyles.tableHeader}>23000</td>
                                <td className={RoomHomeStyles.tableHeader}>Image</td>
                                <Link to='/view_room'> <td className={RoomHomeStyles.tableHeader}>{">>"}</td></Link>  
                                <td className={RoomHomeStyles.tableHeader}>
                                <Link to='/edit_room'> <button>Edit</button></Link>
                                </td>
                                <Popconfirm title="Are you sure want to Delete this category?"
              // onConfirm={()=>{endCategory({Text})}}
              onCancel={null}
              okText="Yes"
              cancelText="No"
              icon={<QuestionCircleOutlined/>}>
         <Button 
          icon={<DeleteOutlined style={{float:'right',color:'black'}}/>}
          style={{float:'right',  backgroundColor:'#ff7875'}}
          // onClick={endCategory()}
          > 
          </Button>
            </Popconfirm>
                            </tr>
                            

                        </table>
                        </center>
                    </div>
                </div>
            </div>
        </>
    );
}

export default RoomHome;