// import axios from '../API/axios';
import Navigation from '../components/Navigation';
import '../components/component.css'
import React from "react";

import 'antd/dist/antd.css';
import DashboardContent from './DashboardContent';


class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props)
    }

    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        return (
            <div className='div'>
                <div className='navigationBar'>
                    <Navigation data={this.props}></Navigation>
                </div>
                <div className='dashboardContent'>
                    <DashboardContent data={this.props}></DashboardContent>
                </div>
            </div>
        );
    }
}

export default Dashboard;