import { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
import { message } from "antd";
import { Typography } from "antd";
import axios from "./API/axios.js";
const { Link } = Typography;

function Login(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    const handleShow = () => setShow(true);
    const [loginEmail, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // API between frontend and backend
    const onLogin = () => {
        axios
            .post("/staff/login", {
                loginEmail: loginEmail,
                password: password,
            })
            .then((response) => {
                console.log(props);
                console.log(response);
                if (response.data.success) {
                    props.history.push("/dashboard", {
                        staff: response.data.staff,
                        key: "1",
                    });
                } else {
                    // alert('Invalid Email or Password')
                    message.error(response.data.error);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const customerModal = (
        <>
            <Modal.Header closeButton>
                <Modal.Title>Sign In</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control
                            type="loginEmail"
                            placeholder="Email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <Form.Text className="text-mutes"></Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Link>Forget Password</Link>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancel
                </Button>
                <Button variant="danger" onClick={onLogin}>
                    Sign in
                </Button>
            </Modal.Footer>
        </>
    );

    // login page render
    return (
        <>
            <div
                style={{
                    textAlign: "center",
                    width: "50%",
                    margin: "auto",
                    marginTop: "10%",
                }}
            >
                <Modal
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    show={show}
                    onHide={handleClose}
                    style={{ marginTup: "2vh" }}
                >
                    {customerModal}
                </Modal>

                <img src={"../logo.jpg"} alt="logo image"></img>
                <h2>
                    Welcome to the HSBC Insurance Company <br />
                    Customer Releationship Management System <br />
                </h2>
                <div style={{ textAlign: "center" }}>
                    <br />
                    <br />
                    <Button
                        style={{ width: "40%" }}
                        variant="danger"
                        onClick={handleShow}
                    >
                        Sign in{" "}
                    </Button>
                    <br />
                    <br />
                    <a href="https://www.hsbc.com.au/">
                        <p style={{ color: "red" }}>More about HSBC</p>
                    </a>
                </div>
            </div>
        </>
    );
}

export default Login;
