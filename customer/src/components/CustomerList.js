
import 'antd/dist/antd.css';
import React, { useState }from 'react';
import { Table } from 'antd';
// import SearchBar from './SearchBar';
import { Button, Input } from 'antd';
import './Customer.css';
import CustomerDetail from './CustomerDetail';
import { useEffect } from 'react';
import axios from '../API/axios.js';
import singleCustomer from '../Customer/singleCustomer';
import { SearchOutlined } from '@ant-design/icons';


const { Search } = Input;
function CustomerList(props) {
	console.log(props);
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
			filters: [
				{
				  	text: 'Car',
				  	value: 'Car',
				},
				{
				  	text: 'Landlord',
				  	value: 'Landlord',
				},
				{
					text: 'Home',
					value: 'Home',
				},
				{
					text: 'Travel',
					value: 'Travel',
				},
			  ],
			  onFilter: (value, record) => record.insurance.indexOf(value) === 0,
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
			insurance: 'Landlord',
			details: <CustomerDetail className='button' detailInfo="this is the first one">Details</CustomerDetail>,
		},
		{
			key: '2',
			firstName: 'Xinlin',
			lastName: 'Li',
			contactNumber: 123456789,
			email: 'coco2@gmail.com',
			insurance: 'Car',
			details: <CustomerDetail className='button' detailInfo={props.data.location.state.customers}>Details</CustomerDetail>,
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

	// search functionality
  	var nameArray = [];
	for (let i=0; i <data.length; i++){
        nameArray.push(data[i].firstName);
		nameArray.push(data[i].lastName);
		nameArray.push(data[i].contactNumber.toString());
		nameArray.push(data[i].email);
    }
	// console.log(nameArray);
	function onChange(pagination, filters, sorter, extra) {
		console.log('params', pagination, filters, sorter, extra);
	}
	
	const [SearchTerm, setSearchTerm] = useState('');
	const searchHandler = (event) => {
        setSearchTerm(event.currentTarget.value);
    };

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



	var result = nameArray.filter((val) => {
		if (SearchTerm == '') {
			return val
		}else if (val.toLowerCase().includes(SearchTerm.toLowerCase())) {
			return val
		}
	})

	var filteredData = data.filter(function (el) {
		return result.includes(el.firstName)||result.includes(el.lastName)||
		result.includes(el.contactNumber.toString())||result.includes(el.email);
	});

	return (
		<div className='total'>
			<div>
				<h2>Customer List</h2>
				<Search
					className='searchBar'
					placeholder="input search text"
					onChange={searchHandler}
					value={SearchTerm}
					icon={<SearchOutlined />}
				/>
			</div>
			<div>
				<Table className='table' columns={columns} dataSource={filteredData} onChange={onChange} />
        {
        (props.data.location.state.customers.length > 0) ? 
        props.data.location.state.customers.map((singleCus) => (
          <singleCustomer>{JSON.stringify(singleCus)}</singleCustomer>
        ))
        : <p>no customer</p>
      }
			</div>

		</div>
  	);
}
export default CustomerList;
