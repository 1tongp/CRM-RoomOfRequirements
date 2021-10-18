//import "./CustomerExpired.css";
import axios from "../API/axios.js";
import React, { useState, setState, useEffect } from "react";
import "./ExpiredRender.css";
//import CustomerHistory from "./ExpCusHistory";
import CustomerHistory from "../components/CalendarHistory";
import { Menu, Dropdown, Button } from "antd";
function Render(props) {
    console.log(props)
    const [name, setName] = useState('')
    const [date, setDate] = useState('')
    const [detail, setDetail] = useState('')
    useEffect(() => {
        axios.get("/customer/" + props.data.customer).then((response) => {
            if (response.data.success) {
                console.log(response);
                setName(response.data.customer.givenName + " " + response.data.customer.familyName);
                setDetail(response.data.customer)
                console.log(detail)
            }
        });

    }, []);
    console.log(detail)
    // setDate(props.data.expireDate.slice(0,9))

    const info = (
        <>
            <Menu>
                <Menu.Item>
                    <a target="_blank">
                        <p>
                            Name:{" "}
                            {detail.givenName + " " + detail.familyName}
                        </p>
                    </a>
                </Menu.Item>
                <Menu.Item>
                    <a target="_blank">
                        <p>Contact Number: {detail.phone}</p>
                    </a>
                </Menu.Item>
                <Menu.Item>
                    <a target="_blank">
                        <p>Email: {detail.email}</p>
                    </a>
                </Menu.Item>
            </Menu>
        </>
    );

    return (
        <ul className="CustomerList">
            <li className="ListItem">
                <Dropdown overlay={info} placement="bottomCenter" arrow>
                    <span >
                        <img
                            src={detail.photo}
                            alt=""
                            className="CustomerImage"
                        />
                    </span>
                </Dropdown>

                <div className="Customer">
                    <span className="Customername">{name}</span>
                    <span className="expiration">
                        Insurance Type: {props.data.type}
                    </span>
                    <span className="expiration">
                        Expire Date: {props.data.expireDate.slice(0, 10)}
                    </span>
                    <CustomerHistory className="button" data={props}> </CustomerHistory>
                </div>
            </li>
        </ul>
    );
}

export default Render