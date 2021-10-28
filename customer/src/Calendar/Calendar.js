import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState, useEffect } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datepicker/dist/react-datepicker.css";
import "./Calendar.css";
import axios from "../API/axios.js";
import CustomerList from "./CustomerExpired.js";
import "react-day-picker/lib/style.css";
import { Button, Modal, Form } from "react-bootstrap";
import Navigation from "../components/Navigation";
import poptest from "./PopupTest";

function EventPopup(props) {
    console.log(props);
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

    const [allEvents, setEventList] = useState([]);
    const [publicEvents, setPublic] = useState([]);
    useEffect(() => {
        axios
            .get(
                "/calendar/show/" +
                props.location.state.staff.id +
                "?visibility=Private"
            )
            .then((response) => {
                if (response.data.success) {
                    setEventList(response.data.events);
                }
            });
        axios
            .get(
                "/calendar/public/" +
                props.location.state.staff.team +
                "?visibility=Public"
            )
            .then((response) => {
                if (response.data.success) {
                    setPublic(response.data.events);
                }
            });
    }, []);

    var allEventss = [];
    for (let i = 0; i < allEvents.length; i++) {
        allEvents[i].start = new Date(allEvents[i].start);
        allEvents[i].end = new Date(allEvents[i].end);
        axios.get("staff/" + allEvents[i].staff).then((response) => {
            if(response.data.success){
                console.log(response)
                allEvents[i].staffName = response.data.staff.givenName + " " + response.data.staff.familyName;
                allEvents[i].firstName = response.data.staff.givenName;
                allEvents[i].lastName = response.data.staff.familyName;

            }
        });
        allEventss.push(allEvents[i]);
    }
    for (let i = 0; i < publicEvents.length; i++) {
        publicEvents[i].start = new Date(publicEvents[i].start);
        publicEvents[i].end = new Date(publicEvents[i].end);
        axios.get("staff/" + publicEvents[i].staff).then((response) => {
            if(response.data.success){
                console.log(response)
                publicEvents[i].staffName = response.data.staff.givenName + " " + response.data.staff.familyName;
                publicEvents[i].firstName = response.data.staff.givenName;
                publicEvents[i].lastName = response.data.staff.familyName;
            }
        });
        allEventss.push(publicEvents[i]);
    }

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [newEvent, setNewEvent] = useState({ name:"", title: "", visibility: "", type: "", start: new Date().toLocaleDateString, end: new Date().toLocaleDateString })
    
    // to reload the page showing new added events on the calendar
    const handleSubmit = () => {
        // The datetime is changed into the correct Date form via 'new Date()'
        
        axios.post("/calendar/create",
            {
                staff: props.location.state.staff.id,
                team: props.location.state.staff.team,
                name: newEvent.name,
                event: newEvent.title,
                startTime: newEvent.start,
                endTime: newEvent.end,
                type: newEvent.type,
                visibility: newEvent.visibility,
            }).then ((response) =>{
                console.log(response)
                if (response.data.message == "created a new event") {
                    console.log(response);
                    alert("Added event successfully!");
                    window.location.reload(false);
                }
                else{
                    console.log(response);
                    alert("Error! Please create again!")
                }
            })
    };

    return (
        <>
            <div class="CalendarPage">
                <div class="NavBar">
                    {" "}
                    <Navigation data={props}></Navigation>{" "}
                </div>

                <div class="calendarpagecontent">
                    <div class="full-calendar-wrapper">
                        <div class="AddEvent-buttom">
                            <Button
                                variant="custom"
                                size="sm"
                                onClick={handleShow}
                            >
                                Add event
                            </Button>

                            <Modal
                                show={show}
                                onHide={handleClose}
                                bodyStyle={{ height: 400 }}
                            >

                                <Modal.Header closeButton>
                                    <Modal.Title>Add Event</Modal.Title>
                                </Modal.Header>

                                <Modal.Body>
                                    <Form>
                                    <Form.Group controlId="formEventTitle">
                                            <Form.Control
                                                type="text"
                                                placeholder="Event Creator"
                                                onChange={(e) =>
                                                    setNewEvent({
                                                        ...newEvent,
                                                        name: e.target.value,
                                                    })
                                                }
                                            />
                                            <Form.Text className="text-mutes"></Form.Text>
                                        </Form.Group>
                                        <Form.Group controlId="formEventTitle">
                                            <Form.Control
                                                type="text"
                                                placeholder="Event Title"
                                                onChange={(e) =>
                                                    setNewEvent({
                                                        ...newEvent,
                                                        title: e.target.value,
                                                    })
                                                }
                                            />
                                            <Form.Text className="text-mutes"></Form.Text>
                                        </Form.Group>

                                        <Form.Group controlId="formEventTitle">
                                            <Form.Control 
                                                as = 'select'
                                                onChange={(e) => setNewEvent({...newEvent, visibility: e.target.value,})}
                                            >
                                                <option>Visibility</option>
                                                <option value="Public">Public</option>
                                                <option value="Private">Private</option>
                                            </Form.Control>
                                        </Form.Group> 


                                        <Form.Group controlId="formEventTitle">
                                            <Form.Control
                                                type="text"
                                                placeholder="Event Type"
                                                onChange={(e) =>
                                                    setNewEvent({
                                                        ...newEvent,
                                                        type: e.target.value,
                                                    })
                                                }
                                            />
                                            <Form.Text className="text-mutes"></Form.Text>
                                        </Form.Group>

                                        <Form.Group controlId="formEventTitle">
                                            <Form.Control
                                                type="datetime-local"
                                                name="event-start-date"
                                                onChange={(e) =>
                                                    setNewEvent({
                                                        ...newEvent,
                                                        start: new Date(
                                                            e.target.value
                                                        ),
                                                    })
                                                }
                                            />
                                        </Form.Group>

                                        <Form.Group controlId="formEventTitle">
                                            <Form.Control
                                                type="datetime-local"
                                                name="event-end-date"
                                                onChange={(e) =>
                                                    setNewEvent({
                                                        ...newEvent,
                                                        end: new Date(
                                                            e.target.value
                                                        ),
                                                    })
                                                }
                                            />
                                        </Form.Group>
                                    </Form>
                                </Modal.Body>

                                <Modal.Footer>
                                    <Button
                                        variant="secondary"
                                        onClick={handleClose}
                                    >
                                        Close
                                    </Button>
                                    <Button
                                        variant="primary"
                                        onClick={handleSubmit}
                                    >
                                        Add event
                                    </Button>
                                </Modal.Footer>
                            </Modal>

                            {/* new modal here */}

                        </div>
                        <div class="big-calendar-component">
        
                            <Calendar
                                selectable
                                // popup
                                localizer={localizer}
                                events={allEventss}
                                startAccessor="start"
                                endAccessor="end"
                                style={{ height: 460, margin: "50px" }}
                                onSelectEvent={
                                    (singleEvent) => {
                                        <poptest data = {singleEvent}/>
                                    }
                                }
                                components = {{event:
                                    poptest}}
                                eventPropGetter={(allEventss) => {
                                    const backgroundColor = allEventss.allDay
                                        ? "#8a083e"
                                        : "#e4d6d6";
                                    return { style: { backgroundColor } };
                                }}
                            />
                        </div>
                    </div>

                    <div class="ExpiredcustomerList">
                        {" "}
                        <CustomerList data={props}></CustomerList>{" "}
                    </div>
                </div>
            </div>
        </>
    );
}

export default EventPopup;
