import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Work extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <section>
                <div className="container">
                <div className="row align-items-center">
                
                    <div className="col-lg-12 order-lg-1">
                    <div className="p-5">
                        <h2 className="display-4 text-center">My Work</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati.</p>
                    </div>
                    </div>
                </div>
                </div>
            </section>
         );
    }
}
 
export default Work;