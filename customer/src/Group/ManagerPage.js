import { Space, Button} from "antd";
import "./Manager.css";
import Register from "./ManagerRegister";
import StaffList from "../components/StaffList";
import { LeftOutlined } from "@ant-design/icons";
import React from "react";
import { useHistory } from "react-router-dom";

function ManagerPage(props) {
    let history = useHistory();
    console.log(props);
    console.log(props.location.state.staff);
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
            <div>
                <StaffList data={props.location.state.staff} />
            </div>
            
        </>
    );
}

export default ManagerPage;
