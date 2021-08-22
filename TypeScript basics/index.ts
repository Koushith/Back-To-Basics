import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

axios.get(url).then((res) => {
  const todo = res.data;
  console.log(todo);
  const ID = todo.id;
  const title = todo.title;
  const finished = todo.finished;
  console.log(`
  Todo with ID: ${ID}
  Title: ${title};
  fisished? ${finished}
  `);
});
