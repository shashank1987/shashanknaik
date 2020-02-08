import React, { Component } from 'react';

import {Link} from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            
            <header className="masthead text-center text-white">
                <div className="masthead-content">
                    
                    <div className="container">
                   
                            <div className="typewriter"><h1 className="mb-0 ">I'm Shashank Naik</h1></div>
                            <h2 className="masthead-subheading mb-0">Full Stack Web Developer</h2>
                        <a href="#" className="btn btn-primary btn-xl rounded-pill mt-5">Hire Me</a>
                          
                    </div>
                    
                </div>
                
            </header>
            
         );
    }
}
 
export default Header;