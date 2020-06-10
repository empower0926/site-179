import React from 'react';
import './second.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class Second extends React.Component{
    images=[
        {
            imgUrl:""
        }
    ]
    render(){
        return(
                <div className="second">
                    <div className="container" style={{marginRight:'0px', marginLeft:'0px',paddingRight:'0px', paddingLeft:'0px', maxWidth:'100%' }}>
                        <div className="row record" style={{marginRight:'0px', marginLeft:'0px', maxWidth:'100%' }}>
                            <div className="col-lg-4" style={{padding:'0px'}}>
                                <div className="records">
                                    <img src={process.env.PUBLIC_URL + '/OZTG2.png'} alt=""/>
                                </div>
                            </div>
                            <div className="col-lg-4" style={{padding:'0px'}}>
                                <div className="records">
                                    <img src={process.env.PUBLIC_URL + '/BTC.png'} alt=""/>
                                </div>
                            </div>
                            <div className="col-lg-4" style={{padding:'0px'}}>
                                <div className="records">
                                    <img src={process.env.PUBLIC_URL + '/ETH.png'} alt=""/>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className="container">
                        <div className="row">
                            <div className="col-md-1"></div>
                            <div className="col-md-5">
                                <div className="why_f">
                                    <p>flashxchanger</p>
                                    <h3>Why FlashXchanger is different?</h3>
                                </div>
                                <div className="content">
                                    <img src={process.env.PUBLIC_URL + '/1.png'} alt=""/>
                                    <p>
                                        50% of exchange fees are reinvested in the company’s coin in order to raise the Intrinsec value.
                                    </p>
                                </div>
                                <div className="content">
                                    <img src={process.env.PUBLIC_URL + '/2.png'} alt=""/>
                                    <p>
                                    30% of exchange fees goes to our affiliate program instead of spending it in expensive and Marketing campaign with very little return!
                                    </p>
                                </div>
                                <div className="content">
                                    <img src={process.env.PUBLIC_URL + '/3.png'} alt=""/>
                                    <p>
                                    20% of exchange fees goes to the compagny to cover operations costs.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="img-container">
                                    <img src={process.env.PUBLIC_URL + '/exchange-01.png'} alt=""/>
                                </div>
                            </div>
                            <div className="col-md-1"></div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 offset-lg-3">
                                <div className="purple_button">
                                    <img src={process.env.PUBLIC_URL + '/getStarted.png'} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
    
export default Second;