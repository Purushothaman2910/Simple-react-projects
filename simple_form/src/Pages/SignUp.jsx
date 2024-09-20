import React , {useState} from 'react'
import FormContainer from '../Components/FormContainer'
import Form from '../Components/Form'

// function Form({inputElements,handleSubmit}){
//     return (
//         <form onSubmit={handleSubmit}>
//         {
//             inputElements.map((inputElement , index) => (
//                 <input 
//                     key={index} 
//                     type={inputElement.type} 
//                     name={inputElement.name} 
//                     id={inputElement.id} 
//                     value={inputElement.value} 
//                     onChange={inputElement.onChange} 
//                 /> 
//             ))       
//         }
//             <input type="submit" value="submit" />           
//         </form>
//     )
// }



function SignUp() {
    let [input , setInput] = useState({})

    const handleInput = (e) => {        
        setInput((preValue) => {return {...preValue , [e.target.name] : e.target.value}})
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
            type : 'number' ,
            name : 'num',
            id : 1 ,
            value : input['num'] ,
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
            id : 1 ,
            value : input['password'] ,
            onChange : (e) => handleInput(e)
        },
    ]

    let handleSubmit = (e) =>{
        e.preventDefault() ;
        console.log(input) ;
    }


  return (
    <FormContainer formTitle={"signup"} >
        <Form inputElements={inputElements} />
    </FormContainer>
  )
}

export default SignUp