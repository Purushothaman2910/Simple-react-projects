import React from 'react'
import FormContainer from '../Components/FormContainer'
import Form from '../Components/Form'
function SignUp() {
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
  return (
    <FormContainer formTitle={"Sign up page"}>
        <Form  inputElements={inputElements}/>
    </FormContainer>
  )
}

export default SignUp