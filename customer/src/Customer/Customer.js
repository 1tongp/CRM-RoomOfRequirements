import axios from '../API/axios';
import Navigation from '../components/Navigation';
import CustomerList from '../components/CustomerList';
function Customer(props) {
    console.log(props)
    return (
        <div>
            <Navigation data = {props}></Navigation>
            <CustomerList/>
            
        </div>
    )
}

export default Customer;