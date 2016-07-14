import React from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router';
// import { addTask, toggle } from '../actions';

const Details = React.createClass({
  render() {
    const { router } = this.props
    return <div>details {router.params.taskId}</div>
  }
})

export const TaskDetails = connect(
  (state, router) => ({ router: router })
)(Details);
