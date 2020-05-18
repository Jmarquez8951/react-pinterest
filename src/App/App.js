import React from 'react';
import './App.scss';

import Auth from '../components/Auth/Auth';
import BoardContainer from '../components/BoardContainer/BoardContainer';
import MyNavbar from '../components/MyNavbar/MyNavbar';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h2>React Pinterest</h2>
        <MyNavbar/>
        <Auth/>
        <BoardContainer/>
      </div>
    );
  }
}

export default App;
