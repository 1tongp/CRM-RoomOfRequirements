import Navigation from "../components/Navigation";
import { Avatar, Image } from "antd";
import { AntDesignOutlined, UserOutlined } from "@ant-design/icons";
import "../components/component.css";
import "./Profile.css";
import ChangeForm from "./ChangeForm.js";



function Profile(props) {
    console.log(props);
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
                        <ChangeForm data={props} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
