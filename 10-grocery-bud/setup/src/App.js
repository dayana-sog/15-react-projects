import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function App() {
  const [name, setName] = useState('');
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [alert, setAlert] = useState({
    show: false,
    msg: '',
    type: '',
  });

  const handleSubmit = e => {
    e.preventDefault();
    console.log('form', name);

    if(!name) {
      //alert
    } else if (name && isEditing) {
      //deal with edit
    } else {
      //Show the alert

      const newItem = {
        id: new Date().getTime().toString(),
        title: name,
      };
      setList([...list, newItem]);
      setName('');
    }


  };

  return (
    <section className="section-center">
      <div className="grocery-container">
        <form className="grocery-form" onSubmit={handleSubmit}>
          {alert.show && <Alert />}
          <h3>Grocery Bud</h3>
          <div className="form-control">
            <input 
              type="text" 
              className="grocery" 
              placeholder="ex: eggs" 
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <button type="submit" className="submit-btn">
              {isEditing ? 'edit' : 'submit'}
            </button>
          </div>
        </form>

        <List items={list}/>
        <button className="clear-btn">
          Clear Item
        </button>
      </div>
    </section>
  );
}

export default App
