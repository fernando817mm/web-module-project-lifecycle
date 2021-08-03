import React from 'react';
import './App.css';
import axios from 'axios';
import User from './components/User';

//api: https://api.github.com/users/< your github name >

//STEP 1: Fetch the user data (componentDidMount)
//STEP 2: Set it to state
//STEP 3: Pass the data to the component that will display it.

class App extends React.Component{

  state = {
    user: ''
  }

  componentDidMount(){
    axios.get('https://api.github.com/users/fernando817mm')
      .then(res => {
        this.setState({
          ...this.state,
          user: res.data
        })
      })
      .catch(err => {
        alert(err);
      })
      .finally(() => {
        console.log('done');
      })
  }

  render(){
    return(
      <div>
        <h1>Fernando</h1>
        <User user={this.state.user}/>
      </div>
    )
  }
}

export default App;
