import React from 'react';
import PropTypes from 'prop-types';
import './Profile.css';
import { Button, Modal, Form, Row, Col} from 'react-bootstrap';


function PasswordPopup(props) {
    return (props.trigger) ? (
        <div className="popUp">
            <div className="popUp-inner">
                <div className="popUp-title">Change Password for account: "xxx@hsbc.com"</div>
                <Form>
                    <Col>
                    <Form.Group as={Col} controlId="formGridOldPassword">
                    <Form.Label>New Password</Form.Label>
                    <Form.Control size="lg" type="text" placeholder="Enter Your New Password" />
                    </Form.Group>
                    </Col>
                    <Col>
                    <Form.Group as={Col} controlId="formGridNewPassword">
                    <Form.Label>Old Password</Form.Label>
                    <Form.Control size="lg" type="text" placeholder="Enter Your Old Password" />
                    </Form.Group>
                    </Col>
                </Form>
                <button className="close-btn" onClick={() => props.setTrigger(false)}>Save and close</button>
                {/* {props.children} */}
            </div>
        </div>

    ) : "";

    
}


                
PasswordPopup.propTypes = {

}

export default PasswordPopup;

