import React, { useState } from 'react';
import { Link } from "react-router-dom";

import './Join.css';
import axios from "../../API/axios.js";
import { Button, Modal, Form } from "react-bootstrap";

export default function SignIn(props) {
  console.log(props)
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  const [loginEmail, setEmail] = useState('');
  const [Password, setPasswoed] = useState('');

  const onSignIn = () =>{
    // if(!name && !room){
    //   console.log(name)
    //   console.log(room)
    //   console.log('/chat?name='+name + '&room=' + room)
    if(!name && !room){
      props.data.history.push({pathname:'/chat?name='+name + '&room=' + room ,state:{props}})
    }
    // }
  }

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
        
        {/* <div>
          <input placeholder="Login Email" className="joinInput mt-20" type="text" onChange={(event) => setEmail(event.target.value)} />
        </div>
        <div>
          <input placeholder="Login Password" className="joinInput mt-20" type="text" onChange={(event) => setPasswoed(event.target.value)} />
        </div> */}
       
        {/*&email=${loginEmail}&password=${Password}*/}
        <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={obj}>
          <button className={'button mt-20'} type="submit">Sign In</button>
        </Link>
      </div>
    </div>
  );
}
