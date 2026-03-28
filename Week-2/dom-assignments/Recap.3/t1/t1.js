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
/*
Assignments
Download this ZIP-file, 
extract it and move the content to the folder where you have your other files for this course.

Open t1 folder in your IDE/editor. In t1.js there is an array of todo items called todoList. 
Add the todo items to ul element in t1.html by using insertAdjacentHTML method. The structure of the end result should be this:

<li>
   <input type="checkbox" id="todo-1" checked>
   <label for="todo-1">Buy milk</label>
</li>
<li>
   <input type="checkbox" id="todo-2">
   <label for="todo-2">Buy eggs</label>
</li>
<li>
   <input type="checkbox" id="todo-3" >
   <label for="todo-3">Buy bread</label>
</li>
note: if completed property is true, the checkbox should be automatically checke
*/

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
