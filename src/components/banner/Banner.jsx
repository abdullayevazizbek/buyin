import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'
import { Box, Container, Img } from '../index'
import banner_img_1 from '../../assets/images/banner_img.png'
import banner_img_2 from '../../assets/images/banner_img_2.jpg'
import banner_img_3 from '../../assets/images/banner_img_3.jpg'
import styled from 'styled-components'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { SliderNextIcon, SliderPrevIcon } from '../../assets/icons'
import { colors } from './../../helpers/colors'

function Banner() {
    const slides = [
        {
            id: 1,
            img: banner_img_1,
        },
        {
            id: 2,
            img: banner_img_2,
        },
        {
            id: 3,
            img: banner_img_3,
        },
    ]

    return (
        <Box mt={20}>
            <Container>
                <StyledSwiper
                    modules={[Navigation, Pagination]}
                    navigation={{
                        prevEl: '.prev',
                        nextEl: '.next',
                    }}
                    pagination={{ clickable: true }}
                    slidesPerView={1}
                    spaceBetween={10}
                >
                    {slides.map((item) => (
                        <SwiperSlide key={item.id}>
                            <BannerSlideWrapper>
                                <Img
                                    src={item.img}
                                    alt='banner img'
                                    objectFit='cover'
                                />
                            </BannerSlideWrapper>
                        </SwiperSlide>
                    ))}
                    <SliderArrow direction='left' className='prev'>
                        <SliderPrevIcon />
                    </SliderArrow>
                    <SliderArrow direction='right' className='next'>
                        <SliderNextIcon />
                    </SliderArrow>
                </StyledSwiper>
            </Container>
        </Box>
    )
}

export default Banner

const BannerSlideWrapper = styled(Box)`
    height: 340px;
    border-radius: 30px;
    overflow: hidden;
`

const StyledSwiper = styled(Swiper)`
    & .swiper-pagination-bullet {
        width: 8px;
        height: 8px;
        background-color: ${colors.white};
        opacity: 1;
        transition: all 0.3s ease;
    }

    & .swiper-pagination-bullet-active {
        border-radius: 10px;
        background-color: ${colors.blue[700]};
        width: 38px;
    }
`
const SliderArrow = styled.button`
    position: absolute;
    top: 50%;
    ${(props) => (props.direction === 'left' ? 'left: 10px;' : 'right: 10px;')}
    width: 58px;
    height: 58px;
    transform: translateY(-50%);
    z-index: 1;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(10px);
`
