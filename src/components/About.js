import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <section id="About">
                <div className="container">
                <div className="row align-items-center">
                
                    <div className="col-lg-12 order-lg-1">
                    <div className="p-5">
                        <h2 className="display-4 text-center">About Me</h2>
                        <p className="display-4 text-center">Hello, I'm a passionate Full Stack Web & App Developer having experience of more than 13 years.</p>
                    </div>
                    </div>
                </div>
                </div>
            </section>
         );
    }
}
 
export default About;