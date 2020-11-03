import React from 'react'
import {Nav, NavbarContainer, NavLogo} from './Navigation'

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>
                        Run Tracker
                    </NavLogo>
                    <NavElements>
                        <FaBars />
                    </NavElements>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about"></NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
