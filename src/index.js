// React Required
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Create Import File
import './index.scss';

import PageScrollTop from './Components/BackToTop';


// Dark Home Layout 
import DarkPortfolioLanding from './Components/PortfolioLanding';

// Element Layout
import error404 from "./elements/error404";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'react-modal-video/css/modal-video.css';



// Blocks Layout
import { BrowserRouter, Switch, Route  } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

class Root extends Component{
    render(){
        return(
            <BrowserRouter basename={'/'}>
                <PageScrollTop>
                    <Switch>
                        <Route path={`${process.env.PUBLIC_URL}/`} component={DarkPortfolioLanding}/>
                        <Route exact path='https://www.apeapparel.xyz' />
                        <Route path={`${process.env.PUBLIC_URL}/404`} component={error404}/>
                        <Route component={error404}/>
                    </Switch>
                </PageScrollTop>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<Root/>, document.getElementById('root'));
serviceWorker.register();