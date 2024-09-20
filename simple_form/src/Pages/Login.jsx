import React, { useState } from 'react'
import '../assets/css/Login.css'
import FormContainer from '../Components/FormContainer'
import Form from '../Components/Form'

function Login() {
    let [input , setInput] = useState({})

    const handleInput = (e) => {        
        setInput((preValue) => {return {...preValue , [e.target.name] : e.target.value}})
    }

    let inputElements = [
        {
            type : "text" ,
            name : "userName" ,
            onChange : (e)=> handleInput(e) ,
            label : 'User name' ,
            required : true ,
            value : input.userName
        } ,
        {
            type : "password" ,
            name : "password" ,
            onChange :(e)=> handleInput(e),
            label : 'Password' ,
            required : true ,
            value : input.password
        } ,
        {
            type : "number" ,
            name : "phoneNumber" ,
            onChange : (e)=> handleInput(e) ,
            label : 'Phone Number' ,
            required : true ,
            value : input.phoneNumber
        }
    ]

    function handleSubmit(e){
        try {
            e.preventDefault()
        } catch (error) {
            
        }
    }

    return (
       <FormContainer formTitle={'Sign in'}>
            <Form  inputElements={inputElements} onSubmit={handleSubmit}/>
       </FormContainer>
    )
}

export default Login