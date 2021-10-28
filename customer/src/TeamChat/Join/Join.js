import React, { useState } from 'react';
import { Link } from "react-router-dom";

import './Join.css';


export default function SignIn(props) {
  console.log(props)
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');


  let obj = {
    pathname: '/chat',
    search: `?name=${name}&room=${room}`,
    query: {history: props.data.history},
    state: { staff: {id: props.data.location.state.staff.id, 
             loginEmail: props.data.location.state.staff.loginEmail, 
             password: props.data.location.state.staff.password, 
             key: "3",
             address: props.data.location.state.staff.address,
             companysuburb: props.data.location.state.staff.companysuburb,
             familyName: props.data.location.state.staff.familyName,
             givenName: props.data.location.state.staff.givenName,
             orderNum: props.data.location.state.staff.orderNum,
             phone: props.data.location.state.staff.phone,
             role: props.data.location.state.staff.role,
             team: props.data.location.state.staff.team}}
  }
  return (
    <div className="JoinGroupchatPage">
      <div className="JoinContent">
        <h1 className="heading">Start Team Chat</h1>
        <div>
          <input placeholder="Name" className="joinInput" type="text" onChange={(event) => setName(event.target.value)} />
        </div>
        <div>
          <input placeholder="Room" className="joinInput mt-20" type="text" onChange={(event) => setRoom(event.target.value)} />
        </div>
        <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={obj}>
          <button className={'button mt-20'} type="submit">Sign In</button>
        </Link>
      </div>
    </div>
  );
}
