import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState, setState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './Calendar.css'
import axios from '../API/axios.js';
import CustomerList from './CustomerExpired.js'

import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

import { Button, Modal, Form } from 'react-bootstrap';

import Navigation from '../components/Navigation';

const locales = {
    "en-AU": require("date-fns/locale/en-AU"),
};
const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});

// dummy data 
// The input for month indication is smaller than the true month by one -> 6 means 7(July)
const events = [
    {
        title: "Big Meeting",
        allDay: true,
        start: new Date(2021, 7, 2),
        end: new Date(2021, 7, 2),
    },
    {
        title: "Vacation",
        start: new Date(2021, 8, 7, 7, 0, 0),
        end: new Date(2021, 8, 7, 11, 0, 0),
    },
    {
        title: "Conference",
        start: new Date(2021, 8, 23, 7, 0, 0),
        end: new Date(2021, 8, 23, 13, 0, 0),
    },
    {
        title: "contact client",
        start: new Date(2021, 8, 23, 15, 0, 0),
        end: new Date(2021, 8, 23, 16, 0, 0),
    },    
    {
        title: "contact client",
        start: new Date(2021, 8, 23, 19, 0, 0),
        end: new Date(2021, 8, 23, 20, 0, 0),
    },
];

const aevent = [{
    "title": "test",
    "start": "2021-08-12T15:01:00.000Z",
    "end": "2021-08-12T04:01:00.000Z"
}]



function EventPopup(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [newEvent, setNewEvent] = useState({title:"", start:Date(), end:Date()})
    const [allEvent, setAllEvent] = useState(events)

    // to reload the page showing new added events on the calendar
    const handleSubmit = () => {
        // The datetime is changed into the correct Date form via 'new Date()'
        // console.log(new Date(newEvent.start))
        // console.log(newEvent.start)
        console.log(newEvent)
        console.log({...allEvent, newEvent})
        // event is not updated in the list (one step behind????)
        setAllEvent({...allEvent, newEvent})
        console.log(allEvent)
        window.location.reload(false)
    }

    const changeDatetype = (newEvent) => {

        console.log(newEvent)
        console.log(Date(newEvent.start))
        console.log(Date(newEvent.end))
    }

    const addeventtolist = () => {
        
        console.log(newEvent.start)
        console.log(Date(newEvent.start))
        
        /*    
        for (let i = 0; i < {...allEvent, newEvent}.length; i++) {
            console.log(typeof(i.start))
        }
        console.log({...allEvent, newEvent})
        //setAllEvent({...allEvent, newEvent})
        console.log(allEvent)
        */
    } 

    const addenwevent = () => {
        return {}

    }


    const eventPropGetter = () => {
        const style = {
            backgroundColor: "#FF0000",
            paddingLeft: "10px",
            color: 'white',
        };
        return {
            style: style
        };
    }

    const formats = {
        weekdayFormat: (date, culture, localizer) => localizer.format(date, 'Mon', culture),
      }

    return (
      <>
        <div class="CalendarPage">
            <div class='NavBar'> <Navigation data = {props}></Navigation> </div>

            <div class="pagecontent">
                <div class='full-calendar-wrapper'>
                    <div class="AddEvent-buttom">
                        <Button variant='custom' size = "sm" onClick={handleShow}>
                            Add event
                        </Button>
                
                        <Modal show={show} onHide={handleClose} bodyStyle={{height: 400}}>
                            <Modal.Header closeButton>
                                <Modal.Title>Add Event</Modal.Title>
                            </Modal.Header>

                            <Modal.Body>
                                <Form>
                                    <Form.Group controlId="formEventTitle">                
                                        <Form.Control type="text" placeholder="Event title"
                                            onChange={e => setNewEvent({...newEvent, title: e.target.value})} />
                                        <Form.Text className="text-mutes">
                                        </Form.Text>
                                    </Form.Group>

                                    <Form.Group controlId="formEventTitle"> 
                                        <Form.Control type="datetime-local" name='event-start-date'
                                            onChange={(e) => setNewEvent({...newEvent, start: new Date(e.target.value)})}
                                        />
                                    </Form.Group>

                                    <Form.Group controlId="formEventTitle"> 
                                        <Form.Control type="datetime-local" name='event-end-date'
                                            onChange={(e)=> setNewEvent({...newEvent, end: new Date(e.target.value)})}
                                        />
                                    </Form.Group>
                                </Form>              
                            </Modal.Body>

                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                                <Button variant="primary" onClick={handleSubmit}>  
                                    Add event
                                </Button>
                            </Modal.Footer>
                        </Modal>  
                    </div>
                    <div class="big-calendar-component"> 
                        <Calendar 
                            selectable
                            localizer={localizer} 
                            events={allEvent} 
                            startAccessor="start" 
                            endAccessor="end" 
                            style={{ height: 460, margin: "50px" }} 
                            eventPropGetter={(allEvent) => {const backgroundColor = allEvent.allDay ? '#8a083e' : '#e4d6d6'; return { style: { backgroundColor }}}} 
                        />
                    </div>
                </div> 

                <div class='customerList'> <CustomerList></CustomerList> </div> 
            </div>  
        </div>
      </>
    );
  }

export default EventPopup;