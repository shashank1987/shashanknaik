import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {
    Card, 
    CardImg, 
    CardBody,
    CardTitle,
    CardLink
  } from 'reactstrap';

//Images
import SharvrajEcoFarm from './work/sharvrajecofarm.jpg';
import Tastebudsmb from './work/tastebudsmb.jpg';
import Tonehouseltd from './work/tonehouseltd.jpg';
import GrowEarth from './work/grow-earth.jpg';
import Aakashdeepcaterers from './work/aakashdeepcaterers.jpg';
import Fasttrackcompensation from './work/fasttrackcompensation.jpg';
import Funkeyevent from './work/funkeyevent.jpg';
import Goaaquaclub from './work/goaaquaclub.jpg';
import Grandedegoa from './work/grandedegoa.jpg';
import InMarbella from './work/in-marbella.jpg';
import Krizbeatz from './work/krizbeatz.jpg';
import Leonadismarketing from './work/leonadismarketing.jpg';
import Ooohwow from './work/ooohwow.jpg';
import Restaurantslicenses from './work/restaurantslicenses.jpg';
import Sanyogpadelkarconsultants from './work/sanyogpadelkarconsultants.jpg';
import Weddingcrafters from './work/weddingcrafters.jpg';


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
                        <div className="row align-items-center">
                             <div className="col-lg-3 col-sm-12 col-md-3">
                                <Card>
                                    <CardLink href="https://www.sharvrajecofarm.com" target="_blank"><CardImg top width="100%" src={SharvrajEcoFarm} alt="Sharvraj Eco Farm" /></CardLink>
                                    <CardBody>
                                    <CardTitle className="text-center"><h5>Sharvraj Eco Farm</h5></CardTitle>
                                    
                                    </CardBody>
                                </Card>
                             </div>
                             <div className="col-lg-3 col-sm-12 col-md-3">
                                <Card>
                                    <CardLink href="http://www.tastebudsmb.com.au/" target="_blank"><CardImg top width="100%" src={Tastebudsmb} alt="Tastebudsmb" /></CardLink>
                                    <CardBody>
                                    <CardTitle className="text-center"><h5>Taste buds mb</h5></CardTitle>
                                    
                                    </CardBody>
                                </Card>
                             </div>
                             <div className="col-lg-3 col-sm-12 col-md-3">
                                <Card>
                                    <CardLink href="http://www.tonehouseltd.co.uk/" target="_blank"><CardImg top width="100%" src={Tonehouseltd} alt="Tonehouseltd" /></CardLink>
                                    <CardBody>
                                    <CardTitle className="text-center"><h5>Tonehouse</h5></CardTitle>
                                    
                                    </CardBody>
                                </Card>
                             </div>
                             <div className="col-lg-3 col-sm-12 col-md-3">
                                <Card>
                                    <CardLink href="https://www.grow-earth.com" target="_blank"><CardImg top width="100%" src={GrowEarth} alt="Grow Earth" /></CardLink>
                                    <CardBody>
                                    <CardTitle className="text-center"><h5>Grow Earth</h5></CardTitle>
                                    
                                    </CardBody>
                                </Card>
                             </div>
                             
                        </div>
                        <div className="row align-items-center">
                        <div className="col-lg-3 col-sm-12 col-md-3">
                           <Card>
                               <CardLink href="http://aakashdeepcaterers.in/" target="_blank"><CardImg top width="100%" src={Aakashdeepcaterers} alt="Aakashdeep caterers" /></CardLink>
                               <CardBody>
                               <CardTitle className="text-center"><h5>Aakashdeep caterers</h5></CardTitle>
                               
                               </CardBody>
                           </Card>
                        </div>
                        <div className="col-lg-3 col-sm-12 col-md-3">
                           <Card>
                               <CardLink href="https://fasttrackcompensation.co.uk/" target="_blank"><CardImg top width="100%" src={Fasttrackcompensation} alt="Fasttrack compensation" /></CardLink>
                               <CardBody>
                               <CardTitle className="text-center"><h5>Fasttrack compensation</h5></CardTitle>
                               
                               </CardBody>
                           </Card>
                        </div>
                        <div className="col-lg-3 col-sm-12 col-md-3">
                           <Card>
                               <CardLink href="http://www.funkeyevent.com/" target="_blank"><CardImg top width="100%" src={Funkeyevent} alt="Funkeyevent" /></CardLink>
                               <CardBody>
                               <CardTitle className="text-center"><h5>Funkeyevent</h5></CardTitle>
                               
                               </CardBody>
                           </Card>
                        </div>
                        <div className="col-lg-3 col-sm-12 col-md-3">
                           <Card>
                               <CardLink href="http://goaaquaclub.com/" target="_blank"><CardImg top width="100%" src={Goaaquaclub} alt="Goaaquaclub" /></CardLink>
                               <CardBody>
                               <CardTitle className="text-center"><h5>Goa aqua club</h5></CardTitle>
                               
                               </CardBody>
                           </Card>
                        </div>
                        
                   </div>
                   <div className="row align-items-center">
                   <div className="col-lg-3 col-sm-12 col-md-3">
                      <Card>
                          <CardLink href="http://v2.grandedegoa.com" target="_blank"><CardImg top width="100%" src={Grandedegoa} alt="Grandedegoa" /></CardLink>
                          <CardBody>
                          <CardTitle className="text-center"><h5>Grandedegoa</h5></CardTitle>
                          
                          </CardBody>
                      </Card>
                   </div>
                   <div className="col-lg-3 col-sm-12 col-md-3">
                      <Card>
                          <CardLink href="http://www.in-marbella.com/" target="_blank"><CardImg top width="100%" src={InMarbella} alt="InMarbella" /></CardLink>
                          <CardBody>
                          <CardTitle className="text-center"><h5>InMarbella</h5></CardTitle>
                          
                          </CardBody>
                      </Card>
                   </div>
                   <div className="col-lg-3 col-sm-12 col-md-3">
                      <Card>
                          <CardLink href="http://krizbeatz.com/" target="_blank"><CardImg top width="100%" src={Krizbeatz} alt="Krizbeatz" /></CardLink>
                          <CardBody>
                          <CardTitle className="text-center"><h5>Krizbeatz</h5></CardTitle>
                          
                          </CardBody>
                      </Card>
                   </div>
                   <div className="col-lg-3 col-sm-12 col-md-3">
                      <Card>
                          <CardLink href="https://www.leonadismarketing.com" target="_blank"><CardImg top width="100%" src={Leonadismarketing} alt="Leonadismarketing" /></CardLink>
                          <CardBody>
                          <CardTitle className="text-center"><h5>Leonadismarketing</h5></CardTitle>
                          
                          </CardBody>
                      </Card>
                   </div>
                   
              </div>
              <div className="row align-items-center">
              <div className="col-lg-3 col-sm-12 col-md-3">
                 <Card>
                     <CardLink href="http://www.ooohwow.com" target="_blank"><CardImg top width="100%" src={Ooohwow} alt="Ooohwow Events" /></CardLink>
                     <CardBody>
                     <CardTitle className="text-center"><h5>Ooohwow Events</h5></CardTitle>
                     
                     </CardBody>
                 </Card>
              </div>
              <div className="col-lg-3 col-sm-12 col-md-3">
                 <Card>
                     <CardLink href="http://www.restaurantslicenses.com" target="_blank"><CardImg top width="100%" src={Restaurantslicenses} alt="Restaurantslicenses" /></CardLink>
                     <CardBody>
                     <CardTitle className="text-center"><h5>Restaurants licenses</h5></CardTitle>
                     
                     </CardBody>
                 </Card>
              </div>
              <div className="col-lg-3 col-sm-12 col-md-3">
                 <Card>
                     <CardLink href="http://www.sanyogpadelkarconsultants.com/" target="_blank"><CardImg top width="100%" src={Sanyogpadelkarconsultants} alt="Sanyogpadelkarconsultants" /></CardLink>
                     <CardBody>
                     <CardTitle className="text-center"><h5>Sanyogpadelkar consultants</h5></CardTitle>
                     
                     </CardBody>
                 </Card>
              </div>
              <div className="col-lg-3 col-sm-12 col-md-3">
                 <Card>
                     <CardLink href="http://www.weddingcrafters.in" target="_blank"><CardImg top width="100%" src={Weddingcrafters} alt="Weddingcrafters" /></CardLink>
                     <CardBody>
                     <CardTitle className="text-center"><h5>Weddingcrafters</h5></CardTitle>
                     
                     </CardBody>
                 </Card>
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
 
export default Work;