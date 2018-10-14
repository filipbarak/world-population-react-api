import React, {Component} from 'react'
import { NavLink }from 'react-router-dom';
import './Home.scss'

class Home extends Component {
    render () {
        return (
            <div className="home">
                <div className="blockLeft">
                    <NavLink  to="/dashboard"><i className="fas fa-columns"></i><span>DASHBOARD</span></NavLink>
                </div>
                <div className="blockRight">
                    <NavLink to="/reports"><i className="fas fa-chart-line"></i><span>REPORTS</span></NavLink>
                </div>
            </div>
        );
    }
}
export default Home;