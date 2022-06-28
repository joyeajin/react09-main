import React from 'react';
import TodoList from '../TodoList/index';
import TodoAddBtn from '../TodoAddBtn/index';
import './index.css';

const TodoTitleArea= ({todos,selectedTodoIndex,setSelectedTodoIndex,addTodo,deleteTodo}) => {
    return (
        <div className='TodoTitleArea'>
            <h1>Planner</h1>
            <TodoList 
            todos={todos}
            selectedTodoIndex={selectedTodoIndex}
            setSelectedTodoIndex={setSelectedTodoIndex}   
            deleteTodo={deleteTodo}
            />
            <TodoAddBtn 
            onClick={addTodo}
            />
        </div>
    );
};

export default TodoTitleArea;