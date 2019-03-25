import React, { Component } from 'react';
import './App.css';


const usersName = ["Tomek", "Aneta", "Marcin", "Jurek", "Honorata"];

const UsersList = ({users}) => {
    if (users.length > 0) {
        return (
            <ul>
                {users.map( user => <li key={user}>{user}</li>)}
            </ul>
        );
    }

    return (
        <p>no results!</p>
    );
}

class List extends React.Component {
    constructor() {
        super();

        this.state = {
            filteredUsers: usersName
        }

        this.filterUsers = this.filterUsers.bind(this);
    }


    filterUsers(e) {
        const text = e.currentTarget.value;
        const filteredUsers = this.getFilteredUsers(text);

        this.setState({
            filteredUsers
        });
    }

    getFilteredUsers(text) {
        return usersName.filter( user => user.toLowerCase().includes(text.toLowerCase()))
    }


    render() {
        return (
            <div className="list">
                <input onInput={this.filterUsers}></input>
                <UsersList users={this.state.filteredUsers} />
            </div>
        );
    }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <List />
      </div>
    );
  }
}

export default App;
