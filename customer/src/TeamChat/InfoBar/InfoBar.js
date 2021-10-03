import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';
import closeIcon from '../../icons/closeIcon.png';
import { Button, Modal, Form } from "react-bootstrap";
import './InfoBar.css';
import { useHistory } from "react-router-dom";
import axios from "../../API/axios.js";

// const InfoBar = ({ props, room }) => (
//   <div className="infoBar">
//     <div className="leftInnerContainer">
//       <img className="onlineIcon" src={onlineIcon} alt="online icon" />
//       <h3>{room}</h3>
//     </div>
//     <div className="rightInnerContainer">
//       <Button onClick={onClose}>
//         <img src={closeIcon} alt="close icon" />
//       </Button>
//     </div>
//   </div>
// );

function InfoBar (props){
  console.log(props)
  // const onClose = (props) => {
  //   console.log(props)
  //   props.data.history.push('/group', {staff: props.data.location.state.staff, key: '3'});
  // }

  return(
    <div className="infoBar">
    <div className="leftInnerContainer">
      <img className="onlineIcon" src={onlineIcon} alt="online icon" />
      {/* <h3>{room}</h3> */}
    </div>
    <div className="rightInnerContainer">
      {/* <Button onClick={onClose}>
        <img src={closeIcon} alt="close icon" />
      </Button> */}
    </div>
  </div>
  )
}

export default InfoBar;