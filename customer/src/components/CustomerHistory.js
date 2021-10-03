import React, { useState } from "react";
import { Table, Modal, Button, Input } from "antd";
import "./Customer.css";
import { useEffect } from "react";
import axios from "../API/axios.js";
import { SearchOutlined } from "@ant-design/icons";

function CustomerHistory(props) {
    console.log(props)
    const { Search } = Input;
    const [historyData, setHistory] = useState([]);
    const[insurance, setIns] = useState('');
    const[staffLast, setLast] = useState('');
    useEffect(() => {
        axios.get("/history/list/" + props.data.id).then((response) => 
        {
            if (response.data.success) {
                console.log(response);
                setHistory(response.data.history);
            }
        });
    }, []);

    for(let i = 0; i < historyData.length; i++){
        historyData[i].staff = props.data.staff
    }
    console.log(historyData)

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    function onChange(pagination, filters, sorter, extra) {
        console.log("params", pagination, filters, sorter, extra);
    }

    const historyColumn = [
        {
            title: "Insurance Type",
            dataIndex: "insuranceType",
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
            onFilter: (value, record) => record.orderType.indexOf(value) === 0,
        },
        {
            title: "Staff",
            dataIndex: "staff",
            sorter: (a, b) => a.operator.localeCompare(b.operator),
            sortDirections: ["descend"],
        },
        {
            title: "Date",
            dataIndex: "date",
        },
        {
            title: "Note",
            dataIndex: "note",
        },
    ];
    // const historyData = [
    //     {
    //         orderType: "Credit",
    //         operator: '1',
    //         status: 'Successful',
    //         date: '01/01/2021',
    //         orderAmount: 100,
    //     }
    // ];

    // search functionality
    var nameArray = [];
    for (let i = 0; i < historyData.length; i++) {
        nameArray.push(historyData[i].operator);
        nameArray.push(historyData[i].date); // remember to string
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

    var filteredData = historyData.filter(function (el) {
        return (
            result.includes(el.operator) || result.includes(el.date.toString())
        );
    });


    // button and modal
    return (
        <>
            <Button className="historyButton" onClick={showModal}>
                History
            </Button>
            <Modal
                title="History"
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                width={1000}
            >
                {/* add a table and search bar as the content */}
                    <Search
                        className="searchBar"
                        placeholder="input search text"
                        onChange={searchHandler}
                        value={SearchTerm}
                        icon={<SearchOutlined />}
                    />

                    <Table
                        size="small"
                        className="table"
                        columns={historyColumn}
                        dataSource={filteredData}
                        onChange={onChange}
                    />

            </Modal>
        </>
    );
}

export default CustomerHistory;
