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
Download this ZIP-file, extract it and move the content to the folder where you have your other files for this course.

Open t1 folder in your IDE/editor. In this assignment, you will build upon the previous TODO list assignment
 and implement new features to enhance its functionality. You will continue working with the DOM, event handling, 
 and array manipulation in JavaScript.
Tasks:

Update todoList Array on Item Completion:

Modify the existing TODO list so that users can mark items as completed by checking a checkbox.
Update the todoList array when a user checks an item to be done. Set the completed property of the corresponding item 
in the array to true if the checkbox is checked, or false if it is unchecked.
After each change, log the updated todoList array to the console to verify that the array has been modified correctly.
2p
Add Delete Button to List Items:

For each item in the TODO list, add a "Delete" button that users can click to remove the item.
Implement an event handler so that when the "Delete" button is clicked, the corresponding item is removed from 
the todoList array.
Use removeChild method to remove the item from the TODO list.
After each change, log the updated todoList array to the console to verify that the array has been modified correctly.
4p
Add Button to Add TODO Items:

Introduce an "Add Item" button to the UI. When this button is clicked, open a modal window.
The modal should contain a form with an input field for the new item's name and a "Save" button.
Implement an event handler for the "Save" button that adds a new TODO item to the todoList array. The new item 
should have a default completed property of false.
After each change, log the updated todoList array to the console to verify that the array has been modified correctly.
6p

*/

// add your code here

const ul = document.querySelector('ul');

const addTodoItem = (item) => {
  const li = document.createElement('li');
  li.innerHTML = `
  ${item.task}

  <input type="checkbox" ${item.completed && 'checked'} id="${item.id}" />
  <button type="button">Delete</button>
  `;

  ul.appendChild(li);

  li.querySelector('input').addEventListener('click', (event) => {
    console.log('event', event);
    item.completed = !item.completed;

    console.log('todo list', todoList);
  });

  li.querySelector('button').addEventListener('click', (event) => {
    ul.removeChild(li);

    const index = todoList.findIndex(({id}) => id === item.id);

    todoList.splice(index, 1);

    console.log('todo list', todoList);
  });
};

for (const item of todoList) {
  addTodoItem(item);
}

const addButton = document.querySelector('button.add-btn');

addButton.addEventListener('click', () => {
  document.querySelector('dialog').showModal();
});

const addForm = document.querySelector('dialog form');

addForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const task = event.currentTarget.querySelector('input').value;

  const item = {
    id: +new Date(),
    task,
    completed: false,
  };

  todoList.push(item);
  addTodoItem(item);

  document.querySelector('dialog').close();
  event.currentTarget.querySelector('input').value = '';
});

/*
// argh huono tapa :(
const inputs = document.querySelectorAll('li input');

inputs.forEach(input => {
  input.addEventListener('click', event => {
    console.log('event in more painful way', event);

    for (item in todoList) {
      if (item.id === Number(event.target.id)) {
        item.completed = !item.completed;
      }
    }
  });
});
*/

/*
todoList.forEach(item => {
  const li = document.createElement('li');
  li.innerHTML = item.task;

  ul.appendChild(li);
});

*/
