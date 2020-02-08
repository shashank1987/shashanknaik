import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { ListGroup, ListGroupItem } from 'reactstrap';

class Skills extends Component {
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
                        <h2 className="display-4 text-center">My Skills</h2>
                        <div className="row">
                           <div className="col-md-3 col-sm-12">
                                <ListGroup>
                                    <ListGroupItem>REACT</ListGroupItem>
                                    <ListGroupItem>NODEJS</ListGroupItem>
                                    <ListGroupItem>MONGODB</ListGroupItem>
                                    <ListGroupItem>EXPRESS</ListGroupItem>
                                    <ListGroupItem>AWS WEB SERVICES</ListGroupItem>
                                </ListGroup>
                           </div>
                           <div className="col-md-3 col-sm-12">
                                <ListGroup>
                                    <ListGroupItem>BOOTSTRAP</ListGroupItem>
                                    <ListGroupItem>HTML 5</ListGroupItem>
                                    <ListGroupItem>CSS 3</ListGroupItem>
                                    <ListGroupItem>CSS FLEXBOX</ListGroupItem>
                                    <ListGroupItem>MATERIAL DESIGN</ListGroupItem>
                                </ListGroup>
                           </div>
                           <div className="col-md-3 col-sm-12">
                                <ListGroup>
                                    <ListGroupItem>ANGULAR</ListGroupItem>
                                    <ListGroupItem>VUEJS</ListGroupItem>
                                    <ListGroupItem>NEXTJS</ListGroupItem>
                                    <ListGroupItem>PYTHON</ListGroupItem>
                                    <ListGroupItem>PHP</ListGroupItem>
                                </ListGroup>
                           </div>
                           <div className="col-md-3 col-sm-12">
                               <ListGroup>
                                    <ListGroupItem>WORDPRESS</ListGroupItem>
                                    <ListGroupItem>WOOCOMMERCE</ListGroupItem>
                                    <ListGroupItem>PHOTOSHOP</ListGroupItem>
                                    <ListGroupItem>SEO</ListGroupItem>
                                    <ListGroupItem>SEM</ListGroupItem>
                               </ListGroup>
                           </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
         );
    }
}
 
export default Skills;