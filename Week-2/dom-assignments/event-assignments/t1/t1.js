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

const ul = document.querySelector('ul');

for (const item of todoList) {
  const li = document.createElement('li');
  //li.innerHTML = item.task;
  <input type="checkbox ${item.completed && 'checked'} id="${item.id}" />;



  <button type="button">Delete</button>

  ul.appendChild(li);

  li.querySelector('input').addEventListener('click', event => {
    console.log('event', event);
    item.completed = !item.completed;

    console.log('todo list', todoList);
  });

  li.querySelector('button').addEventListener('click', event => {
    ul.removeChild(li);
  });

  addForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const task = event.currentTarget("input").value;

    console.log("task", task);

    todoList.push({
      task,
      completed: false,
      id: +new Date()
    })
  });
}








/*
const inputs = document.querySelectorAll("li input");

inputs.forEach(inputs => {
  inputs.addEventListener('click', Event => {
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
