import React from 'react'
import styled from 'styled-components'

function Trips() {
    return (
        <ProductsContainer>
            <ProductsHeading>
                Heading
            </ProductsHeading>
            <ProductWrapper>
                Wrapper
            </ProductWrapper>
        </ProductsContainer>
    )
}

export default Trips

const ProductsContainer = styled.div`
    min-height:100vh;
    padding:5rem calc((100vw - 1300px) / 2);
    background-color:cornflowerblue;
    color: #fff;
`
const ProductsHeading = styled.h1`
    font-size:clamp(1.2rem,5vw,3rem);
    text-align:center;
    margin-bottom:5rem;
`
const ProductWrapper = styled.div`

`
