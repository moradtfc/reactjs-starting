import React from 'react';
import './App.css';
import Userinput from './UserInput/Userinput.js';
import Useroutput from './UserOutput/Useroutput.js';

class App extends React.Component{

  state = {
    users : [
      { username: 'moradtfc'}
    ]
  }

  usernameChanged = (e) => {
    this.setState({
      users: [
        {username: e.target.value }
      ]
    });
  }

  render() {
    return (
      <div className="App">
       <h1>first task</h1>
      <Userinput changed={this.usernameChanged} valor={this.state.users[0].username}></Userinput>
      <Useroutput username={this.state.users[0].username}></Useroutput>
      <Useroutput username={this.state.users[0].username}></Useroutput>
      </div>
    );
  }
}

/*
function App() {
  return (
    <div className="App">
     <h1>first task</h1>
     <Userinput></Userinput>
     <Useroutput username="moradtfc"></Useroutput>
    
    </div>
  );
}
*/

export default App;
