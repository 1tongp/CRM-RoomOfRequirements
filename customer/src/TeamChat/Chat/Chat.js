import React, { useState, useEffect } from "react";
import queryString from 'query-string';
import io from "socket.io-client";
import Messages from '../Messages/Messages';
import InfoBar from '../InfoBar/InfoBar';
import Input from '../Input/Input';
import Navigation from '../../components/NavigationChat';
import TeamList from '../../Group/TeamListPro.js';
import UploadFile from '../../Group/UploadFile.js';
import './Chat.css';

const ENDPOINT = "https://crm-room-of-requirement.herokuapp.com/" || "http://localhost:8080";

let socket;

const Chat = ({ location }) => {
  console.log(location)

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
      if (error) {
        alert(error);
      }
    });
  }, [ENDPOINT, location.search]);

  useEffect(() => {
    socket.on('message', message => {
      setMessages(messages => [...messages, message]);
    });

    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
  }, []);



  const sendMessage = (event) => {
    event.preventDefault();

    if (message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  }

  return (
    <div className="GroupPageInChat">
      <div className='chatNavBar'> <Navigation data = {location}></Navigation> </div>
      <div className='chatothercontent'>
        <div className='chatTeamList'> <TeamList data = {location}></TeamList> </div> 
        <div className="chatWhole">
          <div className="Chatbox">
            <InfoBar room={room} data={location}/>
            <Messages messages={messages} name={name} />
            <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
          </div>
        </div>
        <div className='UploadFile'> <UploadFile></UploadFile> </div> 
      </div>
    </div>
  );
}

export default Chat;
