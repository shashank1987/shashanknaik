import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <footer className="py-5 bg-black">
                <div className="container">
                  <p className="m-0 text-center text-white small">Copyright &copy; Shashank Naik 2020</p>
                </div>
              
            </footer>
         );
    }
}
 
export default Footer;