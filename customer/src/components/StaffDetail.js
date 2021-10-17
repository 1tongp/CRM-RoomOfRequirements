import React, { useState } from "react";
import { Modal, Button, Form, Input} from "antd";
import "./Customer.css";
import { useEffect } from "react";
import axios from "../API/axios.js";

function StaffDetail(props) {
    console.log(props)
    const [detail, setData] = useState([]);
    const [teamId, setTeamId] = useState(props.data.teamId);
    const [teamNum, setTeamNum] = useState(props.data.teamNumber);
    useEffect(() => {
        // axios.get(
        //         "/staff" +
        //             props.data._id
        //     )
        //     .then((response) => {
        //         if (response.data.success) {
        //             setData(response.data.staffDetail);
        //         }
        //     });

        axios.get('/team/' + teamNum).then(response => {
                console.log(response)
                setTeamId(response.data.team._id)
        });
    }, []);


    const onUpdate = () => {
        axios.post('/staff/changeTeam/'+ props.data.id, { teamId: teamId, teamNumber: teamNum}).then(response => {
            console.log("111");
            if (response.data.success) {
                console.log("success");
                console.log(response);
                alert("Team has been successfully Updated");
                // props.history.push('/customer', {
                //     staff: response.data.staff,
                //     vendors: vendors,
                //     position: [lat, lng]
                // });
                window.location.reload(false); 
            }                        
            else {
                alert("Fail: Error exist")
            }
        }).catch(error => {
            console.log(error.response)
            alert(error.response)
        })


    }
    console.log(detail)

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
            {/* <button type="button" class="btn btn-info" onClick={showModal}>
                Update
            </button> */}

            <Modal
                title="Details"
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                // footer={[
                //     <Button key="back" onClick={() => setVisible(false)}>
                //         Cancel
                //     </Button>,
                // ]}
            >
                {/* <p>{props.detailInfo}</p> */}
                <p>
                    Staff Name: {props.data.firstName} {props.data.lastName}
                </p>
                <p>Staff ID: {props.data.id}</p>

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
                            <Input onChange={e => setTeamNum(e.target.value)}/>
                            
                </Form.Item>
                <Form.Item {...tailFormItemLayout}>
                            <Button type="primary" htmlType="submit" onClick = {onUpdate}>
                                Update
                            </Button>
                </Form.Item>

            </Modal>
        </>
    );
}

export default StaffDetail;
