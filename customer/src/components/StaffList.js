import "antd/dist/antd.css";
import React, { useState } from "react";
import { Table, Input, Spin } from "antd";
import "./Customer.css";
import { useEffect } from "react";
import axios from "../API/axios.js";
import { SearchOutlined } from "@ant-design/icons";
import StaffDetail from "./StaffDetail";

const { Search } = Input;
function StaffList(props) {
    console.log(props);

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get("/staff?role=Staff")
            .then((response) => {
                if (response.data.success) {
                    console.log(response);
                    setData(response.data.staff);
                    setLoading(false);
                }
            });
    }, []);

    const columns = [
        {
            title: "First Name",
            dataIndex: "firstName",
            sorter: (a, b) => a.firstName.localeCompare(b.firstName),
            sortDirections: ["descend"],
        },
        {
            title: "Last Name",
            dataIndex: "lastName",
            sorter: (a, b) => a.lastName.localeCompare(b.lastName),
            sortDirections: ["descend"],
        },
        {
            title: "Contact Number",
            dataIndex: "contactNumber",
        },
        {
            title: "Email Address",
            dataIndex: "email",
        },
        {
            title: "Team Number",
            dataIndex: "teamNumber",
        },
        {
            title: "Region",
            dataIndex: "region",
            filters: [
                {
                    text: "Box Hill",
                    value: "Box Hill",
                },
                {
                    text: "Carlton",
                    value: "Carlton",
                },
                {
                    text: "Caulfield",
                    value: "Caulfield",
                },
                {
                    text: "Glen Waverley",
                    value: "Glen Waverley",
                },
                {
                    text: "Melbourne",
                    value: "Melbourne",
                },
            ],
            onFilter: (value, record) => record.region.indexOf(value) === 0,
        },
        
        {
            title: "Update Team",
            dataIndex: "update",
        },

    ];

  
    

    console.log(data)
    for (let i = 0; i < data.length; i++) {
        if (data[i].update.length == 0) {
            data[i].update.push(
                <StaffDetail
                    className="button"
                    data={data[i]}
                ></StaffDetail>
            );
        }
    }
    console.log(data)

    // search functionality
    var nameArray = [];
    for (let i = 0; i < data.length; i++) {
        nameArray.push(data[i].firstName);
        nameArray.push(data[i].lastName);
        nameArray.push(data[i].contactNumber.toString());
        nameArray.push(data[i].email.toString());
    }

    function onChange(pagination, filters, sorter, extra) {
        console.log("params", pagination, filters, sorter, extra);
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
            result.includes(el.contactNumber.toString()) ||
            result.includes(el.email.toString())
        );
    });

 
    return (
        <>
            <div className="total2">
                <div>
                    <h2>Staff</h2>
                    <Search
                        className="searchBar"
                        placeholder="Name/Contact Number/Email"
                        onChange={searchHandler}
                        value={SearchTerm}
                        icon={<SearchOutlined />}
                    />
                </div>
                <div>
                    <p>Current Staffs</p>
                    <Table
                        size="middle"
                        className="table"
                        columns={columns}
                        dataSource={filteredData}
                        onChange={onChange}
                        loading={{
                            indicator: <Spin size="large" />,
                            spinning: loading,
                        }}
                    />
                </div>

            </div>
        </>
    );
}
export default StaffList;
