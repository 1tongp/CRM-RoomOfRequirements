
import 'antd/dist/antd.css';
import React from 'react';
import { Table } from 'antd';
import SearchBar from './SearchBar';
import { Button } from 'antd';
import './Customer.css';
import CustomerDetail from './CustomerDetail';

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


// data
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
    details: <Button className='button'>Details</Button>,
  },
  {
    key: '3',
    firstName: 'Yitong',
    lastName: 'Pei',
    contactNumber: 123456789,
    email: 'example@gmail.com',
    insurance: 'Car',
    details: <Button className='button'>Details</Button>,
  },
  {
    key: '4',
    firstName: 'Xinyi',
    lastName: 'Ye',
    contactNumber: 123456789,
    email: 'example2@gmail.com',
    insurance: 'Travel',
    details: <Button className='button'>Details</Button>,
  },
];

function onChange(pagination, filters, sorter, extra) {
  console.log('params', pagination, filters, sorter, extra);
}




function CustomerList() {
  
	return (
		<div className='total'>
      <SearchBar className='searchBar'/>
      <Table className='table' columns={columns} dataSource={data} onChange={onChange} />
    </div>
	);
}
export default CustomerList;
