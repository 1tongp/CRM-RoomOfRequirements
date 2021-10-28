import "./TeamList.css";
import axios from "../API/axios.js";
import React, { useState, useEffect } from "react";
import Render from "./MemberRender.js";

function TeamListRender(props) {
    console.log(props)

    const [member, setMember] = useState([])
    useEffect(() => {
        axios.get("/staff/member/" + props.data.location.state.staff.team).then((response) => {
            if (response.data.success) {
                console.log(response);
                setMember(response.data.members);
            }
        });

    }, []);
    console.log(member)

    return (
        <div className="Team">
            <div className="listcontent">
                <span className="Title">Team members</span>
                {(member.length > 0) ? member.map((singleMember) => (
                <Render data = {singleMember}></Render>

            )):<p>no members</p>}
            </div>
        </div>
    );
}

export default TeamListRender;
