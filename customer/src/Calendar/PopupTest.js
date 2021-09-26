import PropTypes from "prop-types";
import { Row, Col, Alert } from "react-bootstrap";
import { Modal, Form } from "react-bootstrap";
import React, { useState } from "react";
import { Menu, Dropdown, Button } from 'antd';
import axios from "../API/axios.js";
import { message } from "antd";
// import _ from 'lodash';

// function MyEvent(props) {
//     // constructor(props){
//     //     super(props)
//     //     console.log(this.props)
//     // }
//     // componentDidMount(){
//     //     MyGlobal.popOver();
//     // }
//     const [show2, setShow2] = useState(false);
//     const handleClose2 = () => setShow2(false);

//     const handleShow2 = () => setShow2(true);
//     const customerModal = (



//         <>
//                 <Modal.Header closeButton>
//                     <Modal.Title>Sign In</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     <Form>

//                         {
//                             props.event.title
//                         }

//                     </Form>
//                 </Modal.Body>
//                 <Modal.Footer>

//                 </Modal.Footer>

//         </>

//     )

//     return (
//         <div>
//             <Modal
//                 aria-labelledby="contained-modal-title-vcenter"
//                 centered
//                 show={show2}
//                 onHide={handleClose2}
//                 style={{ marginTup: "2vh" }}
//             >
//                 {customerModal}
//             </Modal>
//             <div className="custom_event_content"
//                 data-toggle="popover"
//                 data-placement="top"
//                 data-popover-content={"#custom_event_" + props.event.id}
//                 tabIndex="0"
//             >
//                 {/* {props.event.title} */}
//                 <Button onClick={handleShow2}>{props.event.title}</Button>

//             </div>

//             {/* <div className="hidden" id={"custom_event_" + this.props.event.id} >
//               <div className="popover-heading">
//                 {this.props.event.driver}

//               </div>

//               <div className="popover-body">
//                 {this.props.event.title}<br/>
//               </div>
//             </div> */}
//         </div>
//     );
// }


// export default MyEvent

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

    // customerModal = (
    //     <>
    //         <Modal.Header closeButton>
    //             <Modal.Title>Edit</Modal.Title>
    //         </Modal.Header>
    //         <Modal.Body>
    //             <Form>

    //                 {
    //                     this.props.event.title
    //                 }

    //             </Form>
    //         </Modal.Body>
    //         <Modal.Footer>

    //         </Modal.Footer>

    //     </>

    // )

    menu = (
        <>
            {/* <Modal
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={this.visible}
                onHide={this.handleCancel}
                style={{ marginTup: "2vh" }}
            >
                {this.customerModal}
            </Modal> */}
            <Menu>
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
                        <a target="_blank">
                            <p>Creator: {this.props.event.staffName}</p>
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
                {/* <Modal
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    show={this.visible}
                    onHide={this.handleCancel}
                    style={{ marginTup: "2vh" }}
                >
                    {this.customerModal}
                </Modal> */}
                <div className="custom_event_content"
                    data-toggle="popover"
                    data-placement="top"
                    data-popover-content={"#custom_event_"}
                    tabIndex="0"
                >
                    {/* {props.event.title} */}
                    <Dropdown overlay={this.menu} placement="bottomCenter" arrow>
                        <Button>{this.props.event.title}</Button>
                    </Dropdown>
                    {/* <Button onClick={this.showModal}>{this.props.event.title}</Button> */}

                </div>

                {/* <div className="hidden" id={"custom_event_" + this.props.event.id} >
                  <div className="popover-heading">
                    {this.props.event.driver}
                    
                  </div>
    
                  <div className="popover-body">
                    {this.props.event.title}<br/>
                  </div>
                </div> */}
            </div>
        );
    }
}


export default MyEvent