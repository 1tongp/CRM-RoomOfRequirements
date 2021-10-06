import React from 'react';
import { Line } from '@ant-design/charts';
import { Bar } from '@ant-design/charts';
import {useState, useEffect} from 'react';
import axios from '../API/axios.js';

export function Chart(props) {
  console.log(props)

  const [orders, setOrders] = useState([])
  useEffect(() =>{
        
    axios.get('/order/' + props.data.data.location.state.staff.id).then(response => {
        console.log(props);
        console.log(response);
        if (response.data.success) {
            setOrders(response.data.orders)
        }   
    })
  }, [])

  const data = [
    { month: '01', value: 0 },
    { month: '02', value: 0 },
    { month: '03', value: 0 },
    { month: '04', value: 0 },
    { month: '05', value: 0 },
    { month: '06', value: 0 },
    { month: '07', value: 0 },
    { month: '08', value: 0 },
    { month: '09', value: 0 },
    { month: '10', value: 0 },
    { month: '11', value: 0 },
    { month: '12', value: 0 },
  ];

  for(let i = 0; i < orders.length; i++){
    for(let j = 0; j < 12; j++){
      if(orders[i].createTime.slice(5,7) == data[j].month){
        data[j].value += 1
      }
    }
  }

  const config = {
    data,
    height: 400,
    xField: 'month',
    yField: 'value',
    point: {
      size: 5,
      shape: 'diamond',
    },
    label: {
      style: {
        fill: '#aaa',
      },
    },
  };
  return <Line {...config} />;
};


export function DemoBar(props) {
  console.log(props)

  const [members, setMembers] = useState([])
  useEffect(() =>{
        
    axios.get('/staff/member/' + props.data.data.location.state.staff.team).then(response => {
        console.log(props);
        console.log(response);
        if (response.data.success) {
            setMembers(response.data.members)
        }   
    })

  }, [])
  console.log(members)
  var config = {
    data: members,
    xField: 'orderNum',
    yField: 'givenName',
    seriesField: 'givenName',
    legend: { position: 'top-left' },
  };
  return <Bar {...config} />;
};