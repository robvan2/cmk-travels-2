import React from 'react'
import { IoMdCheckmarkCircleOutline } from 'react-icons/io'
import { FaRegLightbulb } from 'react-icons/fa'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'
function Testimonials() {
    const data = useStaticQuery(graphql`
        query MyQuery {
            allFile(filter: {ext: {regex: "/(jpg)|(png)|(jpeg)/"}, 
            name: {in: ["guy", "girl"]}}) {
            edges {
                node {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
                }
            }
            }
        }
    `)
    return (
        <TestimonialsContainer>
            <TopLine>
                Testimonials
            </TopLine>
            <Description>
                What people are saying
            </Description>
            <ContentWrapper>
                <ColomnOne>
                    <Testimonial>
                        <IoMdCheckmarkCircleOutline
                            css={`
                                color:#3fffa8;
                                margin-bottom:1rem;
                                font-size:2rem;
                            `}
                        />
                        <h3>
                            Sean Michaels
                        </h3>
                        <p>
                            "The greatest experience in my life! Lorem ipsum dolor sit amet
                            consectetur adipisicing elit. Iusto, sint."
                        </p>
                    </Testimonial>
                    <Testimonial>
                        <FaRegLightbulb
                            css={`
                                color:#f9b19b;
                                margin-bottom:1rem;
                                font-size:2rem;
                            `}
                        />
                        <h3>
                            Sarah Kin
                        </h3>
                        <p>
                            "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Dolore nihil eveniet distinctio iure assumenda.
                            Ullam laboriosam odio repellendus error quisquam?"
                        </p>
                    </Testimonial>
                </ColomnOne>
                <ColumnTwo>
                    {data.allFile.edges.map((item, key) => (
                        <TestimonialsImg key={key} alt="testimonials imgage"
                            fluid={item.node.childImageSharp.fluid} />
                    ))}
                </ColumnTwo>
            </ContentWrapper>
        </TestimonialsContainer>
    )
}

export default Testimonials

const TestimonialsContainer = styled.div`
    color: #000;
    background-color:#fcfcfc;
    padding: 5rem calc((100vh - 1300px)/2);
`
const TopLine = styled.h2`
    color: #077bf1;
    font-size:1rem;
    padding-left : 2rem;
    margin-bottom:0.75rem;
`
const Description = styled.p`
    text-align:start;
    padding-left:2rem;
    font-size: clamp(1.5rem,5vw,2rem);
`
const ContentWrapper = styled.div`
    display:grid;
    grid-template-columns:1fr 1fr;
    padding: 0 2rem;
    margin-top: 2rem;

    @media screen and (max-width:768px){
        grid-template-columns:1fr;
    }
`
const ColomnOne = styled.div`
    display:grid;
    grid-template-rows:1fr 1fr;
`
const ColumnTwo = styled.div`
    display:grid;
    grid-template-columns:1fr 1fr;
    grid-gap:10px;
    margin-top:2rem;

    @media screen and (max-width:500px){
        grid-template-columns:1fr;
    }
`
const Testimonial = styled.div`
    padding-top:1rem;
    padding-right:2rem;

    h3{
        font-size:1.5rem;
        font-style:italic;
        margin-bottom:1rem;
    }
    p{
        color: #3b3b3b;
    }
`
const TestimonialsImg = styled(Img)`
    border-radius:10px;
`