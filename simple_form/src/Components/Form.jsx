import React from 'react'
import '../assets/css/Login.css'
import InputBoxes from './InputBoxes'
import Submit from './Submit'
import LinkComponent from './LinkComponent'

function Form({inputElements = [] , otherElements = [] ,onSubmit}) {
  return (
      <form onSubmit={onSubmit}>
            {
              (inputElements.length === 0) ? (
                <h1>No inputs given</h1>
              ) : inputElements.map((input) =>(
                <InputBoxes 
                type={input.type}
                onChange={input.onChange}
                name={input.name}
                label={input.label}
                required={input.required}
                value={input.value}
                 />
              )) 
            }
            {
              (otherElements.length !== 0) && otherElements.map((item) => item )
            }
            <Submit />       
      </form>
  )
}

export default Form


// 