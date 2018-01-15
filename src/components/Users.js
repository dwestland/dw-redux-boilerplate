import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import getUsers from '../actions/get_users';

class Users extends Component {

  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    return (
      <div>
        <h1>Users</h1>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getUsers: getUsers,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);