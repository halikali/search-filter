import React, { Component } from 'react'

export default class filter extends Component {
    constructor(props){
        super(props);
        this.state = {
            users : [],
            searchText: ""
        };
    }

    fetchUsers = () => {
        fetch('https://jsonplaceholder.typicode.com/users'). then(response => response.json()) .then(data => data.map( item => this.setState({users : data})))
    };

    onChangeHandler = (event) => {
       this.setState({searchText : event.target.value});

    }
    filteredUsers = () => {
        this.state.users.map(item => item.name);
    }

    render() {
        return (
            <div>
                <input placeholder="Search" onChange={ this.onChangeHandler}/>
                <button onClick={this.fetchUsers} > Get Users</button>
                {this.state.users.map(item => (<li>{ item.name}</li>))}
            </div>
        )
    }
}
