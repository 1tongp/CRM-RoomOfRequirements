import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import './Customer.css';
import { useEffect } from 'react';
import axios from '../API/axios.js';

function CustomerDetail (props){
  // console.log(props);

  const [detail, setData] = useState([])
    useEffect(
        () => {
            axios.get('/order/customertype/' + props.data.id + '?type=' + props.data.insurance).then(response => {
                if (response.data.success) {
                    setData(response.data.orderDetail[0])
                    
                }
            })
			
        }, [])

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
  // console.log(props.detailInfo.length);
  // var customerList = [];
  // for (let i = 0; i < props.detailInfo.length; i++){
  //   customerList.push(props.detailInfo[i]);
  // }
  

  // console.log(customerList);
  

  return (
    <>
      <Button className='button' onClick={showModal}>
        Details
      </Button>
      <Modal title="DETAILS" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        {/* <p>{props.detailInfo}</p> */}
        <p>Customer Name: {props.data.firstName} {props.data.lastName}</p>
        <p>Customer ID: {props.data.id}</p>
        <p>Insurance Order ID: {detail._id}</p>
        <p>Insurance Type: {detail.type}</p>
        <p>Insurance Status: {detail.status}</p>
        <p>Purchase Time: {detail.createTime}</p>
        <p>Expire Date: {detail.expireDate}</p>
        <p>Order Details: {detail.detail}</p>

      </Modal>
    </>
  );
};

export default CustomerDetail