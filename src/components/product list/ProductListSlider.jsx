import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Container } from '../GlobalStyles'
import ProductCardOne from '../product cards/ProductCardOne'
import { Box } from '../index'
import { useSelector, useDispatch } from 'react-redux'
import { GetRecommendedProducts } from '../../redux/reducers/productsReducer'

function ProductListSlider() {
    const { recommendedProducts, loading } = useSelector(
        (state) => state.productState
    )
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(GetRecommendedProducts())
    }, [])

    console.log(recommendedProducts)
    return (
        <Box>
            <Container>
                {loading ? (
                    <h1>Loading...</h1>
                ) : (
                    <Swiper slidesPerView={5} spaceBetween={40}>
                        {recommendedProducts.map((product) => (
                            <SwiperSlide key={product.id}>
                                <ProductCardOne product={product} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                )}
            </Container>
        </Box>
    )
}

export default ProductListSlider
