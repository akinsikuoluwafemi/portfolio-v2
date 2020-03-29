import React from 'react';
import {Route, Switch, BrowserRouter as Router, Link} from 'react-router-dom'


const Navigation = () => {
    return (
            
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/contact" component={Contact} />

            

            

        </Switch>

    )
}

export default Navigation;