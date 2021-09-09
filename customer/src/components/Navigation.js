
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
    if(e.key === '2'){
        console.log("switch to customer");
        axios.get('/customer/list/' + this.props.data.location.state.staff.id).then(response =>{
            console.log(response);
            if(!response.data.success){
              this.props.data.history.push('/customer', {staff: this.props.data.location.state.staff, customers:[], key:'2'})
            }
            else{
              this.props.data.history.push('/customer', {staff: this.props.data.location.state.staff, customers: response.data.customers, key:'2'});
            }
          })
    }
    if(e.key === "1"){
      console.log("switch to dashboard");
      console.log(this.props);
      // axios needs implement later after finishing the front-end of the dashboard
      axios.post('/staff/login/unhash', { loginEmail: this.props.data.location.state.staff.loginEmail , password: this.props.data.location.state.staff.password }).then(response =>{
        console.log(response);
        if(!response.data.success){
          this.props.data.history.push('/dashboard', {staff: response.data.staff, key:'1'})
        }
        else{
          this.props.data.history.push('/dashboard', {staff: response.data.staff, key:'1'});
        }
      })
    }
    if(e.key === "5"){
      console.log("switch to Profile");
      console.log(this.props);
      // axios needs implement later after finishing the back-end of the Caldenlar
      this.props.data.history.push('/ProfileShow', {staff: this.props.data.location.state.staff, key: '5'});
    }
    if(e.key === "4"){
      console.log("switch to calendar");
      console.log(this.props);
      // axios needs implement later after finishing the back-end of the Caldenlar
      this.props.data.history.push('/calendar', {staff: this.props.data.location.state.staff, key: '4'});
    }
    if(e.key === "3"){
      console.log("switch to group and chat");
      console.log(this.props);
      this.props.data.history.push('/group', {staff: this.props.data.location.state.staff, key: '3'});

    }
  };

  onLogOut = () =>{
    console.log("log out");
    console.log(this.props);
    this.props.data.history.push('../');
  }


  render() {
    return (

      <Menu 
        onClick={this.handleClick}
        className='menu'
        // selectedKeys={[this.props.data.location.state.key]}
        mode="inline"
      >
        <img className='logo' src={'../logo.jpg'} alt="logo image"></img>
        <Menu.Item className='menu-item' key="1" icon={<DashboardOutlined />}>Dashboard</Menu.Item>
        <Menu.Item className='menu-item' key="2" icon={<MenuOutlined />}>Customers</Menu.Item>
        <Menu.Item className='menu-item' key="3" icon={<TeamOutlined />}>Group</Menu.Item>
        <Menu.Item className='menu-item' key="4" icon={<CalendarOutlined />}>Calender</Menu.Item>
        <Menu.Item className='menu-item' key="5" icon={<UserOutlined />}>Profile</Menu.Item>
        
        <Button className='logout' onClick={() => this.onLogOut()} icon={<LogoutOutlined/>}></Button>
      </Menu>
    );
  }
}

export default Navigation;