import "./CustomerExpired.css";
import axios from "../API/axios.js";
import React, { useState, setState, useEffect } from "react";


function Render(props) {
    console.log(props)
    const [name, setName] = useState('')
    const [date, setDate] = useState('')
    useEffect(() => {
        axios.get("/customer/" + props.data.customer).then((response) => {
            if (response.data.success) {
                console.log(response);
                setName(response.data.customer.givenName + " " + response.data.customer.familyName);
                
            }
        });

    }, []);
    console.log(date)
    // setDate(props.data.expireDate.slice(0,9))
    return (
        <ul className="CustomerList">
            <li className="ListItem">
                <img
                        src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        alt=""
                        className="Image"
                    />
                <div className="Customer">
                    <span className="Customername">{name}</span>
                    <span className="expiration">
                        {props.data.expireDate.slice(0,10)}
                    </span>
                </div>
            </li>
        </ul>
    );
}

export default Render