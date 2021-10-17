import "./Manager.css";
import axios from "../API/axios.js";
import React, { useState, useEffect } from "react";
import { Modal, Form, Input, Select, Button } from "antd";

function Register(props) {
    console.log(props);
    const [visible, setVisible] = useState(false);

    const [loginEmail, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [teamId, setTeamId] = useState("");
    const [teamNum, setTeamNum] = useState(1);
    const [phone, setphone] = useState("");
    const [region, setRegion] = useState("");
    const [address, setAddress] = useState("");
    const [role, setRole] = useState("");

    useEffect(() => {
        axios.get("/team/" + teamNum).then((response) => {
            console.log(response);
            setTeamId(response.data.team._id);
        });
    }, []);

    const { Option } = Select;
    const formItemLayout = {
        labelCol: {
            xs: {
                span: 24,
            },
            sm: {
                span: 8,
            },
        },
        wrapperCol: {
            xs: {
                span: 24,
            },
            sm: {
                span: 16,
            },
        },
    };
    const tailFormItemLayout = {
        wrapperCol: {
            xs: {
                span: 24,
                offset: 0,
            },
            sm: {
                span: 16,
                offset: 8,
            },
        },
    };
    const [form] = Form.useForm();

    const onSignUp = () => {
        // required password format
        var reg = /^(?=.*[a-zA-Z])(?=.*\d)[\s\S]{8,}$/;
        if (password != passwordConfirm) {
            alert("Password Inconsistent!");
        } else {
            if (reg.test(password)) {
                axios
                    .post("/staff/register", {
                        team: teamId,
                        givenName: firstName,
                        familyName: lastName,
                        loginEmail: loginEmail,
                        password: password,
                        role: role,
                        phone: phone,
                        address: address,
                        companysuburb: region,
                        teamNumber: teamNum,
                    })
                    .then((response) => {
                        console.log("111");
                        if (response.data.success) {
                            console.log("success");
                            console.log(response);
                            alert("Staff has been successfully added");
                            // props.history.push('/customer', {
                            //     staff: response.data.staff,
                            //     vendors: vendors,
                            //     position: [lat, lng]
                            // });
                            window.location.reload(false);
                        } else {
                            alert(
                                "Sign Up Fail: This email has already been registered! Please change another one"
                            );
                        }
                    })
                    .catch((error) => {
                        console.log(error.response);
                        alert(error.response);
                    });
            } else {
                alert(
                    "Password should have at least one alphabet character, one numerical digit with length no less than 8 characters"
                );
            }
        }
    };

    const onFinish = (values) => {
        console.log("Received values of form: ", values);
    };

    const onRegionChange = (value) => {
        setRegion(value);
    };

    const onRoleChange = (value) => {
        setRole(value);
    };

    return (
        <>
            <Button className="registerButton" onClick={() => setVisible(true)}>
                Register
            </Button>
            <Modal
                visible={visible}
                title="Register a new staff"
                onOk={() => setVisible(false)}
                onCancel={() => setVisible(false)}
                footer={[
                    <Button key="back" onClick={() => setVisible(false)}>
                        Cancel
                    </Button>,
                ]}
            >
                <Form
                    {...formItemLayout}
                    form={form}
                    name="register"
                    onFinish={onFinish}
                    scrollToFirstError
                >
                    <Form.Item
                        name="email"
                        label="E-mail"
                        rules={[
                            {
                                type: "email",
                                message: "The input is not valid E-mail!",
                            },
                            {
                                required: true,
                                message: "Please input your E-mail!",
                            },
                        ]}
                    >
                        <Input onChange={(e) => setEmail(e.target.value)} />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        label="Password"
                        rules={[
                            {
                                required: true,
                                message: "Please input your password!",
                            },
                        ]}
                        hasFeedback
                    >
                        <Input onChange={(e) => setPassword(e.target.value)} />
                    </Form.Item>

                    <Form.Item
                        name="confirm"
                        label="Confirm Password"
                        dependencies={["password"]}
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: "Please confirm your password!",
                            },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (
                                        !value ||
                                        getFieldValue("password") === value
                                    ) {
                                        return Promise.resolve();
                                    }

                                    return Promise.reject(
                                        new Error(
                                            "The two passwords that you entered do not match!"
                                        )
                                    );
                                },
                            }),
                        ]}
                    >
                        <Input
                            onChange={(e) => setPasswordConfirm(e.target.value)}
                        />
                    </Form.Item>

                    <Form.Item
                        name="firstname"
                        label="First Name"
                        rules={[
                            {
                                required: true,
                                message: "Please input your first name!",
                                whitespace: true,
                            },
                        ]}
                    >
                        <Input onChange={(e) => setFirstName(e.target.value)} />
                    </Form.Item>

                    <Form.Item
                        name="lastname"
                        label="Last Name"
                        rules={[
                            {
                                required: true,
                                message: "Please input your last name!",
                                whitespace: true,
                            },
                        ]}
                    >
                        <Input onChange={(e) => setLastName(e.target.value)} />
                    </Form.Item>

                    <Form.Item
                        name="teamnum"
                        label="Team Number"
                        rules={[
                            {
                                required: true,
                                message: "Please input the Team ID!",
                            },
                        ]}
                    >
                        <Input onChange={(e) => setTeamNum(e.target.value)} />
                    </Form.Item>

                    <Form.Item
                        name="phone"
                        label="Phone Number"
                        rules={[
                            {
                                required: true,
                                message: "Please input your phone number!",
                            },
                        ]}
                    >
                        <Input
                            // addonBefore={prefixSelector}
                            style={{
                                width: "100%",
                            }}
                            onChange={(e) => setphone(e.target.value)}
                        />

                        {/* <Form.Control onChange={e => setphone(e.target.value)} /> */}
                    </Form.Item>

                    <Form.Item
                        name="region"
                        label="Region"
                        rules={[
                            {
                                // type: "array",
                                required: true,
                                message: "Please select the region!",
                            },
                        ]}
                    >
                        <Select
                            placeholder="Select the region for the staff"
                            onChange={onRegionChange}
                        >
                            <Option value="Box Hill">Box Hill</Option>
                            <Option value="Carlton">Carlton</Option>
                            <Option value="Caulfield">Caulfield</Option>
                            <Option value="Glen Waverley">Glen Waverley</Option>
                            <Option value="Melbourne">Melbourne</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item
                        name="address"
                        label="Address"
                        rules={[
                            {
                                required: true,
                                message: "Please input address!",
                            },
                        ]}
                    >
                        <Input onChange={(e) => setAddress(e.target.value)} />
                    </Form.Item>

                    <Form.Item
                        name="role"
                        label="Role"
                        rules={[
                            {
                                required: true,
                                message: "Please select role!",
                            },
                        ]}
                    >
                        <Select
                            placeholder="Select the role for the staff"
                            onChange={onRoleChange}
                        >
                            <Option value="Staff">Staff</Option>
                            <Option value="Manager">Manager</Option>
                            {/* <Option value="other">Other</Option> */}
                        </Select>

                        {/* <Input onChange={e => setRole(e.target.value)} /> */}
                    </Form.Item>
                    <Form.Item {...tailFormItemLayout}>
                        <Button
                            type="primary"
                            htmlType="submit"
                            onClick={onSignUp}
                        >
                            Register
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
}

export default Register;
