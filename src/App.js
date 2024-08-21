import { useEffect, useState } from 'react';
import './App.css';
import InputArea from './components/InputText';
import Taskitem from './components/Taskitem';


function App() {
  const [items, setItems] = useState(() => {
    const savedItems = localStorage.getItem('items');
    return savedItems ? JSON.parse(savedItems) : [];
  });

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  const addItems = (inputText) =>{
    if(inputText === "") {
      alert("Invalid Input");
      return;
  }
    setItems((prevItems)=>{
      return[...prevItems, inputText]
    })

  }

  const deleteitem =(id)=>{
    setItems((prevItems)=>{
      return prevItems.filter((items, index)=>{
        return index!==id;
      })
    })
  }

  return (
    <div className="container">
      <div className='heading'>
        <h1>Task List</h1>
      </div>
      <InputArea additems={addItems} />
      <div>
        <ul>
          {
            items.map((items, index)=>{
              return(
                <Taskitem key={index} text={items} deleteitem={deleteitem} id={index} />
              )
            })
          }
        </ul>
      </div>
    </div>
  );
}

export default App;
