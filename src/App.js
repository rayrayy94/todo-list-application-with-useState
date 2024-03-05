import { useState } from "react";
import TodoForm from "./TodoForm";
import Todos from "./Todos";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [todos, setTodos] = useState([
    {id: 1, title: 'Learn React', completed: false},
    {id: 2, title: 'Watch React Video', completed: true},
    {id: 3, title: 'Make React App', completed: false},
  ]);

  const addTodo = (newTodo)=> {
    setTodos(prevState=> [...prevState, newTodo]);
  };

  const toggleCompleted = (id)=> {
    setTodos(prevState=> {
      return prevState.map(todo => {
        if(todo.id === id){
          return {...todo, completed: !todo.completed}
        }else{
          return todo
        }
      })
    })
  };

  const removeTodo = (id)=> {
    setTodos(prevState=> {
      return prevState.filter(todo=> todo.id !== id)
    });
  }


  return (
    <div className="container">
      <ToastContainer />
      <h1 className="main-title">Todo List</h1>
      <TodoForm addTodo={addTodo} />
      <Todos todos={todos} toggleCompleted={toggleCompleted} removeTodo={removeTodo} />
    </div>
  );
}

export default App;
