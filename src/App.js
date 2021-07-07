// import logo from './logo.svg';
import './App.css';
import React from 'react';
import CardList from './components/cardList/cardList';
import Form from './components/Form/form';
// const data = require('./components/cardList/cardListData.json')

// eslint-disable-next-line 
// function App({title}) {
  /* return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  ); */
  /* return(
    <div className="header">{title}</div>
  ); */
// }
class App extends React.Component {
  // constructor
  // this  each instance gets its props and state
  /* constructor(props){
    super(props);
    this.state = {
      profiles:data.testData,
    };
  } */
  // OR
  state = {
    // profiles:data.testData
    profiles:[]
  }
  addNewProfileData = (profileData) => {
    this.setState(previousState => ({
      profiles:[...previousState.profiles,profileData]
    }))
  }
  render(){
    return (
      <div>
        <div className="header">{this.props.title}</div>
        <Form onSubmit={this.addNewProfileData} />
        <CardList profiles={this.state.profiles}/>
      </div>
    ) 
  }
}

export default App;
