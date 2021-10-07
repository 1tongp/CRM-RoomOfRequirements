import PropTypes from "prop-types";
import { Row, Col, Alert } from "react-bootstrap";
import { Modal, Form } from "react-bootstrap";
import React, { useState } from "react";
import { Menu, Dropdown, Button } from 'antd';
import axios from "../API/axios.js";
import { message } from "antd";

class MyEvent extends React.Component {
    constructor(props) {
        super(props)
        console.log(this.props)
    }
    // componentDidMount(){
    //     MyGlobal.popOver();
    // }
    state = {
        visible: false,
    };

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleCancel = () => {
        this.setState({ visible: false });
    };

    onDelete = () => {
        const r = window.confirm("Would you like to remove this event?")
        if (r === true) {
            axios.get('/calendar/delete/' + this.props.event.id).then(response => {
                if (response.data.success) {
                    message.success("Deleted event successfully!")

                }
            })
            window.location.reload(false)
        }
    }



    menu = (
        <>
            <Menu>
                <Menu.Item>
                    <a target="_blank">
                        <p>Creator: {this.props.event.creator}</p>
                    </a>
                </Menu.Item>
                
                <Menu.Item>
                    <a target="_blank">
                        <p>Event: {this.props.event.title}</p>
                    </a>

                </Menu.Item>
                <Menu.Item>
                    <a target="_blank">
                        <p>Visibility: {this.props.event.visibility}</p>
                    </a>
                </Menu.Item>
                <Menu.Item>
                    <Button onClick={this.onDelete}>
                        Delete Event
                    </Button>
                </Menu.Item>
            </Menu>
        </>
    )

    render() {
        return (
            <div>

                <div className="custom_event_content"
                    data-toggle="popover"
                    data-placement="top"
                    data-popover-content={"#custom_event_"}
                    tabIndex="0"
                >
                    {/* {props.event.title} */}
                    <Dropdown overlay={this.menu} placement="bottomCenter" arrow>
                        <p>{this.props.event.title}</p>
                    </Dropdown>


                </div>


            </div>
        );
    }
}


export default MyEvent