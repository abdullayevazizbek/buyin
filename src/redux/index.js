import { combineReducers, createStore } from 'redux'
import ModalReducer from './reducers/modalReducer'
import CategoryReducer from './reducers/categoryReducers'

const reducers = combineReducers({
    modalState: ModalReducer,
    categoryState: CategoryReducer,
})

export const store = createStore(reducers)
