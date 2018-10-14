import React, { Component } from 'react';
//import chartjs for the chart here
import {Pie} from 'react-chartjs-2';
import './Dashboard.scss'

class Dashboard extends Component {

    constructor(props){
        super(props);    
        // set the state with data that is needed for the chart
        this.state= {
            chart: {
                labels: this.props.countries,
                datasets: [{
                    data: this.props.populations,
                    backgroundColor: [
                    '#117788',
                    '#ee2244',
                    '#770033', 
                    '#1166ff',                
                    '#0033aa',
                    '#88aa33',
                    '#662299',
                    '#aa3388', 
                    '#559999',                
                    '#774411',
                    '#007722'
                    ]
               }]
            }
        }    
    }
      
    render () {
        console.log(this.state)
        return (
            <div className="main">
                <h4>Dashboard</h4> 
                <div className="left-section">
                    <p>Did you know that some countries in the world are more populated than some of the continents?</p>
                    <p>On the chart are shown countries and regions in the world that have population between 500 million and 3 billion. </p>
                </div>
                <div className="right-section">             
                    <Pie data={this.state.chart} />
                </div>
            </div>
        );
    }
}

export default Dashboard;