import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';
import closeIcon from '../../icons/closeIcon.png';
import { Button} from "react-bootstrap";
import './InfoBar.css';
import axios from "../../API/axios.js";
import io from "socket.io-client";

function InfoBar (props){
  const ENDPOINT = "https://crm-room-of-requirement.herokuapp.com/" || "http://localhost:8080";
  let socket;
  socket = io(ENDPOINT);
  console.log(props)
  const onClose = () => {
    console.log(props)
    axios.post('/staff/login/unhash', { loginEmail: props.data.state.staff.loginEmail , password: props.data.state.staff.password }).then(response =>{
      console.log(response);
      if(!response.data.success){
        props.data.query.history.push('/group', {staff: response.data.staff, key:'3'})
      }
      else{
        props.data.query.history.push('/group', {staff: response.data.staff, key:'3'});
      }
    })
  }

  return(
    <div className="infoBar">
    <div className="leftInnerContainer">
      <img className="onlineIcon" src={onlineIcon} alt="online icon" />
      <h3>Room: {props.room}</h3>
    </div>
    <div className="rightInnerContainer">
      <Button className="closeIcon" onClick={onClose}>
        <img src={closeIcon} alt="close icon" />
      </Button>
    </div>
  </div>
  )
}

export default InfoBar;