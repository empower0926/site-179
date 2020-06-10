import React from 'react';
import './trade.css';


function Trade() {
    return(
        <div className="trade">
            <div className="container">
                <div className="row" style={{margin:'120px 0px'}}>
                    <div className="col-lg-5">
                        <img className="images" src={process.env.PUBLIC_URL + '/exchange-03.png'} alt=""/>
                    </div>
                    <div className="col-lg-1"></div>
                    <div className="col-lg-5">
                        <div className="texts">
                            <h3>
                                Trade on the go
                            </h3>
                            <p>
                            Our platform is optimized for trading on any device. <br />And you don’t need to download any additionnal applications. <br />All the power of Flash cryptocurrency exchange in the palm of your hand.
                            </p>
                        </div>
                        <div style={{marginTop:'50px'}}>
                            <div className="lets_button">
                                <img className="letsbutton" src={process.env.PUBLIC_URL + '/letstry.png'} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-1"></div>
                </div>
                <div className="col-12">
                <h3 className="heading">
                            Start trading now
                        </h3>
                </div>
                <div className="row" style={{marginBottom:'150px'}}>
                    <div className="col-lg-6">
                      <a href="/" className="tradingnow"><img id="left" src={process.env.PUBLIC_URL + '/register.png'} alt=""/></a>
                    </div>
                    <div className="col-lg-6">
                        <a href="/" className="tradingnow"><img id="right" src={process.env.PUBLIC_URL + '/startTrading.png'} alt=""/></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Trade;