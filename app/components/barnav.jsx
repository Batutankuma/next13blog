'use client';
import { Navbar } from "flowbite-react";
import NavLink from "./navbar";

function NavBarComponent() {
    return (
        <Navbar
            fluid={true}
            rounded={true}
        >
            <Navbar.Collapse className="mx-auto flex-row" >
                <NavLink href="/">Home</NavLink>
                <NavLink href="/about">About</NavLink>
                <NavLink href="/blog">Blog</NavLink>
                <NavLink href="/contact">Contact</NavLink>
            </Navbar.Collapse>
        </Navbar>
    )
}


export default NavBarComponent;