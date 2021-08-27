
import axios from '../API/axios';
import Navigation from '../components/Navigation';

function Dashboard(props) {
    console.log(props)
    return (
        <div>
            <Navigation data = {props}></Navigation>
            <p>dashboard information from props</p>
            <p>staff familyName: {props.location.state.staff.familyName}</p>
            <p>staff id: {props.location.state.staff.id}</p>
            <p>staff loginEmail: {props.location.state.staff.loginEmail}</p>
            <p>staff password: {props.location.state.staff.password}</p>
        </div>
    )
}

export default Dashboard;