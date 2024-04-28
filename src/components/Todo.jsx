import {useState,useRef} from 'react';
import Items from './Items';
import Header from './Header';
import '../styles/todo.css'

const Todo = () => {
    const [todo, setTodo] = useState(JSON.parse(localStorage.getItem('todo'))||[])
    const inputRef = useRef(null)
    localStorage.setItem('todo',JSON.stringify(todo))



    const handleclick =()=>{
        inputRef.current.focus()
        const input = inputRef.current.value
        setTodo([...todo,{item:input,
        id:Math.floor(Math.random()*10000),checked:false}])
    }
    return (
     <div className='container'>
       
       <div className="additems">
           <input type="text" id="input" ref={inputRef} placeholder='enter your list' autoFocus required/>
           <button type="button"id='button'onClick={handleclick}>
             add
           </button>
       </div>
       <Items todo={todo} setTodo={setTodo}/>
     </div>
    )
}

export default Todo;