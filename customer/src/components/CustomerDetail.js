import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import './Customer.css';
const CustomerDetail = (props) => {
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
  console.log(props.detailInfo.length);
  var customerList = [];
  for (let i = 0; i < props.detailInfo.length; i++){
    customerList.push(props.detailInfo[i]);
  }
  

  console.log(customerList);


  return (
    <>
      <Button className='button' onClick={showModal}>
        Details
      </Button>
      <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        {/* <p>{props.detailInfo}</p> */}
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};

export default CustomerDetail