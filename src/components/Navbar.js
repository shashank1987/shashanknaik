import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
                <div className="container text-center">
                    <a className="navbar-brand" href="#">Shashank Naik</a>
                   
                </div>
            </nav>
         );
    }
}
 
export default Navbar;