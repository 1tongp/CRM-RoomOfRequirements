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
      }, [])





    return (
        <div className='dashboardContainer'>
            <div>
                <h3>Dashboard</h3>
                <br />
                <br />
                {/* resize */}
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
                    
                </Row>
                <br />
                <br />
                <br />
                <br />
                <br />

                <p>Staff Selling Ranking</p>
                <DemoBar data={props}></DemoBar>
            </div>
            <div >
                <div className='brDiv'/>

                <p>Monthly trading volume</p>
                <Chart className='chart' data = {props}/>
             
                {/* <DashboardTable data={props} numCus = {numCustomer}/> */}
            </div>

            

        </div>
    )
}

export default DashboardContent
