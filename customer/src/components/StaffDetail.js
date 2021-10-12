import React, { useState } from "react";
import { Modal, Button } from "antd";
import "./Customer.css";
import { useEffect } from "react";
import axios from "../API/axios.js";

function StaffDetail(props) {
    console.log(props)
    const [detail, setData] = useState([]);
    useEffect(() => {
        axios
            .get(
                "/staff" +
                    props.data._id
            )
            .then((response) => {
                if (response.data.success) {
                    setData(response.data.staffDetail);
                }
            });
    }, []);
    console.log(detail)

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
                Details
            </Button>
            <Modal
                title="Details"
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                {/* <p>{props.detailInfo}</p> */}
                <p>
                    Staff Name: {props.data.firstName} {props.data.lastName}
                </p>
                <p>Staff ID: {props.data.id}</p>
            </Modal>
        </>
    );
}

export default StaffDetail;
