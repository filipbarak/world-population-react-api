
import React from 'react';
//imports from react-router-dom to use them for routing
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//imprt axios for the http calls
import axios from 'axios';
//import components here
import SideNavBar from './SideNavBar/SideNavBar';
import Home from './Home/Home';
import Reports from './Reports/Reports';
import Dashboard from './Dashboard/Dashboard';
import NotFound from './NotFound/NotFound';
//import sass(scss) here
import './App.scss'


let countriesArray = [];
let p =[];
let moreMil50 = [];
let moreMil50countries = [];
let date = new Date();
let year = date.getFullYear();
let month = date.getMonth() + 1;
let day = date.getDate();

class App extends React.Component {

  //api for the population of a country on a given date
  //http://api.population.io/1.0/population/United%20Kingdom/2015-12-24/?format=json

  //api for the list of countries
  //http://api.population.io/1.0/population/countries/?format=json
    
    state = {
      countries: [],
      populations:[] ,
      mil50: [],
      mil50countries: []
    }  
    getCountries = () => {
      console.log(year, month, day);
      //get the countries with axios
      axios.get(`http://api.population.io/1.0/population/countries/?format=json`)
      .then((res) => {
        countriesArray = res.data.countries
        //console.log(countriesArray);
        this.setState({
          countries: res.data.countries
        })
        // those countries do not return data from the api, so use remove those
        //console.log(this.state.countries[133] + "|" +this.state.countries[117]);
        this.state.countries.splice(113,1);
        this.state.countries.splice(117,1);
        //get the correct data for New Zealand by renaming it
        var index = this.state.countries.indexOf("Australia/New Zealand");
        if (~index) {
            this.state.countries[index] = 'New Zealand';            
        }
        //console.log(this.state)  

        // now, for ALL countries, pass the country name in the url to make multiple call
        // and return the data for all countries for their population on the current date
        for (let i=0; i<this.state.countries.length; i++) {        
        axios.get(`http://api.population.io/1.0/population/${this.state.countries[i]}/${year}-${month}-${day}?format=json`)
        .then(response => {
        //push the responce
        p.push(response.data.total_population.population);
        //set the state
        this.setState({ populations: p });
        //for the chart, push those that have between 500 million and 3 billion
        if (response.data.total_population.population > 500000000 && (response.data.total_population.population < 3000000000 )){
          moreMil50.push(response.data.total_population.population);
          moreMil50countries.push(countriesArray[i]);
        }
        this.setState({mil50:moreMil50, mil50countries: moreMil50countries })
        // console.log(this.state.populations);
        //console.log(p); 
        // console.log(this.state.mil50);
        // console.log(this.state.mil50countries);
      }); 
    }
   
  });
          
}
  // get the data from the api when component renders   
  componentDidMount () {
    this.getCountries();
  }
 
  render() {  
    return (
      <BrowserRouter>
        <div>
          <SideNavBar />
          
          <Switch>        
            <Route path="/" exact component={Home}></Route> 
            <Route path="/reports" 
              render={(props) => <Reports {...(props)} countries={this.state.countries} populations={this.state.populations}/>}>
            </Route>
            <Route path="/dashboard" 
              render={(props) => <Dashboard {...(props)} countries={this.state.mil50countries} populations={this.state.mil50} />}>
            </Route>
            <Route component={NotFound}></Route>
            
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
