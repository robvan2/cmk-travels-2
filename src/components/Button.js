import { Link } from 'gatsby'
import styled from 'styled-components'

export const Button = styled(Link)`
    background-color : ${({ primary }) => (primary ? '#F26A2E' : '#077bf1')};
    white-space:nowrap;
    padding: ${({ big }) => (big ? '16px 40px' : '10px 32px')};
    color: #fff;
    font-size: ${({ big }) => (big ? '20px' : '16px')};
    outline:none;
    border:none;
    min-width:100px;
    cursor:pointer;
    text-decoration:none;
    border-radius: ${({ round }) => (round ? '50px' : 'none')};
    transition: all 0.3s !important;

    &:hover{
        background-color : ${({ primary }) => (!primary ? '#F26A2E' : '#077bf1')};
        transform : translateY(-2px);
    }
`