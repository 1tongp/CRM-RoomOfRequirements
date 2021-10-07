import "./CustomerExpired.css";
import axios from "../API/axios.js";
import React, { useState, setState, useEffect } from "react";
import Render from "./ExpiredRender";

function ExpireList(props) {
    console.log(props)
    const [orders, setOrders] = useState([])
    useEffect(() => {
        axios.get("/order/" + props.data.location.state.staff.id).then((response) => {
            if (response.data.success) {
                console.log(response);
                setOrders(response.data.orders);
            }
        });

    }, []);
    console.log(orders)

    return (
        <>
            <div className="AllCustomer">
                <span className="Title">
                    Customer with insurance be about to expire
                </span>
            </div>

            <div className='ListOfCustomer'>     
                {(orders.length > 0) ? orders.map((singleOrder) => (
                    <Render data = {singleOrder}></Render>

                )):<p>no orders</p>}
            </div>
        </>
    );
}

export default ExpireList;
