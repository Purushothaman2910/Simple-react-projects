import {Route , Routes} from 'react-router-dom'
import Login from './Pages/Login'
import SignUp from './Pages/SignUp'

function Router(){
  return(
    <Routes>
      <Route path='/' element = {<SignUp />} />
    </Routes>
  )
}

export default Router