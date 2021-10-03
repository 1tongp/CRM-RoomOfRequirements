import "./TeamList.css";
import axios from "../API/axios.js";
import React, { useState, setState, useEffect } from "react";
import { Menu, Dropdown, Button } from 'antd';

function Render(props) {
    console.log(props)
    const info = (
        <>
            <Menu>
                <Menu.Item>
                    <a target="_blank">
                        <p>Name: {props.data.givenName + " " + props.data.familyName}</p>
                    </a>

                </Menu.Item>
                <Menu.Item>
                    <a target="_blank">
                        <p>Email: {props.data.loginEmail}</p>
                    </a>
                </Menu.Item>
                <Menu.Item>
                    <a target="_blank">
                        <p>Phone Number: {props.data.phone}</p>
                    </a>
                </Menu.Item>
            </Menu>
        </>
    )
    return (
        <div className='Team'>
            <ul className="TeamMemberList">
                <li className="memberItem">
                    <img
                        src="https://wx4.sinaimg.cn/large/005SXcCcly1gme0xhksaoj30rs0rse81.jpg"
                        alt=""
                        className="Image"
                    />
                    <Dropdown overlay={info} placement="bottomCenter" arrow>
                        <span className="membername">{props.data.givenName}</span>
                    </Dropdown>

                </li>
            </ul>
        </div>

    )
}

export default Render;
