import Navigation from "../components/Navigation";
import { Avatar, Image } from "antd";
import { AntDesignOutlined, UserOutlined } from "@ant-design/icons";
import "../components/component.css";
import "./Profile.css";
import ChangeForm from "./ChangeForm.js";
import Test from "./UploadImage.js";
import UnChangedForm from "./UnchangedForm.js";
import { useEffect, useState } from "react";
import axios from "../API/axios.js";
function Profile(props) {
    console.log(props);
    const [team, setT] = useState('')
    useEffect(() => {
        axios
            .get("/team/teamid/" + props.location.state.staff.team)
            .then((response) => {
                if (response.data.success) {
                    console.log(response);
                    setT(response.data.teamDetail.teamNumber)
                }
            });

        
    }, []);
    console.log(team)
    return (
        <div className="div">
            <div className="navigationBar">
                <Navigation data={props}></Navigation>
            </div>
            <div className='profilePage'>
                <Avatar
                    className="lay1"
                    size={200}
                    icon={<AntDesignOutlined />}
                    src={<Image src="./tutu.png" />}
                    srcSet=""
                    alt="Change profile photo"
                />
                <div className="lay2">
                    <div>
                        <UnChangedForm data={props} team = {team}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
