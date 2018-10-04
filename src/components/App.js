import React, { Component } from 'react';
import ChatApp from './ChatApp';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { username: '' };
    this.usernameChangeHandler = this.usernameChangeHandler.bind(this);
    this.usernameSubmitHandler = this.usernameSubmitHandler.bind(this);
  }
  usernameChangeHandler(event) {
    this.setState({ username: event.target.value });
  }

  usernameSubmitHandler(event) {
    event.preventDefault();
    this.setState({ submitted: true, username: this.state.username });
  }

  render() {
    if (this.state.submitted) {
       return (
         <ChatApp username={this.state.username} />
       );
     }
    return (
      <form onSubmit={this.usernameSubmitHandler} className="username-container">
       <h1>Online Chat</h1>
       <div>
         <input
           type="text"
           onChange={this.usernameChangeHandler}
           placeholder="Enter Your Name..."
           required />
       </div>
       <input type="submit" value="Enter" />
     </form>
    );
  }
}

export default App;
