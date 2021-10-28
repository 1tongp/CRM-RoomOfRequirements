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
                    console.log(response)
                    setData(response.data.orderDetail);
                }
            });
    }, []);

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
                <>
                    {(detail.length > 0) ? detail.map((single) => (
                        <>
                            <p>
                                Customer Name: {props.data.firstName} {props.data.lastName}
                            </p>
                            <p>Customer ID: {props.data.id}</p>
                            <p>Insurance Order ID: {single._id}</p>
                            <p>Insurance Type: {single.type}</p>
                            <p>Insurance Status: {single.status}</p>
                            <p>Purchase Time: {single.createTime}</p>
                            <p>Expire Date: {single.expireDate}</p>
                        </>

                    )) : <p>no information</p>}
                </>

            </Modal>
        </>
    );
}

export default CustomerDetail;
