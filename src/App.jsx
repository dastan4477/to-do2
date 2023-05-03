import { useState } from 'react'
import './App.css'

function App() {
  const [newItem, setItem] = useState("");
  const [todos, setTodos] = useState([]);

  const addItem = () => {
    if (!newItem) {
      alert("Enter an item")
      return
    }

    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem
    }
    setTodos([...todos, item])
    setItem("")
  }

  const removeItem = (index) => {
    const newTodos = todos.filter(
      item => item.id != index
    )
    setTodos(newTodos)
  }

  return (
    <div className='wrapper'>
      <input 
      type='text' 
      value={newItem}
      placeholder='Add a new item'
      onChange={e => setItem(e.target.value)}
      />
      <button onClick={() => addItem()}>Add</button>
      
      <ul>
        {todos.map(
          item => <li key={item.id}>{item.value}
          <button onClick={() => removeItem(item.id)}>-</button>
          </li>)}
      </ul>
    </div>
  )
}

export default App
