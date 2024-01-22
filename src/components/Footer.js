import React from 'react'
import styled from 'styled-components'

function Footer() {
    return (
        <FooterContainer>
            <FooterBrand>
                <h2>Explorix</h2>
                <p>We strive to create the best experiences for our customers</p>
            </FooterBrand>
            <FooterLinksWrapper>
                <h3>
                    Videos
                </h3>
                <p>
                    Submit Video
                </p>
                <p>
                    Ambassadors
                </p>
                <p>
                    Agency
                </p>
                <p>
                    Influencer
                </p>
            </FooterLinksWrapper>
            <FooterLinksWrapper>
                <h3>
                    Contact Us
                </h3>
                <p>
                    Contact
                </p>
                <p>
                    Support
                </p>
                <p>
                    Destinations
                </p>
                <p>
                    SponsorShips
                </p>
            </FooterLinksWrapper>
            <FooterLinksWrapper>
                <h3>
                    Social Medias
                </h3>
                <p>
                    Facebook
                </p>
                <p>
                    Instagram
                </p>
                <p>
                    Youtube
                </p>
                <p>
                    Twitter
                </p>
            </FooterLinksWrapper>
        </FooterContainer>
    )
}

export default Footer

const FooterContainer = styled.div`
    display:grid;
    grid-template-columns:3fr repeat(3,2fr);
    grid-gap:10px;
    padding:5rem calc((100vw - 1300px)/2);

    @media screen and (max-width:1300px){
        padding:5rem 2rem;
    }
    @media screen and (max-width:768px){
        grid-template-columns:3fr 2fr;
        grid-row-gap:2rem;
    }
`
const FooterBrand = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    height:100%;
    width:100%;
    padding-top:0;
    padding-right:20px;

    h2{
        font-size: clamp(1.5rem,3vw,2rem);
        font-weight:700;
        color:#F26A2E;
        margin-bottom:1.5rem;
    }
    p{
        font-size: 1rem;
        color: #000;
        font-weight:600;
    }
`
const FooterLinksWrapper = styled.div`
    display:flex;
    flex-direction:column;
    align-items:flex-start;

    h3{
        font-size:1rem;
        font-weight:600;
        margin-bottom:1rem;
    }
    p{
        font-size:1rem;
        font-weight:400;
        margin-bottom:10px;
        cursor:pointer;
        :hover{
            border-bottom: 2px solid #000;
            margin-bottom:8px;
        }
    }
`