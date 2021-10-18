import React from 'react'
import { Statistic, Card, Row, Col } from 'antd';
import {Chart, DemoBar} from './Chart';
import DashboardTable from './DashboardTable';
import './DashboardContent.css';
import axios from '../API/axios.js';
import {useState, useEffect} from 'react';
import { DivOverlay } from 'leaflet';

import home from '../pictures/home.jpeg';
import car from '../pictures/car.jpeg';
import landlord from '../pictures/landlord.jpeg';
import customer from '../pictures/customer.jpeg';
import order from '../pictures/order.png';

const { Meta } = Card;

function DashboardContent(props) {

    console.log(props);
    console.log("content");

    // get all customers for a particular staff
    const [numCustomer, setCus] = useState(0);
    const [numOrder, setOrd] = useState(0);


    useEffect(() =>{
        
        axios.get('/customer/list/' + props.data.location.state.staff.id).then(response => {
            console.log(props);
            console.log(response);
            if (response.data.success) {
                setCus(response.data.customers.length)
            }   
        })

        axios.get('/order/' + props.data.location.state.staff.id).then(response => {
            console.log(props);
            console.log(response);
            if (response.data.success) {
                setOrd(response.data.orders.length)
            }
            
        })
      }, [])

    return (
        <div className='dashboardContainer'>
            <div>
                <span className="Title">
                    Dashboard
                </span>
                <br />
                <br />
                {/* resize */}
                <h4>Insurance Summary</h4>

                {/*
                <span className="Title">
                    Insurance Summary
                </span>
                */}
                <Row className='cardrow'>
                    <Card className='card1'
                    style={{ width: 200, marginRight: 16 }}
                    cover={
                    <img
                        alt="example"
                        src={customer}
                    />
                    }>
                        <Statistic
                            title="Customer"
                            value={numCustomer}
                            valueStyle={{ color: "red" }}
                        />
                    </Card>

                    <Card
                    style={{ width: 200, marginRight: 16 }}
                    cover={
                        <img
                            alt="example"
                            src={order}
                        />
                        }>
                        <Statistic
                            title="Order"
                            value={numOrder}
                            valueStyle={{ color: "blue" }}
                        />
                    </Card>
                    
                </Row>
                <br />
                <br />

                <h4>Staff Selling Ranking</h4>
                <div className='rankingchart'>
                    <DemoBar data={props}></DemoBar>
                </div>

            </div>

            <div className='rightdash'>
                <h4>Main Insurances</h4>
                <div className='brDiv'>
                <Card 
                style={{ height: 300, marginRight: 12 }}
                    cover={
                    <img
                        alt="example"
                        src={home}
                        height='110'
                    />
                    }>
                <Meta
                    title={<a href="https://www.hsbc.com.au/insurance/products/home/">Home Insurance</a>}
                    description="Insure your house, your belongings inside it, or your portable contents."
                />
                </Card>

                <Card 
                // title="Inner Card title" extra={<a href="https://www.hsbc.com.au/insurance/products/landlord/">More</a>}
                style={{ height: 300, marginRight: 12 }}
                    cover={
                    <img
                        alt="example"
                        src={landlord}
                        height='110'
                    />
                    }>
    
                <Meta
                    title={<a href="https://www.hsbc.com.au/insurance/products/landlord/">Landlord Insurance</a>}
                    description="A residential investment property needs to be appropriately protected."
                />

                </Card>

                <Card 
                style={{ height: 300, marginRight: 12 }}
                    cover={
                    <img
                        alt="example"
                        src={car}
                        height='110'
                    />
                    }>
                <Meta
                    title={<a href="https://www.hsbc.com.au/insurance/products/car/">Car Insurance</a>}
                    description="Whether you need Comprehensive Cover or Third Party Property Damage"
                />
                </Card> 
                </div>
                <br />
                <br />

                <h4>Monthly trading volume</h4>
                <div className='trading'>
            
                    <Chart className='chart' data = {props}/>
                
                    {/* <DashboardTable data={props} numCus = {numCustomer}/> */}
                </div> 
            </div>         
        </div>      
    )
}

export default DashboardContent
