
import { Button, Menu } from 'antd';
// icons used
import { LogoutOutlined, TagsOutlined, DashboardOutlined, CalendarOutlined, MenuOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons';
import React from 'react';
import axios from '../API/axios.js';
import './Navigation.css';

// const { SubMenu } = Menu;

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  };

  handleClick = e => {
    console.log('click ', e);
    // if(e.key === '2'){
    //     console.log("yes");
    //     axios.get('/customer/list/' + this.props.data.location.state.staff.id).then(response =>{
    //         console.log(response);
    //         if(!response.data.success){
    //           this.props.data.history.push('/customer', {staff: this.props.data.location.state.staff, customers:[], key:'2'})
    //         }
    //         else{
    //           this.props.data.history.push('/customer', {vendor: this.props.data.location.state.vendor, orders: response.data.orders, key:'2'});
    //         }
    //       })
    // }
  };


  render() {
    return (

      <Menu
        onClick={this.handleClick}
        className='menu'
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
      >
        <img className='logo' src={'../logo.jpg'} alt="logo image"></img>
        <Menu.Item className='menu-item' key="1" icon={<DashboardOutlined />}>Dashboard</Menu.Item>
        <Menu.Item className='menu-item' key="2" icon={<MenuOutlined />}>Customers</Menu.Item>
        <Menu.Item className='menu-item' key="3" icon={<TagsOutlined />}>Products</Menu.Item>
        <Menu.Item className='menu-item' key="4" icon={<TeamOutlined />}>Group</Menu.Item>
        <Menu.Item className='menu-item' key="5" icon={<CalendarOutlined />}>Calender</Menu.Item>
        <Menu.Item className='menu-item' key="6" icon={<UserOutlined />}>Profile</Menu.Item>
        
        <Button className='logout' icon={<LogoutOutlined/>}></Button>
      </Menu>

    );
  }
}

export default Navigation;