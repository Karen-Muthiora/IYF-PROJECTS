import React, { useState } from 'react';
import '../App.css';


const Dynamic= () =>{
  const [inputValue, setInputValue] = useState('');
  const [items, setItems] = useState([]);


  const handleAddItem = () => {
    if (inputValue.trim() === '') return;
    setItems([...items, inputValue]);
    setInputValue('');
  };

  return (
    <div className="app-container">
      <div className='app-card'>
      <h1 className='app-container'>Dynamic List Manager</h1>
      <div className="input-group">
        <input
          type="text"
          placeholder="Enter an item"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handleAddItem}>Add Item</button>
      </div>
      <div className="list-container">

        {items.length===0?(<p></p>
        ):(
          <ul>
            {items.map((item,index)=>(
              <li key={index}
              >{item}</li>
            ))}
          </ul>
        )
      }
      </div>
     </div>
     </div>
  
  );
};

export default Dynamic;

