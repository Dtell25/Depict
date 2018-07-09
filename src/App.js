import React, { Component } from 'react';
import SimpleMap from './components/SimpleMap';

import Facebook from './components/Facebook';
import Map from './components/Map';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        isLoggedIn: false,
        userId: null
      }
  } 
    this.logIn = this.logIn.bind(this)  
  }

  logIn(user) {
    this.setState({
      user
    })
  }

  // state = {
  //    pins: []// list of push pins 
  //    //in componentDidMount, get pins form database and update state
  //    //passed through to the map component 

  // }
  // //method
  //   // takes in location geocodes location ( name of location)
  //   // give lat and lng 
  //   // pushes to database
  //   // pull updated list from database

  // //give search bar above method as a prop 
  //   // inside handleFormdsubmit ()
  //   // 

  render() {
    const isLoggedIn = this.state.user.isLoggedIn
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Depict</h1>
        </header>
        <p className="App-intro">
          {/* To get started, sign in with Facebook. */}
        </p>
        {!isLoggedIn && (<Facebook userdata={this.state.user} LogInfn={this.logIn}/>)}
        {isLoggedIn && (<Map />)}
        
      </div>

      <div className="map">
       
        <SimpleMap />

      </div>
     
    );
  }
}

export default App;


