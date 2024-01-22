import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { Button } from './Button'
import { ImLocation } from 'react-icons/im'

function Trips({ heading }) {
    const data = useStaticQuery(graphql`
        query TripsQuery{
            allTripsJson {
                edges {
                  node {
                    name
                    button
                    alt
                    image {
                      childImageSharp {
                        fluid {
                          ...GatsbyImageSharpFluid
                        }
                      }
                    }
                  }
                }
            }
        }
    `)
    function getTrips(data) {
        let trips = [];
        data.allTripsJson.edges.forEach((item, index) => {
            trips.push(
                <ProductCard key={index}>
                    <ProductImg fluid={item.node.image.childImageSharp.fluid} />
                    <ProductInfo>
                        <ProductTitle><ImLocation /> {item.node.name}</ProductTitle>
                        <Button to='' primary='true' round='true'
                            css={`
                                font-size:14px;
                                display:inline-block;
                            `}
                        >
                            {item.node.button}
                        </Button>
                    </ProductInfo>
                </ProductCard>
            )
        })
        return trips;
    }
    return (
        <ProductsContainer>
            <ProductsHeading>
                {heading}
            </ProductsHeading>
            <ProductsWrapper>
                {getTrips(data)}
            </ProductsWrapper>
        </ProductsContainer>
    )
}

export default Trips

const ProductsContainer = styled.div`
    min-height:100vh;
    padding:5rem calc((100vw - 1300px) / 2);
    color: #fff;
`
const ProductsHeading = styled.h1`
    font-size:clamp(1.8rem,5vw,3rem);
    text-align:center;
    margin-bottom:5rem;
    color: #000;
`
const ProductsWrapper = styled.div`
    display:grid;
    grid-template-columns:repeat(4,1fr);
    grid-gap:10px;
    justify-content:center;
    padding:0 2rem;

    @media screen and (max-width:1200px){
        grid-template-columns:1fr 1fr;
    }
    @media screen and (max-width:768px){
        grid-template-columns:1fr;
    }
`
const ProductCard = styled.div`
    position:relative;
    border-radius:10px;
    box-shadow: 0 5px 10px rgba(0,0,0,0.2);
    height:500px;
    overflow:hidden;
`
const ProductImg = styled(Img)`
    height:100%;
    object-fit:cover;
    transition: all 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);
    filter:brightness(70%); 

    &:hover {
        filter:brightness(100%); 
    }
`
const ProductInfo = styled.div`
    display : flex;
    flex-direction:column;
    position:absolute;
    z-index:12;
    transform:translate(10%,-120%);
`
const ProductTitle = styled.h3`
    color: #fff;
    font-weight:400;
    font-size: 1rem;
    margin-bottom:16px;
`
