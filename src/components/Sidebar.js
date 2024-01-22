import React from 'react'
import styled from 'styled-components'
import { FaTimes } from 'react-icons/fa'
import { Button } from './Button'


function Sidebar({ clicked, setClicked }) {
    return (
        <SidebarContainer className={clicked ? 'active' : ''}>
            <CloseIcon onClick={() => setClicked(false)} />
            <LinksWrapper>
                <LinkItem onClick={() => setClicked(false)}>About</LinkItem>
                <LinkItem onClick={() => setClicked(false)}>Trips</LinkItem>
                <LinkItem onClick={() => setClicked(false)}>Careers</LinkItem>
                <LinkItem onClick={() => setClicked(false)}>Contact</LinkItem>
            </LinksWrapper>
            <Button big='true' round="true" primary="true" to="/trips">
                Book a flight
            </Button>
        </SidebarContainer>
    )
}

export default Sidebar

const SidebarContainer = styled.div`
    height:100vh;
    width:100%;
    position:absolute;
    top:-120%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:flex-start;
    background-color:#fff;
    z-index:100;
    padding:2rem;
    transition: all 0.3s ease-in-out;

    &.active{
        top:0;
    }
`
const CloseIcon = styled(FaTimes)`
    font-size:2rem;
    padding:0;
    color: #242424;
    box-sizing:content-box;
    cursor:pointer;
    align-self: flex-end;

    &:hover{
        color: #F26A2E;
    }
`
const LinksWrapper = styled.div`
    margin-top: 4rem;
    margin-bottom:2rem;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`
const LinkItem = styled.span`
    font-size:1.8rem;
    color:#242424;
    margin-bottom:1.8rem;
    cursor:pointer;
    transition : all 0.2s ease-in-out;

    &:hover{
        color: #F26A2E;
    }
`