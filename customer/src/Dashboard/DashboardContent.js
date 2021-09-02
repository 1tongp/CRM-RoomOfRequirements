import React from 'react'
import { Statistic, Card, Row, Col } from 'antd';
import {Chart, DemoBar} from './Chart';
import DashboardTable from './DashboardTable';



function DashboardContent() {
    return (
        <div>
            <h1>Dashboard</h1>
            <div>
                <p>Insurance Summary</p>
                <Row>
                    <Card>
                        <Statistic
                            title="Customer"
                            value={105}
                            valueStyle={{ color: "red" }}
                        />
                    </Card>
                    <Card>
                        <Statistic
                            title="Order"
                            value={105}
                            valueStyle={{ color: "blue" }}
                        />
                    </Card>
                    <Card>
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
                    </Card>
                </Row>
            </div>

            <div>
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
            </div>

            <div>
                <p>Staff Selling Ranking</p>
                <DemoBar />
                <p>Monthly trading volume</p>
                <Chart />

            </div>

            <div>
                <DashboardTable />
            </div>

            

        </div>
    )
}

export default DashboardContent
