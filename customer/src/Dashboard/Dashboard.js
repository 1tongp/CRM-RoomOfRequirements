import axios from '../API/axios';
import Navigation from '../components/Navigation';
import CustomerList from '../components/CustomerList';
import '../components/component.css'
import React , {Component} from "react";

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
                <div className='customerList'>
                    <p>dashboard</p>
                </div>


            </div>
        );
    }
}

export default Dashboard;