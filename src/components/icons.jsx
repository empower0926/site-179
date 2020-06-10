import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './icons.css';

function Icons()
{
    const website = "https://aurangg.com"
    return(
        <div className="container" style={{paddingTop:'60px', borderTop:'2px solid #ebebeb'}}>
            <div className="row">
                <div className="col-lg-4 offset-lg-4">
                    <img className="icons" src="/assets/twitter.png" alt="twitter"/>
                    <img className="icons" src="/assets/facebook.png" alt="twitter"/>
                    <img className="icons" src="/assets/google.png" alt="twitter"/>
                    <div className="icons_text">
                        <p>All rights reserved.</p>
                        <p>Developed by <span><a href={website}>Aurangzeb Khan</a></span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Icons;