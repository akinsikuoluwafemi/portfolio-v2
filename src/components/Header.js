import React, { Fragment } from 'react';
import Link from 'react-router-dom'

const Header = () => {
    return (
        <header className="container">
            <div class="row">
                <div class="col navbar navbar-expand-lg navbar-dark">
                    
                    <a class="navbar-brand" href="#"><img src="https://fontmeme.com/permalink/200327/3f22ab505671d199fb6fc9604b354c0c.png" alt="signature-fonts" border="0"/></a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#contentOfNavbar" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div id="contentOfNavbar" class="collapse navbar-collapse">
                        <ul class="navbar-nav mr-auto">
                            
                        </ul>

                        <ul class="navbar-nav">
                            <li class="nav-item ">
                                <a class="nav-link text-dark d-inline-block  " href="#About">Home</a>
                            </li>
                            <li class="nav-item" >
                                <a class="nav-link text-dark d-inline-block" href="#Portfolio">About</a>
                            </li>
                            <li class="nav-item " >
                                <a class="nav-link text-dark d-inline-block" href="#Announcements">Portfolio</a>
                            </li>
                            <li class="nav-item" >
                                <a class="nav-link text-dark d-inline-block" href="#Announcements">Contact</a>
                            </li>
                       </ul>
                        
                    </div>
                </div>
            </div>
            
        </header>
        
    )
}

export default Header;