import { Table, Tag, Space, Button, Input } from "antd";
import "./Manager.css";
import Register from "./ManagerRegister";
import StaffList from "../components/StaffList";
import { LeftOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const { Search } = Input;
function ManagerPage(props) {
    let history = useHistory();
    console.log(props);
    console.log(props.location.state.staff);

    const { Column, ColumnGroup } = Table;
    const data = [
        {
            key: "1",
            firstName: "John",
            lastName: "Brown",
            phone: "0404343435",
            email: "123@hsbc.com",
            teamID: "5",
        },
        {
            key: "2",
            firstName: "Jim",
            lastName: "Green",
            phone: "0404343447",
            email: "124@hsbc.com",
            teamID: "3",
        },
        {
            key: "3",
            firstName: "Joe",
            lastName: "Black",
            phone: "0404343456",
            email: "125@hsbc.com",
            teamID: "4",
        },
    ];
    var nameArray = [];
    for (let i = 0; i < data.length; i++) {
        nameArray.push(data[i].firstName);
        nameArray.push(data[i].lastName);
        nameArray.push(data[i].teamID.toString());
        nameArray.push(data[i].email.toString());
    }

    const [SearchTerm, setSearchTerm] = useState("");
    const searchHandler = (event) => {
        setSearchTerm(event.currentTarget.value);
    };

    var result = nameArray.filter((val) => {
        if (SearchTerm == "") {
            return val;
        } else if (val.toLowerCase().includes(SearchTerm.toLowerCase())) {
            return val;
        }
    });

    var filteredData = data.filter(function (el) {
        return (
            result.includes(el.firstName) ||
            result.includes(el.lastName) ||
            result.includes(el.teamID.toString()) ||
            result.includes(el.email.toString())
        );
    });

    return (
        <>
            <Space size="small">
                <Button size='large' className="register" onClick={history.goBack} icon={<LeftOutlined />} type='text'>
                    Back
                </Button>
                <Register data={props} className="register">
                    Register
                </Register>
            </Space>

            {/* <div>
                <Search
                    className="searchBar"
                    placeholder="input search text"
                    onChange={searchHandler}
                    value={SearchTerm}
                    icon={<SearchOutlined />}
                />
            </div>

            <Table className="info" dataSource={filteredData}>
                <ColumnGroup title="Name">
                    <Column
                        title="First Name"
                        dataIndex="firstName"
                        key="firstName"
                    />
                    <Column
                        title="Last Name"
                        dataIndex="lastName"
                        key="lastName"
                    />
                </ColumnGroup>
                <Column title="Phone" dataIndex="phone" key="phone" />
                <Column title="Email" dataIndex="email" key="email" />
                <Column title="Team ID" dataIndex="teamID" key="teamID" />
                <Column
                    title="Profile Page"
                    key="profile"
                    render={(text, record) => (
                        <Space size="middle">
                            <button type="button" class="btn btn-info">
                                Profile
                            </button>
                            <button>Delete</button>
                        </Space>
                    )}
                />
            </Table> */}
            <div>
                <StaffList data={props.location.state.staff} />
            </div>
            
        </>
    );
}

export default ManagerPage;
