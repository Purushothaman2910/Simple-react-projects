import React from 'react'
import '../assets/css/Login.css'
import { useId } from 'react'

function InputBoxes({onChange , label ,type , name , required ,value }) {
    let id = useId()
  return (
    <div className="input-group">
        <label htmlFor = {id}>{label}</label>
        <input 
        type={type} 
        id={id} 
        name={name} 
        onChange={onChange}
        required = {required}
        value={value || ''} />
    </div>
  )
}

export default InputBoxes