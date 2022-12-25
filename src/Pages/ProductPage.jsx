import React, { useEffect } from 'react'
import Page from '../components/page/Page'
import { useParams } from 'react-router-dom'
import { GetProduct } from '../redux/reducers/productsReducer'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Box } from '../components'

function ProductPage() {
    const { slug } = useParams()
    const { product, loading } = useSelector(state => state.productState)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(GetProduct(slug))
    }, [])

    console.log(product)

    return (
        <Page>
            <Container>
                {
                    loading ? <h1>Loading...</h1> : <Box>
                        {product.name_uz}
                    </Box>
                }
            </Container>
        </Page>
    )
}

export default ProductPage