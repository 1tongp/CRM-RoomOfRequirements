import PropTypes from "prop-types";
import "./Profile.css";
import {  Button, Form, Row, Col } from "react-bootstrap";
import { Modal } from "antd";
import React, { useState } from "react";

// function PasswordPopup(props) {
//     const [isModalVisible, setIsModalVisible] = useState(false);

//     const showModal = () => {
//         setIsModalVisible(true);
//     };

// const [password2, setPassword2] = useState('');
// const [password, setPassword] = useState('');

//     const handleCancel = () => {
//     setIsModalVisible(false);
//     };

//     return (
//         <>
//         <Button className='button' onClick={showModal}>
//             Details
//         </Button>
//         <Modal title="Change Password" visible={isModalVisible} onOk={handleCancel} onCancel={handleCancel}>
// <div className="popUp-title">Change Password for account: "xxx@hsbc.com"</div>
//     <Form>
//         <Col>
//         <Form.Group as={Col} controlId="formGridOldPassword">
//         <Form.Label>New Password</Form.Label>
//         <Form.Control size="lg" type="password" placeholder="Enter Your New Password" onChange={e => setPassword(e.target.value)} />
//         </Form.Group>
//         </Col>
//         <Col>
//         <Form.Group as={Col} controlId="formGridNewPassword">
//         <Form.Label>Comfirm Password</Form.Label>
//         <Form.Control size="lg" type="password2" placeholder="Comfirm Your New Password" onChange={e => setPassword2(e.target.value)} />
//         </Form.Group>
//         </Col>
//     </Form>
//                         {/* <button className="close-btn" onClick={() => setIsModalVisible(false)}>Save and close</button> */}
//         </Modal>
//         </>
//     );
// }

class PasswordPopup extends React.Component {
    state = {
        loading: false,
        visible: false,
        password: false,
        password2: false,
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
                            onClick={this.handleOk}
                        >
                            Save
                        </Button>,
                    ]}
                >
                    <div className="popUp-title">
                        Change Password for account: "xxx@hsbc.com"
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
