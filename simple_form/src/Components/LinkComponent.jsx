import React from 'react'
import '../assets/css/Login.css'
import {Link} from 'react-router-dom'

function LinkComponent({text , to}) {
    return (
        <div class="forgot-password">
            <Link to={to}> {text} </Link>
        </div>
    )
}

export default LinkComponent