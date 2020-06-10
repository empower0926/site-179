import React from 'react';
import './services.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Services(){
    return(
        <div className="form">
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 offset-lg-1">
                        <div className="form-body">
                            <div className="row">
                                <div className="col-lg-8">
                                    <h3 className="heading">
                                        Ready to get started?
                                    </h3>
                                    <p className="paragraph">
                                        Get in touch or create an account
                                    </p>
                                </div>
                                <div className="col-lg-4">
                                    <div className="get-started">
                                        <img src={process.env.PUBLIC_URL + '/getStarted.png'} alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Services;