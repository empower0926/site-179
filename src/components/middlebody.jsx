import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function MiddleBody(){
    return(
        <div className="row" style={{marginLeft:'0', marginRight:'0'}}>
            <img className="body" src="/assets/middlebody.png" alt="middlebody"/>
            
            <div className="body_nexticon">
                    <img className="nexticon" src="/assets/nexticon.png" alt="next"/>
                </div>
            <div className="bodyText">
                    <h5>Lorem</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
        </div>
    )
}

export default MiddleBody;