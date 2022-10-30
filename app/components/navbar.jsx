'use client';
import { Navbar } from "flowbite-react";
import Link from "next/link";
import { usePathname } from 'next/navigation'

function NavLink({ href, children }) {
    console.log(href);
    let segment = usePathname();
    let active = href === segment;
    return (
        <Navbar.Link>
            <Link className={active ? 'font-bold text-teal-700' : 'font-bold text-black-500'} style={{ margin: '10px' }} href={href}>{children}</Link>
        </Navbar.Link>
    )
}


export default NavLink;