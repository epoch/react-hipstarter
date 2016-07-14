
const uid = () => Math.random().toString(34).slice(2);

export const addTask = body => ({
  type: 'ADD_TASK',
  data: {
    id: uid(),
    body: body,
    completed: false
  }
});

export const toggle = id => ({
  type: 'TOGGLE',
  data: {
    id: id
  }
});
