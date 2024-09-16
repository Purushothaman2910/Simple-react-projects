import {Route , Routes} from 'react-router-dom'
import Login from './Pages/Login'

function Router(){
  return(
    <Routes>
      <Route path='/' element = {<Login />} />
    </Routes>
  )
}

export default Router