import PropTypes from "prop-types";
import "./Manager.css";
import axios from "../API/axios.js";
import React, { useState, useEffect } from "react";
import {
    Modal,
    Form,
    Input,
    InputNumber,
    Cascader,
    Select,
    Row,
    Col,
    Checkbox,
    Button,
    AutoComplete,
} from "antd";

function Register(props) {
    console.log(props);
    const [loading, setLoading] = useState(false);
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

    console.log(region);
    const { Option } = Select;
    const residences = [
        {
            value: "carlton",
            label: "Carlton",
            // children: [
            // {
            //     value: 'hangzhou',
            //     label: 'Hangzhou',
            //     children: [
            //     {
            //         value: 'xihu',
            //         label: 'West Lake',
            //     },
            //     ],
            // },
            // ],
        },
        {
            value: "caulfield",
            label: "Caulfield",
            // children: [
            // {
            //     value: 'nanjing',
            //     label: 'Nanjing',
            //     children: [
            //     {
            //         value: 'zhonghuamen',
            //         label: 'Zhong Hua Men',
            //     },
            //     ],
            // },
            // ],
        },
        {
            value: "boxhill",
            label: "Boxhill",
        },
    ];
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
                console.log("222");
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

    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
            <Select
                style={{
                    width: 70,
                }}
            >
                <Option value="61">+61</Option>
                <Option value="86">+86</Option>
            </Select>
        </Form.Item>
    );
    const suffixSelector = (
        <Form.Item name="suffix" noStyle>
            <Select
                style={{
                    width: 70,
                }}
            >
                <Option value="USD">$</Option>
                <Option value="CNY">¥</Option>
            </Select>
        </Form.Item>
    );
    const [autoCompleteResult, setAutoCompleteResult] = useState([]);

    const onWebsiteChange = (value) => {
        if (!value) {
            setAutoCompleteResult([]);
        } else {
            setAutoCompleteResult(
                [".com", ".org", ".net"].map((domain) => `${value}${domain}`)
            );
        }
    };

    const websiteOptions = autoCompleteResult.map((website) => ({
        label: website,
        value: website,
    }));

    const onRegionChange = (value) => {
        setRegion(value);
    };

    const onRoleChange = (value) => {
        console.log(value);
        setRole(value);
    };

    return (
        <>
            <Button
                className="registerButton"
                onClick={() => setVisible(true)}
            >
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
                    initialValues={{
                        residence: ["zhejiang", "hangzhou", "xihu"],
                        prefix: "86",
                    }}
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
                        {/* <Form.Control onChange={e => setEmail(e.target.value)} /> */}
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
                        {/* <Form.Control onChange={e => setPassword(e.target.value)} /> */}
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
                        {/* <Form.Control onChange={e => setPasswordConfirm(e.target.value)} /> */}
                    </Form.Item>

                    <Form.Item
                        name="firstname"
                        label="First Name"
                        // tooltip="What do you want others to call you?"
                        rules={[
                            {
                                required: true,
                                message: "Please input your first name!",
                                whitespace: true,
                            },
                        ]}
                    >
                        <Input onChange={(e) => setFirstName(e.target.value)} />
                        {/* <Form.Control onChange={e => setFirstName(e.target.value)} /> */}
                    </Form.Item>

                    <Form.Item
                        name="lastname"
                        label="Last Name"
                        // tooltip="What do you want others to call you?"
                        rules={[
                            {
                                required: true,
                                message: "Please input your last name!",
                                whitespace: true,
                            },
                        ]}
                    >
                        <Input onChange={(e) => setLastName(e.target.value)} />
                        {/* <Form.Control onChange={e => setLastName(e.target.value)} /> */}
                    </Form.Item>

                    {/* <Form.Item
                            name="staffid"
                            label="Staff Id"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input Staff ID!",
                                },
                            ]}
                        >
                            <InputNumber
                                addonAfter={suffixSelector}
                                style={{
                                    width: "100%",
                                }}
                            />
                        </Form.Item> */}

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
                        {/* <InputNumber
                                // addonAfter={suffixSelector}
                                style={{
                                    width: "100%",
                                }}
                                // onChange={onChange}
                            /> */}
                        {/* <Form.Control onChange={e => setTeamId(e.target.value)} /> */}
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
                        {/* <Cascader options={residences} onChange={onRegionChange}/> */}

                        <Input onChange={(e) => setRegion(e.target.value)} />
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
                        <AutoComplete
                            options={websiteOptions}
                            onChange={onWebsiteChange}
                            placeholder="website"
                        >
                            <Input
                                onChange={(e) => setAddress(e.target.value)}
                            />
                        </AutoComplete>

                        {/* <Input onChange={e => setAddress(e.target.value)} /> */}
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
                            <Option value="other">Other</Option>
                        </Select>

                        {/* <Input onChange={e => setRole(e.target.value)} /> */}
                    </Form.Item>

                    <Form.Item
                        name="checking"
                        valuePropName="checked"
                        rules={[
                            {
                                validator: (_, value) =>
                                    value
                                        ? Promise.resolve()
                                        : Promise.reject(
                                              new Error(
                                                  "Should double check deatils"
                                              )
                                          ),
                            },
                        ]}
                        {...tailFormItemLayout}
                    >
                        <Checkbox>
                            I have check the <a href="">details</a>
                        </Checkbox>
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
