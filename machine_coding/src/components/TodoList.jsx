import React, { useState } from 'react';

export const TodoList = () =>{
    const [todos, setTodos] = useState([]);
    const [inputVal, setInputVal] = useState('');

    const addTodo=()=>{
        if(inputVal){
            setTodos([...todos, {inputVal, completed:false}]);
            setInputVal('');
        }
    }
    const toggleTodo=(index)=>{
        const newTodos = [...todos];
        newTodos[index].completed = !newTodos[index].completed;
        setTodos(newTodos);
    }
    const removeTodo=(index)=>{
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    }

    return(
        <div>
            <h1>To Do List:</h1>
            <input value={inputVal} onChange={(e)=>setInputVal(e.target.value)} />
            <button onClick={addTodo}>Add to do</button>
            {todos.map((todo, index)=>(
                <span>
                <p style={{textDecoration: todo.completed ? 'line-through' : 'none'}}>{todo.inputVal}</p>
                <button onClick={()=>toggleTodo(index)}>Toggle</button>
                <button onClick={()=>removeTodo(index)}>Remove</button>
                </span>
            ))}
        </div>
    )
}