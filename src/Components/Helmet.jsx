import React, { Component } from "react";
import {Helmet} from 'react-helmet'

class PageHelmet extends Component{
    render(){
        return(
            <React.Fragment>
                <Helmet>
                    <title>{this.props.pageTitle} || Logan Banning Portfolio </title>
                    <meta name="description" content="My Portfolio." />
                </Helmet>
            </React.Fragment>
        )
    }
}


export default PageHelmet;
