import "./UploadFile.css";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";


function uploadRender(props) {
    console.log(props);
    return (
        <div className="UploadFile">
            <h1 className="fileheading">Upload File</h1>
            <div className="filecontent">
                <div className="icon">
                    <InsertDriveFileIcon></InsertDriveFileIcon>
                    <a className="icontext" href="https://drive.google.com/drive/folders/1oUcY7o3mam4mgCmdPGTQuV02HudniyWC?usp=sharing">View Files</a>
                </div>
                <div className="icon">
                    <CloudUploadIcon></CloudUploadIcon>
                    <a className="icontext" href="https://drive.google.com/drive/folders/1oUcY7o3mam4mgCmdPGTQuV02HudniyWC?usp=sharing">Upload Files</a>
                </div> 
            </div>
        </div>
    );
}

export default uploadRender;
