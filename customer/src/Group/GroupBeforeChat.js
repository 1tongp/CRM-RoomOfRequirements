import React, { useState, setState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

import "./GroupBeforeChat.css";

import TeamList from "./TeamList.js";
import Navigation from "../components/Navigation";
import Join from "../TeamChat/Join/Join.js";
import UploadFile from "./UploadFile.js";

function GroupRender(props) {
    console.log(props);

    return (
        <>
            <div className="GroupBeforeChatPage">
                <div className="NavBar">
                    {" "}
                    <Navigation data={props}></Navigation>{" "}
                </div>
                <div className="pagecontent">
                    <div className="TeamList">
                        {" "}
                        <TeamList data={props}></TeamList>{" "}
                    </div>
                    <div className="Chat-Join">
                        {" "}
                        <Join data={props}></Join>{" "}
                    </div>
                    <div className="UploadFile">
                        {" "}
                        <UploadFile data={props}></UploadFile>{" "}
                    </div>
                </div>
            </div>
        </>
    );
}

export default GroupRender;
