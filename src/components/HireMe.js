import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class HireMe extends Component {
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
                    <div className="p-5 text-center">
                        <h2 className="display-4 text-center">Hire Me</h2>
                        <h4><strong>Email:</strong> <a href="mailto:naik.shashank007@gmail.com">naik.shashank007@gmail.com</a></h4>
                        <h4><strong>Whatsapp/Phone:</strong> <a href="tel:+919923962046">+91 9923962046</a></h4>

                    </div>
                    </div>
                </div>
                </div>
            </section>
         );
    }
}
 
export default HireMe;