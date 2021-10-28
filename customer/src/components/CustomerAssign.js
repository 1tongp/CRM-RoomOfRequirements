import React, { useState } from "react";
import { Modal, Button } from "antd";
import "./Customer.css";
import axios from "../API/axios.js";

function CustomerAssign(props) {
    console.log(props);

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const onAssign = () => {
        setIsModalVisible(false);
        axios
            .post("/customer/update/" + props.data.id, { staff: props.staff })
            .then((response) => {
                console.log(response);
                if (response.data.success) {
                    console.log("yes");
                    axios.post("/staff/number/" + props.staff, { orderNum: props.staffDetails.orderNum + 1 })
                        .then((response) => {
                            console.log(response);
                            if (response.data.success) {
                                alert("Assigned Successfully");
                                window.location.reload(false);
                            }
                        })
                } else {
                    alert("Failed to assign");
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <>
            <Button className="detailButton" onClick={showModal}>
                Assign
            </Button>
            <Modal
                title="ASSIGN"
                visible={isModalVisible}
                onOk={onAssign}
                onCancel={handleCancel}
            >
                <p>Are you sure to assign this customer?</p>
            </Modal>
        </>
    );
}

export default CustomerAssign;
