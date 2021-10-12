//import "./CustomerExpired.css";
import axios from "../API/axios.js";
import React, { useState, setState, useEffect } from "react";
import "./ExpiredRender.css";
//import CustomerHistory from "./ExpCusHistory";
import CustomerHistory from "../components/CalendarHistory";

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
            }
        });

    }, []);
    console.log(date)
    // setDate(props.data.expireDate.slice(0,9))
    return (
        <ul className="CustomerList">
            <li className="ListItem">
                <img
                        src="https://y.qichejiashi.com/tupian/upload/246852168.jpg"
                        alt=""
                        className="CustomerImage"
                    />
                <div className="Customer">
                    <span className="Customername">{name}</span>
                    <span className="expiration">
                        {props.data.expireDate.slice(0,10)}
                    </span>
                    <CustomerHistory className="button" data={props}> </CustomerHistory>
                </div>
            </li>
        </ul>
    );
}

export default Render