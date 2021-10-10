import { Button } from "antd";
import React from "react";

class ManagerAccess extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props);
    }

    state = {
        redirect: null,
    };

    redirect = () => {
        this.props.data.data.history.push("/manager", {
            staff: this.props.data.data.location.state.staff,
        });
    };

    render() {
        return (
            <Button className="iconManager" onClick={() => this.redirect()}>
                Manager Priority Access
            </Button>
            // <button type="button" class="btn btn-secondary">Manager Priority Access</button>
        );
    }
}

export default ManagerAccess;