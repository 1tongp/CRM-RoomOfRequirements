import { Layout } from 'antd';
import axios from '../API/axios';
import Navigation from '../components/Navigation';
import '../components/component.css';

const { Header, Content } = Layout;
function Dashboard(props) {
    console.log(props)
    return (
        <>
            <Navigation data={props}></Navigation>

            <Layout>
                <Content className="site-layout-background-content">
                    <div className="container--customerlist">
                        <div className="container--basicinfo">
                            <p>dashboard information from props</p>
                            <p>staff familyName: {props.location.state.staff.familyName}</p>
                            <p>staff id: {props.location.state.staff.id}</p>
                            <p>staff loginEmail: {props.location.state.staff.loginEmail}</p>
                            <p>staff password: {props.location.state.staff.password}</p>
                        </div>
                    </div>
                </Content>
            </Layout>
        </>




    )
}

export default Dashboard;