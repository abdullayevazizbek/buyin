import { React, useRef } from 'react'
import { Header, GlobalStyles, Banner, Categories } from './components'
import useOnClickOutside from './hooks/useOnClickOutside'
import { useSelector, useDispatch } from 'react-redux'
import { CategoryCloseAC } from './redux/reducers/modalReducer'
import ProductListSlider from './components/product list/ProductListSlider'

function App() {
    const { categoryModal } = useSelector((state) => state.modalState)
    const dispatch = useDispatch()
    const ref = useRef()
    useOnClickOutside(ref, () => dispatch(CategoryCloseAC()))
    return (
        <div>
            <GlobalStyles open={categoryModal} />
            <Header />
            <Banner />
            <Categories customRef={ref} />
            <ProductListSlider />
        </div>
    )
}

export default App
