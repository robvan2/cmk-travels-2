import React from 'react'
import styled from 'styled-components'
import { GiEarthAfricaEurope } from 'react-icons/gi'
import { MdAirplanemodeActive, MdTimer } from 'react-icons/md'
import { FaMoneyCheck } from 'react-icons/fa'

const statsData = [
    {
        icon: (<GiEarthAfricaEurope color="#047bf1" />),
        title: 'Over 100 Destinations',
        description: 'Travel to over 100 unique places'
    },
    {
        icon: (<MdAirplanemodeActive color="#f3a82e" />),
        title: '1 Million Trips Made',
        description: 'Over 1 million trips completed last year'
    },
    {
        icon: (<MdTimer color="#f34f2e" />),
        title: 'Fastes Support',
        description: 'Access our support team 24/7'
    },
    {
        icon: (<FaMoneyCheck color="#3af576" />),
        title: 'Best Deals',
        description: 'Offer the best prices'
    }
]
function Stats() {
    return (
        <StatsContainer>
            <Heading>
                Why Choose Us?
            </Heading>
            <Wrapper>
                {statsData.map((item, key) => (
                    <StatsBox key={key}>
                        <Icon>
                            {item.icon}
                        </Icon>
                        <Title>
                            {item.title}
                        </Title>
                        <Description>
                            {item.description}
                        </Description>
                    </StatsBox>
                ))}
            </Wrapper>
        </StatsContainer>
    )
}

export default Stats

const StatsContainer = styled.div`
    width:100%;
    background-color:#fff;
    color: #000;
    display:flex;
    flex-direction:column;
    justify-content:center;
    padding: 4rem calc((100vw - 1300px)/2);
`
const Heading = styled.h1`
    text-align:start;
    font-size: clamp(1.5rem,5vw,2rem);
    margin-bottom:3rem;
    padding:0 2rem;
`
const Wrapper = styled.div`
    display:grid;
    grid-template-columns:repeat(4,1fr);
    grid-gap:10px;

    @media screen and (max-width:768px){
        grid-template-columns: 1fr;
    }
`
const StatsBox = styled.div`
    height:100%;
    width:100%;
    padding:2rem;
`
const Title = styled.p`
    font-size:clamp(1.2rem,1.5vw,1.5rem);
    margin-bottom:0.5rem;
`
const Icon = styled.span`
    font-size:3rem;
    margin-bottom:1rem;
`
const Description = styled.p`
    font-size: clamp(1rem,1.2vw,1.3rem);
`