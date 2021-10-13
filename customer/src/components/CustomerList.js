import "antd/dist/antd.css";
import React, { useState } from "react";
import { Table, Input, Spin } from "antd";
import "./Customer.css";
import CustomerDetail from "./CustomerDetail";
import CustomerAssign from "./CustomerAssign";
import { useEffect } from "react";
import axios from "../API/axios.js";
import { SearchOutlined } from "@ant-design/icons";
import CustomerHistory from "./CustomerHistory";

const { Search } = Input;
function CustomerList(props) {
    console.log(props);

    const [data, setData] = useState([]);
    const [data2, setData2] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get("/customer/show/" + props.data.location.state.staff.id)
            .then((response) => {
                if (response.data.success) {
                    console.log(response);
                    setData(response.data.customerList);
                    setLoading(false);
                }
            });

        axios.get("/customer/nostaff/" + null).then((response) => {
            if (response.data.success) {
                setData2(response.data.customers);
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
            title: "Insurance Type",
            dataIndex: "insurance",
            filters: [
                {
                    text: "Car",
                    value: "Car",
                },
                {
                    text: "Landlord",
                    value: "Landlord",
                },
                {
                    text: "Home",
                    value: "Home",
                },
                {
                    text: "Travel",
                    value: "Travel",
                },
            ],
            onFilter: (value, record) => record.insurance.indexOf(value) === 0,
        },
        {
            title: "Details",
            dataIndex: "details",
        },
        {
            title: "History",
            dataIndex: "history",
        },
    ];

    const columns2 = [
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
            title: "Insurance Type",
            dataIndex: "insurance",
            filters: [
                {
                    text: "Car",
                    value: "Car",
                },
                {
                    text: "Landlord",
                    value: "Landlord",
                },
                {
                    text: "Home",
                    value: "Home",
                },
                {
                    text: "Travel",
                    value: "Travel",
                },
            ],
            onFilter: (value, record) => record.insurance.indexOf(value) === 0,
        },
        {
            title: "Details",
            dataIndex: "details",
        },
        {
            title: "Assign",
            dataIndex: "assign",
        },
    ];
    

    console.log(data)
    // adding the customer detail button to the columns
    for (let i = 0; i < data.length; i++) {
        if (data[i].details.length == 0) {
            data[i].details.push(
                <CustomerDetail
                    className="button"
                    data={data[i]}
                ></CustomerDetail>
            );
            data[i].history.push(
                <CustomerHistory
                    className="button"
                    data={data[i]}
                ></CustomerHistory>
            );
            data[i].email = <a href = "https://mail.google.com/">{data[i].email}</a>
            data[i].staff = props.data.location.state.staff.givenName + " " + props.data.location.state.staff.familyName
            data[i].staffID = props.data.location.state.staff.id
        }
    }

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

    // second no staff list
    for (let i = 0; i < data2.length; i++) {
        data2[i].details.push(
            <CustomerDetail className="detailButton" data={data2[i]}>
                Details
            </CustomerDetail>
        );
        data2[i].assign.push(
            <CustomerAssign
                className="detailButton"
                staff={props.data.location.state.staff.id}
                staffDetails={props.data.location.state.staff}
                data={data2[i]}
            >
                Assign
            </CustomerAssign>
        );
        data2[i].staffID = props.data.location.state.staff.id
        data2[i].email = <a href = "https://mail.google.com/">{data2[i].email}</a>
    }

    // search functionality
    var nameArray2 = [];
    for (let i = 0; i < data2.length; i++) {
        nameArray2.push(data2[i].firstName);
        nameArray2.push(data2[i].lastName);
        nameArray2.push(data2[i].contactNumber.toString());
        nameArray2.push(data2[i].email.toString());
    }

    const [SearchTerm2, setSearchTerm2] = useState("");
    const searchHandler2 = (event) => {
        setSearchTerm2(event.currentTarget.value);
    };

    var result2 = nameArray2.filter((val) => {
        if (SearchTerm2 == "") {
            return val;
        } else if (val.toLowerCase().includes(SearchTerm2.toLowerCase())) {
            return val;
        }
    });

    var filteredData2 = data2.filter(function (el) {
        return (
            result2.includes(el.firstName) ||
            result2.includes(el.lastName) ||
            result2.includes(el.contactNumber.toString()) ||
            result2.includes(el.email.toString())
        );
    });

    return (
        <>
            <div className="total">
                <div>
                    <h2>Customers</h2>
                    <Search
                        className="searchBar"
                        placeholder="input search text"
                        onChange={searchHandler}
                        value={SearchTerm}
                        icon={<SearchOutlined />}
                    />
                </div>
                <div>
                    <p>Ongoing Customers</p>
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
                {/* apply this to the table */}
                {/* <CustomerHistory></CustomerHistory> */}

                <div>
                    <Search
                        className="searchBar"
                        placeholder="input search text"
                        onChange={searchHandler2}
                        value={SearchTerm2}
                        icon={<SearchOutlined />}
                    />
                </div>
                <div>
                    <p>Assign New Customers</p>
                    <Table
                        size="small"
                        className="table"
                        columns={columns2}
                        dataSource={filteredData2}
                        onChange={onChange}
                    />
                </div>
            </div>
        </>
    );
}
export default CustomerList;
