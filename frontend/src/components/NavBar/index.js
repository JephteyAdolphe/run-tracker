import React from 'react'
import {FaBars} from 'react-icons/fa'
import {
    Nav,
    NavbarContainer,
    NavLogo,
    NavElements,
    NavMenu,
    NavItem,
} from './Navigation'

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
                            <button>test button</button>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
