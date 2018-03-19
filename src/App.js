import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      people: [
        {
          name: "Joe",
          age: 18,
          email: "mojojojo@example.com",
          occupation: "Teacher"
        },
        {
          name: "Billy",
          age: 40,
          email: "billybob@example.com",
          occupation: "Teacher"
        },
        {
          name: "Doug",
          age: 30,
          email: "doughboi@example.com",
          occupation: "Doctor"
        },
        {
          name: "Josh",
          age: 25,
          email: "joshua@example.com",
          occupation: "Coach"
        },
        {
          name: "Stacy",
          age: 23,
          email: "staycee@example.com",
          occupation: "Team Manager"
        },
        {
          name: "Rena",
          age: 40,
          email: "Reenah@example.com",
          occupation: "Teacher Assistant"
        }
      ],
      userInput: ""
    };
  }
  handleChange(val) {
    this.setState({
      userInput: val
    });
  }

  render() {
    let list = this.state.people
      .filter(e => e.occupation.includes(this.state.userInput))
      .map((element, index) => {
        return (
          <div key={index}>
            <h4>{element.name}</h4>
            <p>{element.age}</p>
            <p>{element.email}</p>
            <p>{element.occupation}</p>
            <br />
          </div>
        );
      });
    return (
      <div className="App">
        <input onChange={e => this.handleChange(e.target.value)} />
        {list}
      </div>
    );
  }
}

export default App;
