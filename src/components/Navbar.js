import React from 'react'



export const Navbar = ({brand}) => {
    return (
        <nav className="navbar navbar-green">
        <div className="container">
            <a className="navbar-brand text-uppercase" href="/">{brand}</a>
        </div>
        
    </nav>
    )
}

export default Navbar;
