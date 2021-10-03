import React, { useState, useEffect } from "react";
import queryString from 'query-string';
import io from "socket.io-client";

import Messages from '../Messages/Messages';
import InfoBar from '../InfoBar/InfoBar';
import Input from '../Input/Input';


import Navigation from '../../components/Navigation';
import TeamList from '../../Group/TeamList.js';
import UploadFile from '../../Group/UploadFile.js';


import './Chat.css';

const ENDPOINT = 'http://localhost:8080';

let socket;

const Chat = ({ props, location }) => {
  console.log(props)
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [users, setUsers] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT);

    setRoom(room);
    setName(name)

    socket.emit('join', { name, room }, (error) => {
      if(error) {
        alert(error);
      }
    });
  }, [ENDPOINT, location.search]);
  
  useEffect(() => {
    socket.on('message', message => {
      setMessages(messages => [ ...messages, message ]);
    });
    
    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
}, []);

  const sendMessage = (event) => {
    event.preventDefault();

    if(message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  }

  return (
    <div className="GroupPageInChat">
      <div className='NavBar'> <Navigation></Navigation> </div>
      <div className='TeamList'> <TeamList></TeamList> </div> 
      <div className="chatWhole">
        <div className="Chatbox">
            <InfoBar data = {props} room={room} />
            <Messages messages={messages} name={name} />
            <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
        </div>
      </div>
      <div className='UploadFile'> <UploadFile></UploadFile> </div> 
    </div>
  );
}

export default Chat;
