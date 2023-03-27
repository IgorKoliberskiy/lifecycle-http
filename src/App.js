import { useState } from 'react';
import './css/style.css';
import Form from './components/Form';
import Clocks from './components/Clocks';
import {nanoid} from "nanoid";

function App() {
  const [clocks, setClocks] = useState([]);
  const [form, setForm] = useState({
    name: '',
    timeZone: ''
  })
  const handleChange = (evt) => {
    const name = evt.target.name;
    const value = evt.target.value;
    setForm((prevForm) => ({...prevForm, [name]: value}));
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (!form.name || !form.timeZone) {
      console.log('Заполните все поля');
      return;
    } 

    const clock = {
      name: `${form.name}`,
      offset: Number(`${form.timeZone}`),
      id: `${nanoid(8)}`
    }

    setForm(({
      name: '',
      timeZone: ''
    }))

    setClocks(prevClocks => [
      ...prevClocks, clock
    ])
  }  
  
  const handleDelete = (evt) => {
    const newClocks = clocks.filter(el => el.id !== evt.target.parentNode.id);
    
    setClocks(newClocks);
  }

  return (
    <div className='container'>
      <Form
        form={form} 
        onHandleChange={handleChange} 
        onHandleSubmit={handleSubmit} 
      ></Form>
      <Clocks
        form={form} 
        clocks={clocks} 
        onHandleDelete={handleDelete}
      ></Clocks>
    </div>
  );
}

export default App;
