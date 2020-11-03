import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Nav = styled.nav`
    background: #000;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: sticky;
    font-size: 1rem;
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    z-index: 1;
    width: 100%;
    height: 80px;
    padding: 0 24px;
    max-width: 1100px;
`

export const NavLogo = styled(Link)`
    color: #red;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
`