import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { addTask, toggle } from '../actions';

const Todos = React.createClass({
  propTypes: {
    items: PropTypes.object,
    toggle: PropTypes.func
  },

  render() {
    const { items, toggle } = this.props
    return <div>
      <ul>
        {items.map((task) =>
          <li key={task.get('id')} className={task.get('completed') ? 'completed' : ''}>
            <span onClick={() => toggle(task.get('id'))}>{task.get('body')}</span>
            <span><Link to={`/tasks/${task.get('id')}`}>show</Link></span>
          </li>
        )}
      </ul>
      <Link to='/thing'>thing component</Link>
    </div>
  }
})

export const TodoList = connect(
  (state) => ({ items: state.tasks }),
  (dispatch) => ({
    addTask: body => dispatch(addTask(body)),
    toggle: id => dispatch(toggle(id))
  })
)(Todos);
