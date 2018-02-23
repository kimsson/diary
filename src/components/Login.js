import React, { Component } from 'react';

class Login extends Component {

  render() {
    return(
      <div className="container-fluid">
        <div className="row text-center">
          <div className="col-sm-12 jumbotron">
            <h1>
            Login with your favourite <b>Social Network</b>
            </h1>
          </div>
          <div className="col-sm-6">
            <button className="btn btn-danger btn-lgn">Login with Google</button>
            <button className="btn btn-success btn-lgn">Login with Twitter</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Login;
