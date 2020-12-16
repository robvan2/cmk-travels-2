import React from 'react'
import styled from 'styled-components'
import { Button } from './Button'

function HeroSection() {
    return (
        <HeroContainer>
            <HeroBg>
                <HeroBgVideo src="/videos/video2.mp4" type="video/mp4" autoPlay loop muted />
            </HeroBg>
            <HeroContent>
                <HeroH1>Unreal Destinations</HeroH1>
                <HeroHeadline>Out of this world</HeroHeadline>
                <Button to='/about' primary="true" big="true" round="true">Travel Now</Button>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection

const HeroContainer = styled.div`
    width:100%;
    height:100vh;
    display:flex;
    padding:0;
    margin:0;
    margin-top:-68px;
    background-color:#0c0c0c;
    justify-content:center;
    align-items:center;
    position:relative;

    :before{
        content:"";
        position:absolute;
        top:0;
        left:0;
        right:0;
        bottom: 0;
        background-color: rgba(0,0,0,0.3);
        z-index:1;
    }
`
const HeroBg = styled.div`
    position:absolute;
    width:100%;
    height:100%;
    z-index:0;
`
const HeroBgVideo = styled.video`
    height:100%;
    width:100%;
    object-fit:cover;
`
const HeroContent = styled.div`
    color:#fff;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    text-align:center;
    z-index:2;
    padding:0 16px;
    padding-top:10%;
`
const HeroH1 = styled.h1`
    font-size: clamp(1.5rem,6vw,4rem);
    font-weight:700;
    margin-bottom:24px;
    letter-spacing:3px;
`
const HeroHeadline = styled.p`
    font-size:clamp(1rem,3vw,2rem);
    font-weight:400;
    margin-bottom:32px;
`