import React from 'react'
import '../assets/css/Login.css'

function FormContainer({children , formTitle}) {
  return (
    <div class="container">
    <div class="login-container">
        <div class="login-box">
            <h2>{formTitle}</h2>
            {children}
        </div>
    </div>
</div>
  )
}

export default FormContainer