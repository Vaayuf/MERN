import React from 'react';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
    return (
        <>
            <div className="">
                <div className="row">
                    <div className="col col-10 container-fluid " >
                        <nav class="navbar navbar-expand-sm bg-light navbar-light rounded-bottom">
                            <NavLink className="navbar-brand fontchangeBrand" activeClassName="fontchangeBrand" to="/home" >theCPlusPlus</NavLink>
                            <ul class="navbar-nav ml-auto fontchangeList">

                                <li class="nav-item ">
                                    <NavLink className="nav-link" activeClassName="active" to="/search">Search</NavLink>

                                </li>

                                <li class="nav-item">
                                    <NavLink className="nav-link" to="/service" activeClassName="active">Service</NavLink>
                                </li>

                                <li class="nav-item ">
                                    <NavLink className="nav-link" to="/contact" activeClassName="active">Contact</NavLink>

                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;