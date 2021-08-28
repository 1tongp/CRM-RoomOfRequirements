import axios from '../API/axios';
import { Menu } from 'antd';
// icons used
import {TagsOutlined, DashboardOutlined, CalendarOutlined, MenuOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons';
import React from 'react';

// const { SubMenu } = Menu;

class Navigation extends React.Component {
  handleClick = e => {
    console.log('click ', e);
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