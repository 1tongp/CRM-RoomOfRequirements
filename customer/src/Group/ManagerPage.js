import { Table, Tag, Space, Button } from 'antd';
import "./Manager.css";
import Register from "./ManagerRegister";

function ManagerPage(Props){
    const { Column, ColumnGroup } = Table;
    const data = [
      {
        key: '1',
        firstName: 'John',
        lastName: 'Brown',
        phone: '0404343435',
        email: '123@hsbc.com',
        teamID: '5',
      },
      {
        key: '2',
        firstName: 'Jim',
        lastName: 'Green',
        phone: '0404343447',
        email: '124@hsbc.com',
        teamID: '3',
      },
      {
        key: '3',
        firstName: 'Joe',
        lastName: 'Black',
        phone: '0404343456',
        email: '125@hsbc.com',
        teamID: '4',
      },
    ];
    
    return(
      <>
      <Space size="small">
      <button className="register">Back</button>
      <Register className="register">Register</Register>
      </Space>
      {/* <div class="input-group rounded">
        <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search"
        aria-describedby="search-addon" />
        <span class="input-group-text border-0" id="search-addon">
          <i class="fas fa-search"></i>
        </span>
      </div> */}
      <Table className="info" dataSource={data}>
        <ColumnGroup title="Name">
          <Column title="First Name" dataIndex="firstName" key="firstName" />
          <Column title="Last Name" dataIndex="lastName" key="lastName" />
        </ColumnGroup>
        <Column title="Phone" dataIndex="phone" key="phone" />
        <Column title="Email" dataIndex="email" key="email" />
        <Column title="Team ID" dataIndex="teamID" key="teamID" />
        <Column title="Profile Page"
          key="profile"
          render={(text, record) => (
            <Space size="middle">
              <button type="button" class="btn btn-info">Profile</button>
              <button>Delete</button>
            </Space>
          )}
        />
      </Table>
      
      </>
    );
}


export default ManagerPage;