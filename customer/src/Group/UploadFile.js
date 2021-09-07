import "./UploadFile.css";

import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';


function uploadRender() {
    return (
        <div className="UploadFile">
            <h1 className="fileheading">Upload File</h1>
            <div className="filecontent">
                <div className = "icon">
                    <InsertDriveFileIcon></InsertDriveFileIcon>
                    <p className="icontext"> View Files</p>
                </div>
                <div className = "icon">
                    <CloudUploadIcon></CloudUploadIcon>
                    <p className="icontext"> Upload Files</p>
                </div>
            </div>

        </div>
    );
  }

export default uploadRender;