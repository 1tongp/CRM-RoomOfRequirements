import React from 'react'
import ReactDOM from 'react-dom'
import Avatar from 'react-avatar-edit'
import { Image } from "antd";
import { AntDesignOutlined, UserOutlined } from "@ant-design/icons";

class UploadImage extends React.Component {

  constructor(props) {
    super(props)
    const src = <Image src="./tutu.png" />
    this.state = {
      preview: null,
      src
    }
    this.onCrop = this.onCrop.bind(this)
    this.onClose = this.onClose.bind(this)
    this.onImageLoad = this.onImageLoad(this)
  }

  onClose() {
    this.setState({preview: null})
  }

  onCrop(preview) {
    this.setState({preview})
  }

  onImageLoad(image) {
    this.setState({src: image})
  }


  render () {
    return (
      <div>
        <Avatar
          className="lay1"
          width={390}
          height={295}
          onCrop={this.onCrop}
        //   onClose={this.onClose}
          onImageLoad={this.onImageLoad}
          src={this.state.src}
          label="Change profile photo"
        />
        <img src={this.state.preview} alt="Preview" />
        <img src={this.state.src} />
      </div>
    )
  }
}
export default UploadImage;
