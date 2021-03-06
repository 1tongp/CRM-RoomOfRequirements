import React, { useState } from "react";
import { Modal, Button, Form, Input} from "antd";
import "./Customer.css";
import { useEffect } from "react";
import axios from "../API/axios.js";

function StaffDetail(props) {
    console.log(props)
    const [teamId, setTeamId] = useState('');
    const [teamNum, setTeamNum] = useState(1);

    useEffect(() => {
        axios.get('/team/' + teamNum).then(response => {
                console.log(response.data.team._id)
                setTeamId(response.data.team._id)
        })
    }, [teamId,teamNum]);


    const onUpdate = () => {
        console.log(teamId);
        console.log(teamNum);
        axios.post('/staff/changeInfo/'+ props.data.id, {teamNumber: teamNum, team: teamId }).then(response => {
            console.log("111");
            console.log(response.data.success);
            alert("Team has been successfully Updated");
            window.location.reload(false); 
            if (response.data.success) {
                console.log(response.data.change.team);
                alert("Team has been successfully Updated");
                window.location.reload(false); 
            }                        
            else {
                alert("Fail: Error exist")
            }
        }).catch(error => {
            // console.log(error.response)
            // alert(error.response)
        })
    }

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

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <>
            <Button className="detailButton" onClick={showModal}>
                Update
            </Button>

            <Modal
                title="Details"
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <p>
                    Staff Name: {props.data.firstName} {props.data.lastName}
                </p>
                <p>Staff ID: {props.data.id}</p>
                <Form>
                <Form.Item
                            name="teamNum"
                            label="Team Number"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input the Team ID!",
                                },
                            ]}
                        >
                            <Input onChange={e => setTeamNum(e.target.value)}/>
                            
                </Form.Item>
                <Form.Item {...tailFormItemLayout}>
                            <Button type="primary" htmlType="submit" onClick = {onUpdate}>
                                Update
                            </Button>
                </Form.Item>
                </Form>

            </Modal>
        </>
    );
}

export default StaffDetail;
