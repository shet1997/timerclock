import React, { Component } from 'react'; 
import TimerComponent from './timerClock';
import 'bootstrap/dist/css/bootstrap.css';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container mt-5">
            <div className="d-flex justify-content-center">
                <TimerComponent />
            </div>
        </div>
      </div>
    );
  }
}

export default App;
