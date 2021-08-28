
import { Menu } from 'antd';
// icons used
import {TagsOutlined, DashboardOutlined, CalendarOutlined, MenuOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons';
import React from 'react';
import axios from '../API/axios.js';
// const { SubMenu } = Menu;

class Navigation extends React.Component {
  constructor(props){
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
        style={{ width: 256, height: '100vh' }}
        
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
      >

        <Menu.Item key="1" icon={<DashboardOutlined />}>Dashboard</Menu.Item>
        <Menu.Item key="2" icon={<MenuOutlined />}>Customers</Menu.Item>
        <Menu.Item key="3" icon={<TagsOutlined />}>Products</Menu.Item>
        <Menu.Item key="4" icon={<TeamOutlined />}>Group</Menu.Item>
        <Menu.Item key="5" icon={<CalendarOutlined />}>Calender</Menu.Item>
        <Menu.Item key="6" icon={<UserOutlined />}>Profile</Menu.Item>

        {/* <SubMenu key="sub1" icon={<MailOutlined />} title="Dashboard"> */}
          {/* <Menu.ItemGroup key="g1" title="Item 1">
            <Menu.Item key="1">Option 1</Menu.Item>
            <Menu.Item key="2">Option 2</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup key="g2" title="Item 2">
            <Menu.Item key="3">Option 3</Menu.Item>
            <Menu.Item key="4">Option 4</Menu.Item>
          </Menu.ItemGroup> */}
        {/* </SubMenu> */}
        {/* <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Customers"> */}
          {/* <Menu.Item key="5">Option 5</Menu.Item>
          <Menu.Item key="6">Option 6</Menu.Item>
          <SubMenu key="sub3" title="Submenu">
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
          </SubMenu> */}
        {/* </SubMenu> */}

      </Menu>
    );
  }
}

export default Navigation;