import React from "react";

function Form({form, onHandleChange, onHandleSubmit}) {
    return (
      <form className="form" onSubmit={onHandleSubmit}>
        <div className="form-name-container">
          <label className="form-label-name" htmlFor="form-name">Название</label>
          <input id="form-name" name="name"  value={form.name} onChange={onHandleChange}></input>
        </div>
        <div className="form-timeZone-container">
          <label className="form-label-timeZone" htmlFor="form-timeZone">Временная зона</label>
          <input  id="form-timeZone" name="timeZone" value={form.timeZone} onChange={onHandleChange}></input>
        </div>
        <button className="add-clock">Добавить</button>
      </form>
    );
  }
  
  export default Form;