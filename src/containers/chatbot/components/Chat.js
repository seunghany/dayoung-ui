import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Footer from './Footer';
import Dialog from './Dialog';

export default class Chatbot extends Component {

    render() {
        return <div style={{height: "100%"}}>
            <AppBar
                title="Chatbot 쳇봇"
                iconClassNameRight="muidocs-icon-navigation-expand-more" />
            <div className="container-fluid" style={{paddingBottom: "61px",maxHeight:"200px"}}>
                <Dialog />
            </div>
            <div className="container-fluid" style={{height: "20%"}}>
                <Footer />
            </div>
        </div>;
    }
}