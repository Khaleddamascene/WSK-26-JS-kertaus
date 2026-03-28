// array for todo list
const todoList = [
  {
    id: 1,
    task: 'Learn HTML',
    completed: true,
  },
  {
    id: 2,
    task: 'Learn CSS',
    completed: true,
  },
  {
    id: 3,
    task: 'Learn JS',
    completed: false,
  },
  {
    id: 4,
    task: 'Learn TypeScript',
    completed: false,
  },
  {
    id: 5,
    task: 'Learn React',
    completed: false,
  },
];

// add your code here
// Select the target ul element
const targetList = document.querySelector('#todo-container');

// Iterate through the todoList array
todoList.forEach((todo) => {
  // Use a ternary operator to add the 'checked' attribute if completed is true
  const isChecked = todo.completed ? 'checked' : '';

  // Construct the HTML string for the list item
  const html = `
    <li>
      <input type="checkbox" id="todo-${todo.id}" ${isChecked}>
      <label for="todo-${todo.id}">${todo.task}</label>
    </li>`;

  // Use insertAdjacentHTML to add the item to the end of the list
  targetList.insertAdjacentHTML('beforeend', html);
});
