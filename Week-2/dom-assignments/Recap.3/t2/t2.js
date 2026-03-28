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
Open t2 folder in your IDE/editor. The assignment remains unchanged from the first, 
except that for this version, DOM methods are used to add the todo items.

for attribute is added to <label> with htmlFor
*/

// add your code here

// 1. Select the target ul element
const targetList = document.querySelector('ul');

todoList.forEach((todo) => {
  const li = document.createElement('li');
  const checkbox = document.createElement('input');
  const label = document.createElement('label');

  // 3. Configure the checkbox
  checkbox.type = 'checkbox';
  checkbox.id = `todo-${todo.id}`;
  checkbox.checked = todo.completed;

  // 4. Configure the label
  label.htmlFor = `todo-${todo.id}`;
  label.textContent = todo.task;

  li.appendChild(checkbox);
  li.appendChild(label);
  // 6. Add the finished <li> to the <ul> on the page
  targetList.appendChild(li);
});
