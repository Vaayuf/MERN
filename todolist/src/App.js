import React, { useState } from 'react';
import "./index.css";
import ToDoLists from './ToDoLists';

const App = () => {

  const [title, setTitle] = useState();
  const [list, upList] = useState([]);
  // const [delList, delUpList] = useState(list);

  const inputEvent = (event) => {
    setTitle(event.target.value);
  }

  const inputButton = () => {
    upList((val) => {
      return [...val, title];
    });
    setTitle('');
  };

  const deleteItems = (id) => {
    console.log("deleted");

    upList((oldArr) => {
      return oldArr.filter((arrElem, index) => {
        return index !== id;
      })
    })

  };

  return (
    <>
      <div className="mainclass">
        <div className="centerclass">
          <br />
          <h1>To Do List</h1>
          <br />
          <input type="text" placeholder="Add an item" onChange={inputEvent}
            value={title} />
          <button style= {{marginLeft:"10px"}} onClick={inputButton}> + </button>

          <ul>
            {
              list.map((val, index) => {
                return <ToDoLists
                  text={val}
                  key={index}
                  id={index}
                  onSelect={deleteItems}
                />;
              })
            }
          </ul>

        </div>
      </div>
    </>
  );
};

export default App; 