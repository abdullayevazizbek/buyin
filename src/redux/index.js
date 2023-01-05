import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import ModalReducer from './reducers/modalReducer'
import CategoryReducer from './reducers/categoryReducers'
import BannerReducer from './reducers/bannerReducer'
import ProductsReducer from './reducers/productsReducer'
import UserReducer from './reducers/userReducer'

const reducers = combineReducers({
    modalState: ModalReducer,
    categoryState: CategoryReducer,
    bannerState: BannerReducer,
    productState: ProductsReducer,
    userState: UserReducer,
})

export const store = createStore(reducers, applyMiddleware(thunk))
