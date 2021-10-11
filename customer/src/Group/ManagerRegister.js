import PropTypes from "prop-types";
import "./Manager.css";
import React, { useState } from "react";
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
    const [loading, setLoading] = useState(false);
    const [visible, setVisible] = useState(false);
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

    return (
        <>
            <button
                className="register"
                type="button"
                variant="primary"
                onClick={() => setVisible(true)}
            >
                Register
            </button>
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
                            <Input />
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
                            <Input.Password />
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
                            <Input.Password />
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
                            <Input />
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
                            <Input />
                        </Form.Item>

                        <Form.Item
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
                        </Form.Item>

                        <Form.Item
                            name="teamid"
                            label="Team ID"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input the Team ID!",
                                },
                            ]}
                        >
                            <InputNumber
                                addonAfter={suffixSelector}
                                style={{
                                    width: "100%",
                                }}
                            />
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
                                addonBefore={prefixSelector}
                                style={{
                                    width: "100%",
                                }}
                            />
                        </Form.Item>

                        <Form.Item
                            name="region"
                            label="Region"
                            rules={[
                                {
                                    type: "array",
                                    required: true,
                                    message: "Please select the region!",
                                },
                            ]}
                        >
                            <Cascader options={residences} />
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
                                <Input />
                            </AutoComplete>
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
                            <Select placeholder="Select the role for the staff">
                                <Option value="member">Member</Option>
                                <Option value="teamleader">Team Leader</Option>
                                <Option value="other">Other</Option>
                            </Select>
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
                            <Button type="primary" htmlType="submit">
                                Register
                            </Button>
                        </Form.Item>
                    </Form>
                </Modal>
        </>
    );
}

export default Register;
