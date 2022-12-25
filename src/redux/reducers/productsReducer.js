import Axios from './../../helpers/axios'
import { RecommendedProductsListUrl } from '../../helpers/url'

const SET_LOADING = 'SET_LOADING'
const SET_RECOMMENDEDPRODUCTS = 'SET_RECOMMENDEDPRODUCTS'

const initialState = {
    recommendedProducts: [],
    loading: false,
}

function ProductsReducer(state = initialState, action) {
    switch (action.type) {
        case SET_RECOMMENDEDPRODUCTS:
            return { ...state, recommendedProducts: action.payload.products }

        case SET_LOADING:
            return { ...state, loading: action.payload.loading }

        default:
            return state
    }
}

export const SetRecommendedProductsAC = (products) => ({
    type: SET_RECOMMENDEDPRODUCTS,
    payload: { products },
})

export const SetLoadingAC = (loading) => ({
    type: SET_LOADING,
    payload: { loading },
})

export default ProductsReducer

export function GetRecommendedProducts() {
    return async function (dispatch) {
        dispatch(SetLoadingAC(true))
        Axios.get(RecommendedProductsListUrl)
            .then(function (response) {
                dispatch(SetRecommendedProductsAC(response.data.products))
                dispatch(SetLoadingAC(false))
            })
            .catch(function (err) {
                dispatch(SetLoadingAC(false))
            })
    }
}
