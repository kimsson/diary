import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUser, logout } from '../actions/userAction';

class  Header extends Component {
  constructor(props){
    super(props);
    console.log(props.user)
  }
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button"
              className="navbar-toggle"
              data-toggle="collapse"
              data-target="#myNavbar">
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>

            <Link className="navbar-brand" to="/">
              Diary2018
            </Link>
          </div>
          <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="nav navbar-nav navbar-right">
            {

              this.props.user  === null ? (
                <li>
                  <Link to="/login">login</Link>
                </li>
              ) : (
                <li>
                  <Link to="/" onClick={() => this.props.logout()}>logout</Link>
                </li>
              )
            }
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
function mapStateToProps(state, ownProps) {
  return {
    user: state.user
  }
}
export default connect(mapStateToProps, {getUser, logout})(Header);
