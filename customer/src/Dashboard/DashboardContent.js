import React from 'react'
import { Statistic, Card, Row, Col } from 'antd';
import {Chart, DemoBar} from './Chart';
import DashboardTable from './DashboardTable';
import './DashboardContent.css';
import axios from '../API/axios.js';
import {useState, useEffect} from 'react';

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
      })





    return (
        <div className='dashboardContainer'>
            <div>
                <h3>Dashboard</h3>
            
                <p>Insurance Summary</p>
                <Row>
                    <Card>
                        <Statistic
                            title="Customer"
                            value={numCustomer}
                            valueStyle={{ color: "red" }}
                        />
                    </Card>
                    <Card>
                        <Statistic
                            title="Order"
                            value={numOrder}
                            valueStyle={{ color: "blue" }}
                        />
                    </Card>
                    {/* <Card>
                        <Statistic
                            title="Total Payment"
                            value={310000}
                            valueStyle={{ color: "green" }}
                        />
                    </Card>
                    <Card>
                        <Statistic
                            title="type of products"
                            value={32}
                            valueStyle={{ color: "yellow" }}
                        />
                    </Card> */}
                </Row>
                <br />
                <p>Customer Contact</p>
                    <Row>
                        <Card>
                            <Statistic
                                title="Visiting Record"
                                value={108}
                                valueStyle={{ color: "red" }}
                            />
                        </Card>
                        <Card>
                            <Statistic
                                title="Ongoing contact"
                                value={21}
                                valueStyle={{ color: "blue" }}
                            />
                        </Card>
                    </Row>
                <br />

                <p>Staff Selling Ranking</p>
                <DemoBar />
            </div>
            <div>
                <p>Monthly trading volume</p>
                <Chart />
                <br />
                <br />
                <br />
                <br />
                <DashboardTable data={props} numCus = {numCustomer}/>
            </div>

            

        </div>
    )
}

export default DashboardContent
