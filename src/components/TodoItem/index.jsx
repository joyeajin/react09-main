import React from 'react';
import './index.css';

const TodoItem = ({children, onClickItem,isSelected,onClickDelete}) => {
    return (
        <div 
        onClick={onClickItem}  //onClickItem={() => {setSelectedTodoIndex(index)}} //TodoList에 있음
        className={isSelected ? 'TodoItem active' : 'TodoItem'}
        >
            {children}
            <button className='TodoItem_deleteBtn'
            onClick={onClickDelete}
            >Del</button>
            
        </div>
    );
};

export default TodoItem;