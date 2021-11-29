import React, { useContext, useState } from 'react';

import './Navbar.css';
import DehazeIcon from '@material-ui/icons/Dehaze';
import { useMediaPredicate } from "react-media-hook";
import { useHistory } from 'react-router-dom';

const Navbar = () => {

    const smallerDevice = useMediaPredicate("(max-width: 990px)");

    // const history = useHistory();

    const active = window.location.pathname;

    // const handleNavClick = (item) => {
    //     history.replace(`/${item}`);
    //     history.go(0);
    // }

    return (

        <nav className="navbar fixed-top navbar-expand-lg navbar-light custom-navbar">
            <a className="navbar-brand" href="/"><img width="50px" src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fpng.pngtree.com%2Ftemplates%2Fsm%2F20180611%2Fsm_5b1edb6bcbec0.jpg&imgrefurl=https%3A%2F%2Fpngtree.com%2Fso%2Fl-logo&tbnid=JwHG3CJ18HAy2M&vet=12ahUKEwiHns2m1b30AhU6KbcAHdalBQ0QMygAegUIARDQAQ..i&docid=QrtSzkES5-K3hM&w=360&h=360&itg=1&q=l%20logo%20png&ved=2ahUKEwiHns2m1b30AhU6KbcAHdalBQ0QMygAegUIARDQAQ" alt="" /></a>

            {smallerDevice && <DehazeIcon className="toggle-button" id="nav-toggle-button"
                type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation"
            />}

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="text-decoration-none" href="/"><h5 className={`custom-nav-item mr-5 + ${active == '/' ? "nav-active" : ""}`}>Home</h5></a>
                    </li>
                    <li className="nav-item">
                        <a className="text-decoration-none" href="/about"><h5 className={`custom-nav-item mr-5 + ${active == '/about' ? "nav-active" : ""}`}>About Me</h5></a>
                    </li>
                    <li className="nav-item">
                        <a className="text-decoration-none" href="/portfolio"><h5 className={`custom-nav-item mr-5 + ${active == '/portfolio' ? "nav-active" : ""}`}>Portfolio</h5></a>
                    </li>
                    <li className="nav-item">
                        <a className="text-decoration-none" href="/blogs"><h5 className={`custom-nav-item mr-5 + ${active == '/blogs' ? "nav-active" : ""}`}>Blog</h5></a>
                    </li>
                    <li className="nav-item">
                        <a className="text-decoration-none" href="/contact"><h5 className={`custom-nav-item mr-5 + ${active == '/contact' ? "nav-active" : ""}`}>Contact</h5></a>
                    </li>
                </ul>
            </div>
        </nav>

    );
};

export default Navbar;