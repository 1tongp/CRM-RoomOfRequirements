import React, { useState } from "react";
import { Button, Modal, Form, Input, Select, DatePicker } from "antd";

const CustomerAddHistoryForm = ({ visible, onCreate, onCancel }) => {
    const [form] = Form.useForm();
    const { Option } = Select;
    function onChange(date, dateString) {
        console.log(date, dateString);
    }
    return (
        <Modal
            visible={visible}
            title="Add History"
            okText="Add"
            cancelText="Cancel"
            onCancel={onCancel}
            onOk={() => {
                form.validateFields()
                    .then((values) => {
                        form.resetFields();
                        onCreate(values);
                    })
                    .catch((info) => {
                        console.log("Validate Failed:", info);
                    });
            }}
        >
            <Form form={form} layout="vertical" name="form_in_modal">
                <Form.Item
                    name="insuranceType"
                    label="Insurance"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Select
                        placeholder="Select the insurance type"
                        // onChange={onGenderChange}
                        allowClear
                    >
                        <Option value="Car">Car</Option>
                        <Option value="Landlord">Landlord</Option>
                        <Option value="Home">Home</Option>
                        <Option value="Travel">Travel</Option>
                    </Select>
                </Form.Item>

                {/* staff input */}
                <Form.Item
                    name="staff"
                    label="Staff"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="date"
                    label="Date"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <DatePicker onChange={onChange} />
                </Form.Item>

                {/* note input */}
                <Form.Item
                    name="note"
                    label="Note"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
            </Form>
        </Modal>
    );
};
// onTrigger = (event) => {
//     this.props.parentCallback(event);
//     event.preventDefault();
// }
const AddHistoryPage = (props) => {
    const [visible, setVisible] = useState(false);

    const onCreate = (values) => {
        // console.log("Received values of form: ", values);
        props.parentCallback(values);
        setVisible(false);
    };

    return (
        <div>
            <Button
                type="primary"
                onClick={() => {
                    setVisible(true);
                }}
            >
                Add History
            </Button>
            <CustomerAddHistoryForm
                visible={visible}
                onCreate={onCreate}
                onCancel={() => {
                    setVisible(false);
                }}
            />
        </div>
    );
};

export default AddHistoryPage;
