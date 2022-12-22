import { React, useRef } from 'react'
import { Header, GlobalStyles, Banner, Categories } from './components'
import useOnClickOutside from './hooks/useOnClickOutside'
import { useSelector, useDispatch } from 'react-redux'
import { CategoryCloseAC } from './redux/reducers/modalReducer'

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
        </div>
    )
}

export default App
