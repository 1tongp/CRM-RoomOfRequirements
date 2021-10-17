import React from "react";
import { Button, Modal, Form, Row, Col } from "react-bootstrap";
import { Space } from "antd";
import "./Profile.css";
import Popup2 from "./PasswordPopup";
import ManagerAccess from "../Group/ManagerAccess.js";

class UnchangedForm extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props);
    }

    state = {
        redirect: null,
        modal1Visible: false,
    };

    setModal1Visible(modal1Visible) {
        this.setState({ modal1Visible });
    }

    redirect = () => {
        this.props.data.history.push("/profileChange", {
            staff: this.props.data.location.state.staff,
            key: "6",
        });
    };

    render() {
        return (
            <Form>
                <br />
                <Row className="mb-3">
                    <Col>
                        <Form.Group as={Col} controlId="formGridName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                size="lg"
                                plaintext
                                readOnly
                                value={
                                    this.props.data.location.state.staff
                                        .givenName +
                                    " " +
                                    this.props.data.location.state.staff
                                        .familyName
                                }
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group as={Col} controlId="formGridRole">
                            <Form.Label>Role</Form.Label>
                            <Form.Control
                                size="lg"
                                plaintext
                                readOnly
                                value={
                                    this.props.data.location.state.staff.role
                                }
                            />
                        </Form.Group>
                        <div>
                            <ManagerAccess data={this.props.data} />
                            {/* <ManagerAccess data={props}/> */}
                        </div>
                    </Col>
                </Row>

                <Row className="mb-3">
                    <Col>
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                size="lg"
                                plaintext
                                readOnly
                                value={
                                    this.props.data.location.state.staff
                                        .loginEmail
                                }
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group as={Col} controlId="formGridAddress2">
                            <Form.Label>Employee ID</Form.Label>
                            <Form.Control
                                size="lg"
                                plaintext
                                readOnly
                                value={this.props.data.location.state.staff.id}
                            />
                        </Form.Group>
                    </Col>
                </Row>

                <Row className="mb-3">
                    <Col>
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control
                                size="lg"
                                plaintext
                                readOnly
                                value={
                                    this.props.data.location.state.staff.phone
                                }
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group as={Col} controlId="formGridTeam">
                            <Form.Label>Team ID</Form.Label>
                            <Form.Control
                                size="lg"
                                plaintext
                                readOnly
                                value={
                                    this.props.data.location.state.staff
                                        .teamNumber
                                }
                            />
                        </Form.Group>
                    </Col>
                </Row>

                <Row className="mb-3">
                    <Col>
                        <Form.Group as={Col} controlId="formGridAddress">
                            <Form.Label
                                for="colFormLabelLg"
                                class="col-sm-2 col-form-label col-form-label-lg"
                            >
                                Address
                            </Form.Label>
                            <Form.Control
                                size="lg"
                                plaintext
                                readOnly
                                value={
                                    this.props.data.location.state.staff.address
                                }
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group as={Col} controlId="formGridRegion">
                            <Form.Label>Region</Form.Label>
                            <Form.Control
                                size="lg"
                                plaintext
                                readOnly
                                value={
                                    this.props.data.location.state.staff
                                        .companysuburb
                                }
                            />
                        </Form.Group>
                    </Col>
                </Row>

                <Row className="mb-3">
                    <Space>
                        <Button
                            className="editRight"
                            variant="primary"
                            type="button"
                            onClick={() => this.redirect()}
                        >
                            Edit Profile
                        </Button>
                        <Popup2 data={this.props.data}>Change Password</Popup2>
                    </Space>
                </Row>
            </Form>
        );
    }
}

export default UnchangedForm;
