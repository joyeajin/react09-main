import './App.css';
import {useCallback, useState} from 'react';
import TodoContainer from './components/TodoContainer/index';
import TodoTitleArea from './components/TodoTitleArea/index';
import { setItem,getItem } from './lib/storage';
import debounce from 'lodash.debounce';

const debounceSetItem = debounce(setItem,3000)

function App() {
  const [todos , setTodos]=useState(getItem('todo') || [])
  const [selectedTodoIndex, setSelectedTodoIndex] = useState(0);

  const setTodo = useCallback((newTodo) => { //새로 적은 값으로 todos를 교체
    const newTodos = [...todos]; //todos가 훼손되지 않도록 복사. 새로운 newTodos 배열이 생긴것.
    newTodos[selectedTodoIndex]=newTodo;
    setTodos(newTodos);
    // localStorage.setItem('todo',JSON.stringify(newTodos))
    debounceSetItem('todo',newTodos)
  },[selectedTodoIndex, todos])

  const addTodo = useCallback(() => {
    const newTodos=[
      ...todos,
      {
        title:'😙 Untitled',
        content: ''
      }
    ]
    setTodos(newTodos)
    setSelectedTodoIndex(todos.length);
    // localStorage.setItem('todo',JSON.stringify(newTodos))
    debounceSetItem('todo',newTodos)
  },[todos])

  const deleteTodo = useCallback((index) => {
    const newTodos = [...todos];
    newTodos.splice(index,1) //인덱스부터 1개까지 삭제된 배열 리턴
    setTodos(newTodos)
    if(index===selectedTodoIndex){
      setSelectedTodoIndex(0);
    }
    // localStorage.setItem('todo',JSON.stringify(newTodos))
    debounceSetItem('todo',newTodos)
  },[selectedTodoIndex, todos])

  return (

    <div className="App">
      <TodoTitleArea 
      todos={todos}
      selectedTodoIndex={selectedTodoIndex}
      setSelectedTodoIndex={setSelectedTodoIndex}
      addTodo={addTodo}
      deleteTodo={deleteTodo}
      />
      <TodoContainer 
      todo={todos[selectedTodoIndex]}
      setTodo={setTodo}
      />
    </div>
  );
}

export default App;
