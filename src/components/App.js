import { React, Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import '../styles/App.css';
import Nav from './Nav';
import MainContent from './MainContent';
import CityDetails from './CityDetails';


class App extends Component {
  constructor() {
    super()
    this.state = {
      allCities: [],
      sliderCity: {},
    }
  }

  // getAllCities = () => {
  //   fetch('path')
  //   .then(response => response.json())
  //   .then(data => this.setState({ allCities: data }))
  //   .catch(error => console.log(error))
  // };

  render() {
    return (
      <div className='app'>
        <Route 
          exact 
          path='/' 
          render={() => {
            return(
              <main className='all-content'>
                <Nav />
                <MainContent />
                <Route exact path='/:cityId' render={() => <CityDetails />} />
              </main>
              )
            }
          }
        />
      </div>
    );
  }
}
export default App;
