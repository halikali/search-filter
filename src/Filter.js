import React, { Component } from 'react';
import mainLogo from'./assets/avatar.png';
export default class filter extends Component {
        state = {
            users : [],
            searchText: ""
        };
    

    fetchUsers = () => {
        fetch('https://jsonplaceholder.typicode.com/users'). then(response => response.json()) .then(data => data.map( item => this.setState({users : data}))  )
    
    };

    onChangeHandler = (event) => {
       this.setState({searchText : event.target.value});
    }

    render() {
        let filteredNames = this.state.users.filter((user) => {
            return user.name.toLowerCase().indexOf(this.state.searchText)   !== -1 || user.username.toLowerCase().indexOf(this.state.searchText) !==-1
        }) ; 
        return (
            <div>
                <input placeholder="Search" onChange={ this.onChangeHandler}/>
                {/* <button onClick={this.fetchUsers}  > Get Users</button> */}
                <a href="#" class="button" onClick={this.fetchUsers} > Get Users </a>
                {filteredNames.map(item => (<li key={item.id}>
                    <div className="profile-card-container">
                        <div className="profile-card-header">{ item.username}</div>
                        <div className="profile-card-body">
                        <img src={mainLogo} id="profile-photos" />
                            <h2 id="name">{item.name}</h2>
                            <p id="email"> {item.email}</p>
                            <p id="phone"> {item.phone}</p>
                        </div>
                    </div>
                    </li>))}
            </div>
        )
    }
}