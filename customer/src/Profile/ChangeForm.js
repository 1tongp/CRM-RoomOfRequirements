import React from "react"
import { Button, Modal, Form, Row, Col} from 'react-bootstrap';
import './Profile.css';

class AddContact3 extends React.Component {
    render(){
        return(
            <Form>
                <br />

                <Row className="mb-3">
                    <Col>
                    <Form.Group as={Col} controlId="formGridName">
                    <Form.Label for="colFormLabelLg" class="col-sm-2 col-form-label col-form-label-lg"> Name</Form.Label>
                    <Form.Control size="lg" type="text" placeholder="Enter Name" />
                    </Form.Group>
                    </Col>
                    <Col>
                    <Form.Group as={Col} controlId="formGridRole">
                    <Form.Label>Role</Form.Label>
                    <Form.Control size="lg" plaintext readOnly defaultValue="Staff" />
                    </Form.Group>
                    </Col>
                </Row>

                <Row className="mb-3">
                    <Col>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control size="lg" plaintext readOnly defaultValue="xxxx@hsbc.com" />
                    </Form.Group>
                    </Col>
                    <Col>
                    <Form.Group as={Col} controlId="formGridAddress2">
                        <Form.Label>Employee ID</Form.Label>
                        <Form.Control size="lg" plaintext readOnly defaultValue="1234567" />
                    </Form.Group>
                    </Col>
                    
                </Row>

                <Row className="mb-3">
                    <Col>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control size="lg" type="text" placeholder="Enter Phone Number" />
                    </Form.Group>
                    </Col>
                    <Col>
                    <Form.Group as={Col} controlId="formGridTeam">
                        <Form.Label>Team ID</Form.Label>
                        <Form.Control size="lg" plaintext readOnly defaultValue="12" />
                    </Form.Group>
                    </Col>                   
                </Row>

                <Row className="mb-3">
                    <Col>
                    <Form.Group as={Col} controlId="formGridAddress">
                    <Form.Label>Address</Form.Label>
                    <Form.Control size="lg" type="text" placeholder="Enter Address" />
                    </Form.Group>
                    </Col>
                    <Col>
                    <Form.Group as={Col} controlId="formGridRegion">
                    <Form.Label>Region</Form.Label>
                    <Form.Control size="lg" plaintext readOnly defaultValue="Melbourne" />
                    </Form.Group>
                    </Col>
                </Row>

                <Row className="mb-3">
                        <Button className="saveRight" variant="primary" type="button" >
                            Save
                        </Button>
                        <Button className="cancelRight" variant="primary" type="button" >
                            Cancel
                        </Button>
                </Row>
                </Form>
        )
    }
}

export default AddContact3;