import React, { Component } from 'react';
import Root from './Root';
import { Lines } from 'react-preloaders';
import './App.scss';

class App extends Component {

  render() {
    return (

      <div className='main-container' >
        <Root />
        <Lines color={"#ad0b17"}/>
      </div>

    );
  }
}

export default App;
