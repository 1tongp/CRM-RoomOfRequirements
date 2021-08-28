import axios from '../API/axios';
import Navigation from '../components/Navigation';

function Customer(props) {
    console.log(props)
    return (
        <div>
            <Navigation data = {props}></Navigation>
            <p>customer page</p>
            
        </div>
    )
}

export default Customer;