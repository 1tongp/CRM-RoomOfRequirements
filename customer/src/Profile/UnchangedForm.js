import React from 'react';
import {usestate} from 'react';
import { Button, Modal, Form, Row, Col} from 'react-bootstrap';
import './Profile.css';
import Popup from "./Password";
import Popup2 from "./PasswordPopup";
import { Redirect } from "react-router-dom";

class UnchangedForm extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props);
    };

    state = {
        modal1Visible: false,
        redirect: null
    };

    setModal1Visible(modal1Visible){
        this.setState({ modal1Visible});
    }

    redirect = () => {
         this.props.data.history.push('/profileChange', {staff: this.props.data.location.state.staff, key:'6'})
    }

    render(){
        return(
            <Form>
                <br />

                <Row className="mb-3">
                    <Col>
                    <Form.Group as={Col} controlId="formGridName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control size="lg" plaintext readOnly defaultValue="Coco" />
                    </Form.Group>
                    </Col>
                    <Col>
                    <Form.Group as={Col} controlId="formGridRole">
                    <Form.Label>Role</Form.Label>
                    <Form.Control size="lg" plaintext readOnly defaultValue="Staff" />
                    </Form.Group>
                    </Col>
                </Row>

                <Row className="mb-3">
                    <Col>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control size="lg" plaintext readOnly defaultValue="xxxx@hsbc.com" />
                    </Form.Group>
                    </Col>
                    <Col>
                    <Form.Group as={Col} controlId="formGridAddress2">
                        <Form.Label>Employee ID</Form.Label>
                        <Form.Control size="lg" plaintext readOnly defaultValue="1234567" />
                    </Form.Group>
                    </Col>
                    
                </Row>

                <Row className="mb-3">
                    <Col>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control size="lg" plaintext readOnly defaultValue="0401457390" />
                    </Form.Group>
                    </Col>
                    <Col>
                    <Form.Group as={Col} controlId="formGridTeam">
                        <Form.Label>Team ID</Form.Label>
                        <Form.Control size="lg" plaintext readOnly defaultValue="12" />
                    </Form.Group>
                    </Col>                   
                </Row>

                <Row className="mb-3">
                    <Col>
                    <Form.Group as={Col} controlId="formGridAddress">
                    <Form.Label for="colFormLabelLg" class="col-sm-2 col-form-label col-form-label-lg">Address</Form.Label>
                    <Form.Control size="lg" plaintext readOnly defaultValue="380 Swanston Stree, Melbourne 3000 VIC" />
                    </Form.Group>
                    </Col>
                    <Col>
                    <Form.Group as={Col} controlId="formGridRegion">
                    <Form.Label>Region</Form.Label>
                    <Form.Control size="lg" plaintext readOnly defaultValue="Melbourne" />
                    </Form.Group>
                    </Col>
                </Row>

                <Row className="mb-3">
                        <Button className="editRight" variant="primary" type="button" onClick={() => this.redirect()}>
                            Edit Profile   
                        </Button>
                        <Popup2 trigger={this.state.modal1Visible}>

                            <div className="popUp-title">Change Password for account: "xxx@hsbc.com"</div>

                            <Form>
                                <Col>
                                <Form.Group as={Col} controlId="formGridOldPassword">
                                <Form.Label>New Password</Form.Label>
                                <Form.Control size="lg" type="text" placeholder="Enter Your New Password" />
                                </Form.Group>
                                </Col>
                                <Col>
                                <Form.Group as={Col} controlId="formGridNewPassword">
                                <Form.Label>Old Password</Form.Label>
                                <Form.Control size="lg" type="text" placeholder="Enter Your Old Password" />
                                </Form.Group>
                                </Col>
                            </Form>
                        </Popup2>
                        {/* <div className="popup" onclick="myFunction()">Click me!
                            <span class="popuptext" id="myPopup">Popup text...</span>
                        </div> */}
                        <Button className="passRight" variant="primary" type="button" onClick={() => this.setModal1Visible(true)}>
                            Change Password
                        </Button>
                </Row>
                </Form>
        )
    }
}

export default UnchangedForm;