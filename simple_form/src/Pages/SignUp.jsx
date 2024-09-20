import React , {useState} from 'react'
import FormContainer from '../Components/FormContainer'
import Form from '../Components/Form'

function SignUp() {
    let [input , setInput] = useState({})

    const handleInput = (e) => {        
        setInput((preValue) => {return {...preValue , [e.target.name] : e.target.value}})
    }

    function handleSubmit(e){
        try {
            e.preventDefault()
        } catch (error) {
            
        }
    }

    let inputElements = [
        {
            type : 'text' ,
            name : 'name',
            id : 1 ,
            value : input['name'] ,
            onChange : (e) => handleInput(e)
        },
        {
            type : 'email' ,
            name : 'email',
            id : 1 ,
            value : input['email'] ,
            onChange : (e) => handleInput(e)
        },
        {
            type : 'password' ,
            name : 'password',
            id : 2 ,
            value : input['password'] ,
            onChange : (e) => handleInput(e)
        },
        {
            type : 'number' ,
            name : 'mobileNumber',
            id : 3 ,
            value : input['mobileNumber'] ,
            onChange : (e) => handleInput(e)
        }
    ]

    let handleSubmit = (e) =>{
        e.preventDefault() ;
        console.log(input) ;
    }


  return (
    <FormContainer formTitle={"signup"} >
        <Form inputElements={inputElements} onSubmit={handleSubmit}/>
    </FormContainer>
  )
}

export default SignUp