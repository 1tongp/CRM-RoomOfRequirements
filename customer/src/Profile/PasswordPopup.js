import React from 'react';
import PropTypes from 'prop-types';
import './Profile.css';

function PasswordPopup(props) {
    return (props.trigger) ? (
        <div className="popUp">
            <div className="popUp-inner">
                <button className="close-btn" onClick={() => props.setState(false)}>Save and close</button>
                {props.children}
            </div>
        </div>

    ) : "";

    
}


                
PasswordPopup.propTypes = {

}

export default PasswordPopup;

