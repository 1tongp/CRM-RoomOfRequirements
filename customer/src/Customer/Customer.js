import axios from '../API/axios';
import Navigation from '../components/Navigation';
import CustomerList from '../components/CustomerList';
import '../components/component.css'
function Customer(props) {
    console.log(props)
    return (
        <div className='div'>
            <div className='navigationBar'>
                <Navigation data={props}></Navigation>
            </div>
            <div className='customerList'>
                <CustomerList />
            </div>
            
            
        </div>
    )
}

export default Customer;