import React from "react";



const Form = props => {

  return (
    <form>
    <label htmlFor="topic">Topic</label>
    <input 
      placeholder="example topic"
      type="text"
      className="form-input"
      id="topic"
      required
      onChange={ props.handleInputChange }
      value={props.value}
    ></input>
    </form>
  )
}

export default Form;
