import React from "react";
// add any needed imports here
import {useSelector} from "react-redux"
function Users() {
  const users=useSelector((state)=>state.users)
  const userCount=useSelector((state)=>state.users.length)
  return (
    <div>
      <ul>
        Users!
        <ul>
          {users.map((item,i)=>(
            <li key={i}>
              {item.username}
            </li>
          ))}
        </ul>
Total Users: {userCount}
        {/* Write code here that displays the usernames of all users in the Redux store */}
     
      </ul>
    </div>
  );
}

export default Users;
