import { List, Map } from 'immutable';

export const tasks = (tasks = List([]), action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return tasks.push(Map(action.data));
    case 'TOGGLE':
      return tasks.map(task => {
        if (task.get('id') === action.data.id)
          return task.update('completed', completed => !completed);
        else
          return task;
      })
    default:
      return tasks;
  }
}
