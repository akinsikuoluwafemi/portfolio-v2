import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Jumbotron from './Jumbotron'
import '../css/App.scss';



const App = () => {
    return (
        <div >

            <div className="parallax ">
                <Header />
                <div className="container text-center">
                    <Jumbotron />

                </div>
            </div>

            <div style={{ height: "700px" }} className="bg-icon">
                <div className="container-fluid overlay"></div>
                
                Scroll Up and Down this page to see the parallax scrolling effect.
                This div is just here to enable scrolling.
                Tip: Try to remove the background-attachment property to remove the scrolling effect.
            </div>

            <div class="boy">

            </div>
            
            

            <div class="road"></div>

            
            <div style={{ height: "700px" }} className="bg-icon">
                
                Scroll Up and Down this page to see the parallax scrolling effect.
                This div is just here to enable scrolling.
                Tip: Try to remove the background-attachment property to remove the scrolling effect.
            </div>
            <div className="parallax"></div>

            <div class="footer-copyright text-center bg-dark text-white py-3 bg-icon">© 2020 Copyright:
                <a href="#"> Femi Akinsiku</a>
            </div>

        </div>
    )
}

export default App;