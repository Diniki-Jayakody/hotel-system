import React from "react";

import { Link} from "react-router-dom";

function ViewRoom()
{
    return(
        <>
            <div>
                <div>
                   <Link to='/room_home'><button>back</button></Link> 
                </div>
                <div>
                    <h3>View Booked Rooms</h3>
                    <p> Room Type</p>
                    <div><h4>Superior Twin</h4></div>
                    <p> No of people</p>
                    <div><h4>Superior Twin</h4></div>
                    <p> Check in Date</p>
                    <div><h4>Superior Twin</h4></div>
                    <p> Check out Date</p>
                    <div><h4>Superior Twin</h4></div>
                </div>
                <div><button>Update</button> 
                <button>Delete</button></div>
                
            </div>
        </>
    );
}

export default ViewRoom;