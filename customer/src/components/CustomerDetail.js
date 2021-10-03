import React, { useState } from "react";
import { Modal, Button } from "antd";
import "./Customer.css";
import { useEffect } from "react";
import axios from "../API/axios.js";

function CustomerDetail(props) {
    console.log(props)
    const [detail, setData] = useState([]);
    useEffect(() => {
        axios
            .get(
                "/order/customertype/" +
                    props.data.id +
                    "?type=" +
                    props.data.insurance
            )
            .then((response) => {
                if (response.data.success) {
                    setData(response.data.orderDetail[0]);
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
                    Customer Name: {props.data.firstName} {props.data.lastName}
                </p>
                <p>Customer ID: {props.data.id}</p>
                <p>Insurance Order ID: {detail._id}</p>
                <p>Insurance Type: {detail.type}</p>
                <p>Insurance Status: {detail.status}</p>
                <p>Purchase Time: {detail.createTime}</p>
                <p>Expire Date: {detail.expireDate}</p>
            </Modal>
        </>
    );
}

export default CustomerDetail;
