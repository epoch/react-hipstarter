var React = require('react');
import { createStore } from 'Redux';
var ReactDOM = require('react-dom');
import { Provider, connect } from 'react-redux';

const uid = () => Math.random().toString(34).slice(2);

const addTask = body => ({
  type: 'ADD_TASK',
  data: {
    id: uid(),
    body: body
  }
});

// state transformer for tasks []
function tasks(tasks = [], action) {
  switch (action.type) {
    case 'ADD_TASK': {
      let newTask = Object.assign({}, action.data);
      return [...tasks, newTask];
    }
    default:
      return tasks;
  }
}

const store = createStore(tasks);

// function that send an action
window.add = (body) => {
  store.dispatch(addTask(body));
}

store.subscribe(function() {
  console.log(store.getState())
})

const Todos = React.createClass({
  render() {
    return <div>
      <ul>
        {this.props.items.map((task) =>
          <li key={task.id}>{task.body}</li>
        )}
      </ul>
    </div>
  }
})

const TodoList = connect(
  (state) => ({ items: state }),
  (dispatch) => ({ addTask: body => dispatch(addTask(body)) })
)(Todos);

ReactDOM.render(
  <Provider store={store}>
    <TodoList />
  </Provider>,
  document.getElementById('root')
);
