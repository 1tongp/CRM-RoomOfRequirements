import "./UploadFile.css";

import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import ManagerAccess from "./ManagerAccess";

function uploadRender(props) {
    console.log(props.data.location.state.staff.role);
    return (
        <div className="UploadFile">
            <h1 className="fileheading">Upload File</h1>
            <div className="filecontent">
                <div className="icon">
                    <InsertDriveFileIcon></InsertDriveFileIcon>
                    {/* <p className="icontext"> View Files</p> */}
                    <a className="icontext" href="https://drive.google.com/drive/folders/1oUcY7o3mam4mgCmdPGTQuV02HudniyWC?usp=sharing">View Files</a>
                </div>
                <div className="icon">
                    <CloudUploadIcon></CloudUploadIcon>
                    <a className="icontext" href="https://drive.google.com/drive/folders/1oUcY7o3mam4mgCmdPGTQuV02HudniyWC?usp=sharing">Upload Files</a>
                    {/* <p className="icontext"> Upload Files</p> */}
                </div>
                <div>
                {(props.data.location.state.staff.role ==="Manager") ? <ManagerAccess data={props}/> : <></>}
                    {/* <ManagerAccess data={props}/> */}
                </div>
            </div>
        </div>
    );
}

export default uploadRender;
