import React from "react";
import { Button, Modal, Form, Row, Col } from "react-bootstrap";
import "./Profile.css";

class ChangeForm extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props);
    }

    state = {
        modal1Visible: false,
        redirect: null,
    };

    redirect = () => {
        this.props.data.history.push("/profileShow", {
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
                            <Form.Label
                                // for="colFormLabelLg"
                                // class="col-sm-2 col-form-label col-form-label-lg"
                            >
                                {" "}
                                Name
                            </Form.Label>
                            <Form.Control
                                size="lg"
                                type="text"
                                placeholder="Enter Name"
                                value = {this.props.data.location.state.staff.givenName +" "+ this.props.data.location.state.staff.familyName}
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
                                value = {this.props.data.location.state.staff.role}
                            />
                        </Form.Group>
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
                                value = {this.props.data.location.state.staff.loginEmail}
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
                                value = {this.props.data.location.state.staff.id}
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
                                type="text"
                                placeholder="Enter Phone Number"
                                value = {this.props.data.location.state.staff.phone}
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
                                value = {this.props.data.location.state.staff.teamNumber}
                            />
                        </Form.Group>
                    </Col>
                </Row>

                <Row className="mb-3">
                    <Col>
                        <Form.Group as={Col} controlId="formGridAddress">
                            <Form.Label>Address</Form.Label>
                            <Form.Control
                                size="lg"
                                type="text"
                                placeholder="Enter Address"
                                value = {this.props.data.location.state.staff.address}
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
                                value = {this.props.data.location.state.staff.companysuburb}
                            />
                        </Form.Group>
                    </Col>
                </Row>

                <Row className="mb-3">
                    <Button
                        className="saveRight"
                        variant="primary"
                        type="button"
                        onClick={() => this.redirect()}
                    >
                        Save
                    </Button>
                    
                    <Button
                        className="cancelRight"
                        variant="primary"
                        type="button"
                        onClick={() => this.redirect()}
                    >
                        Cancel
                    </Button>
                </Row>
            </Form>
        );
    }
}

export default ChangeForm;
