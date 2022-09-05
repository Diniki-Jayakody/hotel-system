import React from "react";

import { Link} from "react-router-dom";

import { message, Popconfirm } from 'antd';

const confirm = (e) => {
    console.log(e);
    message.success('Click on Yes');
  };
  
  const cancel = (e) => {
    console.log(e);
    message.error('Click on No');
  };

function ViewBookedRoom()
{
    return(
        <>
            <div>
                <div>
                   <Link to='/room_home'><button> back</button></Link> 
                </div>
                <div>
                    <h3>View Rooms</h3>
                    <h4>Room Type</h4>
                    <p></p>
                    <h4>Description</h4>
                    <p></p>
                    <h4>Sleeps</h4>
                    <p></p>
                    <h4>Facilities</h4>
                    <p></p>
                    <h4>Image</h4>
                    <p></p>
                    <h4>Price</h4>
                    <p></p>
                  
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
                
            </div>
        </>
    );
}

export default ViewBookedRoom;