import {configureStore} from '@reduxjs/toolkit'
import TodoReducer from '../Features/Todo/slice'

const store = configureStore({
    reducer : {
        todos : TodoReducer   // slect the state from the store using the name as state['todos']
    }
})

export {
    store
}