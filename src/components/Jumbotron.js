import React, { Component } from 'react';
import pp from '../images/Me.JPG';
import Typical from 'react-typical';

class Jumbotron extends Component {
    render(){
        return (
            <div className="jumbo text-center mt-3">
                <div >
                    <img className="jumbo__profilepicture mt-5"/>
                    <h1 className="text-center jumbo__header jumbo__header--text mt-3 text-white ">Hi, I'm Akinsiku Oluwafemi David</h1>
                    <p className="h4 jumbo__intro text-white">I'm a {' '}

                        <Typical
                            loop={Infinity}
                            wrapper="b"
                            steps={[
                                'software developer 💻',
                                1000,
                                'designer 💻',
                                1000,
                                'a builder 🏗',
                                1000,
                                'chief dot connector 🖇',
                                1000,
                                'a fun Person 😃',
                                1000]}
                        />
                    </p>
                    <span class="bb">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                </div>
                <div className="row mt-4">
                    <div className="col-lg-4 col-12"></div>

                    <div class="logo d-flex justify-content-center">
                        <div class="log-con d-flex justify-content-center">
                            <i class="fab fa-github fa-1x"></i>

                        </div>
                        &nbsp;
                        &nbsp;
                        
                        <div class="log-con d-flex justify-content-center">
                            <i class="fab fa-twitter fa-1x tw"></i>

                        </div>
                        &nbsp;
                        &nbsp;
                        

                        <div class="log-con d-flex justify-content-center">
                            <i class="fab fa-facebook-f fa-1x fb"></i>
                        </div>
                        &nbsp;
                        &nbsp;

                        <div class="log-con d-flex justify-content-center">
                            <i class="fab fa-linkedin-in fa-1x in"></i>
                        </div>
                       
                    </div>
                    
                    <div className="col-lg-4 col-12"></div>
                </div>

                
            </div>
        )
    }
}

export default Jumbotron