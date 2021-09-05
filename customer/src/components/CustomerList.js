
import 'antd/dist/antd.css';
import React from 'react';
import { Table } from 'antd';
import SearchBar from './SearchBar';
import { Button } from 'antd';
import './Customer.css';
import CustomerDetail from './CustomerDetail';
import { useState, useEffect } from 'react';
import axios from '../API/axios.js';
import singleCustomer from '../Customer/singleCustomer';

function CustomerList(props) {
  console.log(props);


  const [customers, setCus] = useState(...[]);
  const [numCustomers, setNum] = useState(0);

  const columns = [
    {
      title: 'First Name',
      dataIndex: 'firstName',
      sorter: (a, b) => a.firstName.localeCompare(b.firstName),
      sortDirections: ['descend'],
    },
    {
      title: 'Last Name',
      dataIndex: 'lastName',
      sorter: (a, b) => a.lastName.localeCompare(b.lastName),
      sortDirections: ['descend'],
    },
    {
      title: 'Contact Number',
      dataIndex: 'contactNumber',
    },
    {
      title: 'Email Address',
      dataIndex: 'email',
    },
    {
      title: 'Insurance Type',
      dataIndex: 'insurance',
    },
    {
      title: 'Details',
      dataIndex: 'details',
    },
  ];


  const data = [
    
    
    {
      key: '1',
      firstName: 'Xiaochen',
      lastName: 'Hou',
      contactNumber: 123456789,
      email: 'xihou@student.unimelb.edu.au',
      insurance: 'Landloard',
      details: <CustomerDetail className='button'>Details</CustomerDetail>,
    },
    {
      key: '2',
      firstName: 'Xinlin',
      lastName: 'Li',
      contactNumber: 123456789,
      email: 'coco2@gmail.com',
      insurance: 'Car',
      details: <CustomerDetail className='button'>Details</CustomerDetail>,
    },
    {
      key: '3',
      firstName: 'Yitong',
      lastName: 'Pei',
      contactNumber: 123456789,
      email: 'example@gmail.com',
      insurance: 'Car',
      details: <CustomerDetail className='button'>Details</CustomerDetail>,
    },
    {
      key: '4',
      firstName: 'Xinyi',
      lastName: 'Ye',
      contactNumber: 123456789,
      email: 'example2@gmail.com',
      insurance: 'Travel',
      details: <CustomerDetail className='button'>Details</CustomerDetail>,
    },
  ];

  function onChange(pagination, filters, sorter, extra) {
    console.log('params', pagination, filters, sorter, extra);
  }

  // useEffect(() => {

  //   axios.get('/customer/list/' + props.data.location.state.staff.id).then(response => {
  //     console.log(props);
  //     console.log(response);
  //     if (response.data.success) {
  //       setCus(response.data.customers);
  //     }
  //   })

  //   axios.get('/customer/number/' + props.data.location.state.staff.id).then(response => {
  //     console.log(props);
  //     console.log(response);
  //     if (response.data.success) {
  //       setNum(response.data.numCustomers);
  //     }
  //   })
  // })

  

  return (
    <div className='total'>
      <SearchBar className='searchBar' />
      <Table className='table' columns={columns} dataSource={data} onChange={onChange} />
      {
        (props.data.location.state.customers.length > 0) ? 
        props.data.location.state.customers.map((singleCus) => (
          <singleCustomer>{JSON.stringify(singleCus)}</singleCustomer>
        ))
        : <p>no customer</p>
      }
    </div>
  );
}
export default CustomerList;

