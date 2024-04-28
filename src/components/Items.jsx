import { FaTrash } from "react-icons/fa";
import '../styles/items.css'

const Items = ({todo,setTodo}) => {
  
  const handledelete = (id) => {
    const deletetodo = todo.filter((item)=>item.id !== id)
    setTodo(deletetodo)
  }

  const handlechange = (id) => {
    const checkedtodo = todo.map((item)=>
      item.id === id?{...item,checked:!item.checked}:item
    )
    setTodo(checkedtodo)
    
  }

  return (
    todo.length>0?<ul>{todo.map((item)=>{
     return (
               <li key={item.id}>
                   <input type="checkbox" id="checkbox" onChange={()=>handlechange(item.id)}
                   checked = {item.checked}
                   />
                   {item.item}
                   <FaTrash
                    className="delete"
                    role="button" 
                    onClick={()=>handledelete(item.id)}
                    />
               </li>
            )
    })}</ul>:<p>No items</p>
    
  )
}

export default Items;