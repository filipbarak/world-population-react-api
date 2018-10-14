import React, { Component } from 'react';
import './Reports.scss';

class Reports extends Component {


    render () {
        return (
            <div className="main">
                <h4>Reports</h4>
                <p>Below is shown a list of countries and their population.</p>
                <ul className="left">{this.props.countries.map((c, i) => 
                    <li key={i}><p>{c}</p></li>                    
                )}
                </ul>
                <ul className="right">{this.props.populations.map((p, i) => 
                    <li key={i+1}><p>{parseInt(p).toLocaleString()}</p></li>        
                )}
                </ul>                
            </div>
        );
    }
}

export default Reports;