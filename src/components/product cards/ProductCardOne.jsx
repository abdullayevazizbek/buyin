import React from 'react'
import styled from 'styled-components'
import { colors } from './../../helpers/colors'
import { Flex, H5, H6, Img, Small } from '../index'
import { VerifyIcon } from '../../assets/icons'

function ProductCardOne(props) {
    const { product } = props
    return (
        <Wrapper>
            <ProductImg>
                <Img src={product.img} />
            </ProductImg>
            <H6>{product.name_uz}</H6>
            <Flex>
                <VerifyIcon />
                <Small>в наличии</Small>
            </Flex>

            <H5>{product.price}</H5>
        </Wrapper>
    )
}

export default ProductCardOne

const Wrapper = styled.div`
    background: ${colors.white};
    box-shadow: 0px 4px 10px rgba(73, 118, 232, 0.1);
    border-radius: 10px;
    height: 336px;
`
const ProductImg = styled.div`
    height: 43%;
    text-align: center;
`
