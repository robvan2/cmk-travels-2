import React from 'react'
import styled from 'styled-components'
import { Button } from './Button'
import image from '../assets/images/email2.jpg'

function EmailSection() {
    return (
        <Container>
            <Title>
                Get Access To Exclusive Offers
            </Title>
            <Headline>
                Sign up to our newsletter now to get 100$ off on your first trip!
            </Headline>
            <FormWrapper>
                <Input type='email' placeholder='Enter your Email' autoComplete='off' />
                <Button round='true' primary='true' css={`
                                display:block;
                                width:100%;
                                text-align:center;
                            `} >
                    Sign Up
                </Button>
            </FormWrapper>
        </Container>
    )
}

export default EmailSection

const Container = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    padding: 5rem calc((100vw - 1300px)/2);
    background: linear-gradient(180deg, rgba(0,0,0,0.5) 0%,rgba(0,0,0,0.5) 35%,
         rgba(0,0,0,0.1) 100%), url(${image});
    background-size:cover;
    background-position:center;
    background-repeat:no-repeat;

    @media screen and (max-width:400px){
        padding: 5rem 10px;
    }
`
const Title = styled.h1`
    font-size: clamp(1.5rem,5vw,2rem);
    font-weight:700;
    color: #fff;
    margin-bottom:1.3rem;
    text-align:center;
`

const Headline = styled.p`
    font-size:clamp(1rem,1.5vw,1.5rem);
    font-weight:400;
    text-align:center;
    margin-bottom:1.5rem;
    color: #fff;
`

const FormWrapper = styled.div`
    display:flex;
    flex-direction:column;
    justify-content : center;
    align-items:center;

    @media screen and (max-width:400px){
        width:100%;
        padding: 0 1rem;
    }
`
const Input = styled.input`
    display:block;
    margin-bottom:1.3rem;
    outline:none;
    font-size:1rem;
    border-radius:50px;
    padding:10px 15px;
    border:none;

    @media screen and (max-width:400px){
        width:100%
    }
`