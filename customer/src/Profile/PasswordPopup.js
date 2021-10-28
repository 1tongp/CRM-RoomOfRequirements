import "./Profile.css";
import {  Button, Form, Col } from "react-bootstrap";
import { Modal } from "antd";
import React from "react";
import axios from "../API/axios.js";

class PasswordPopup extends React.Component {
    state = {
        loading: false,
        visible: false,
        password: null,
        password2: null,
    };

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = () => {
        console.log(this.password);
        console.log(this.password2);
        this.setState({ visible: false });
        
    };

    handleCancel = () => {
        this.setState({ visible: false });
    };

    onUpdate = () => {
        // required password format
        console.log(this.props);
        var id = this.props.data.location.state.staff.id
        var reg = /^(?=.*[a-zA-Z])(?=.*\d)[\s\S]{8,}$/
        if (this.state.password != null & this.state.password2 != null){
            if (this.state.password != this.state.password2) {
                alert("Password Inconsistent!");
            }
            else {
                if (reg.test(this.state.password)) {
                    console.log("222");
                    axios.post('/staff/changeDetails/' + id, {password: this.state.password}).then(response => {
                        console.log("111");
                        if (response.data.success) {
                            console.log("success");
                            console.log(response);
                            alert("Staff has been successfully updated");
                        }                        
                        else {
                            alert("updated Fail: some error exist")
                        }
                    }).catch(error => {
                        console.log(error.response)
                        alert(error.response)
                    })
                }
                else {
                    alert("Password should have at least one alphabet character, one numerical digit with length no less than 8 characters")
                }
            }

        }
        
        
    }

    render() {
        const { visible, loading } = this.state;
        return (
            <>
                <Button
                    className="passRight"
                    type="button"
                    variant="primary"
                    onClick={this.showModal}
                >
                    Change Password
                </Button>
                <Modal
                    visible={visible}
                    title="Change Password"
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    footer={[
                        <Button key="back" onClick={this.handleCancel}>
                            Cancel
                        </Button>,
                        <Button
                            key="submit"
                            type="primary"
                            loading={loading}
                            onClick={() => this.onUpdate()}
                        >
                            Save
                        </Button>,
                    ]}
                >
                    <div className="popUp-title">
                        Change Password for account:
                    </div>
                    <br />
                    <Form>
                        <Col>
                            <Form.Group
                                as={Col}
                                controlId="formGridOldPassword"
                            >
                                <Form.Label>New Password</Form.Label>
                                <Form.Control
                                    size="medium"
                                    type="password"
                                    placeholder="Enter Your New Password"
                                    onChange={(e) =>
                                        this.setState({
                                            password: e.target.value,
                                        })
                                    }
                                />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group
                                as={Col}
                                controlId="formGridNewPassword"
                            >
                                <Form.Label>Comfirm Password</Form.Label>
                                <Form.Control
                                    size="medium"
                                    type="password2"
                                    placeholder="Comfirm Your New Password"
                                    onChange={(e) =>
                                        this.setState({
                                            password2: e.target.value,
                                        })
                                    }
                                />
                            </Form.Group>
                        </Col>
                    </Form>
                </Modal>
            </>
        );
    }
}

export default PasswordPopup;
