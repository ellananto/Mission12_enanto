import React from 'react';
import logo from './logo.svg';
import './App.css';
import data from '../src/CollegeBasketballTeams.json'

class Team extends React.Component 
{
  render() {
    const oneteam : any = this.props;
    return (
      <center>
    <div className="card text-center mt-3" style={{ maxWidth: '50rem' }}>
      <div className="card-body">
        <h1 className="card-header">{oneteam.school}</h1>
        <p className="card-text">
        <h2>{oneteam.name}</h2>
          <p>Abbreviation: {oneteam.abbrev}</p>
          <p>Population: {oneteam.pop}</p>
          <p>State: {oneteam.state}</p>
          <p>City: {oneteam.city}</p>
        </p>
      </div>
    </div>
    </center>
    );
  }
}

class TeamList extends React.Component
{
  render() {
    const teamsdata = data.teams;
    return (
      <div>
      {teamsdata.map(teamsdata => <Team {...teamsdata}/>)}
      </div>
    )
  }
}

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to the NCAA Basketball Website.</h1>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <TeamList/>
    </div>
  );
}

export default App;