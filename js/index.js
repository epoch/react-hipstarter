import React from 'react';
import { createStore, combineReducers } from 'Redux';
import { render } from 'react-dom';
import { Provider, connect } from 'react-redux';
import { TodoList } from './components/todoList';
import { TaskDetails } from './components/taskDetails';
import Thing from './components/thing';
import { addTask } from './actions';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import { tasks } from './reducers';

// const store = createStore(combineReducers({
//   tasks: tasks,
//   router: routerReducer
// }));

// createStore takes an action handler function (reducer)
const store = createStore(function(state = {}, action) {
  // state tree
  return {
    tasks: tasks(state.tasks, action),
    routing: routerReducer(state.router, action)
  }
});

const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={TodoList} />
      <Route path='/thing' component={Thing} />
      <Route path='/tasks/:taskId' component={TaskDetails} />
    </Router>
  </Provider>,
  document.getElementById('root')
);

store.subscribe(function() {
  console.log(store.getState());
})

// function that send an action
window.add = (body) => {
  store.dispatch(addTask(body));
}
