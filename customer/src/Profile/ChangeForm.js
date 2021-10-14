import React from "react";
import { Button, Modal, Form, Row, Col } from "react-bootstrap";
import "./Profile.css";
import axios from "../API/axios.js";
import { Upload, message } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
}

class ChangeForm extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props);
    }

    state = {
        modal1Visible: false,
        redirect: null,
        firstName: this.props.data.location.state.staff.givenName,
        lastName: this.props.data.location.state.staff.familyName,
        phone: this.props.data.location.state.staff.phone,
        address: this.props.data.location.state.staff.addresss,
        loading: false,
    };

    handleChange = info => {
        if (info.file.status === 'uploading') {
          this.setState({ loading: true });
          return;
        }
        if (info.file.status === 'done') {
          // Get this url from response in real world.
          getBase64(info.file.originFileObj, imageUrl =>
            this.setState({
              imageUrl,
              loading: false,
            }),
          );
        }
    };

    setModal1Visible(modal1Visible) {
        this.setState({ modal1Visible });
    }

    // handleChange = e => {
    //     this.setState({ [e.target.name]: e.target.value });
    // };

    NameFirstChange = e => {
        this.setState({ firstName : e.target.value });
    };

    NameLastChange = e => {
        this.setState({ lastName : e.target.value });
    };

    phoneChange = e => {
        this.setState({ phone : e.target.value });
    };

    addressChange = e => {
        this.setState({ address : e.target.value });
    };
    
    

    redirect = () => {
        this.props.data.history.push("/profileShow", {
            staff: this.props.data.location.state.staff,
            key: "6",
        });
    };

    onUpdate = () => {
        var id = this.props.data.location.state.staff.id
        console.log(this.state.firstName);
        axios.post('/staff/changeInfo/' + id, {
            givenName: this.state.firstName,
            familyName:this.state.lastName,
            phone:this.state.phone,
            address: this.state.address,
        }).then(response => {
            console.log(response);
            if (response.data.success) {
                alert('Information has been updated')
                this.setModal1Visible(false);
            }
            else {
                alert("Information updating errored!")
            }
        })

    }

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
                                First Name
                            </Form.Label>
                            <Form.Control
                                size="lg"
                                type="text"
                                name="firstname"
                                placeholder= {this.props.data.location.state.staff.givenName}
                                onChange={this.NameFirstChange}
                                // value = {this.props.data.location.state.staff.givenName}
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group as={Col} controlId="formGridName">
                            <Form.Label
                                // for="colFormLabelLg"
                                // class="col-sm-2 col-form-label col-form-label-lg"
                            >
                                {" "}
                                Last Name
                            </Form.Label>
                            <Form.Control
                                size="lg"
                                type="text"
                                name="lastname"
                                placeholder= {this.props.data.location.state.staff.familyName}
                                onChange={this.NameLastChange}
                                // value = {this.props.data.location.state.staff.familyName}
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
                                name="phone"
                                placeholder= {this.props.data.location.state.staff.phone}
                                onChange={this.phoneChange}
                                // value = {this.props.data.location.state.staff.phone}
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
                                name="address"
                                placeholder= {this.props.data.location.state.staff.address}
                                onChange={this.addressChange}
                                // value = {this.props.data.location.state.staff.address}
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
                        onClick={() => this.onUpdate()}
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
