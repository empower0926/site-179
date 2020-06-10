import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './footer.css';

function Footer(){
    return(
        <div className="footer" style={{padding:'80px 0px 20px 0px'}}>    
        <div className="row" style={{marginLeft:'0', marginRight:'0'}}>
            <div className="col-md-6">
                <div className="footer_navigation">
                    <div className="footer_logo">
                        <a href="/"><img src={process.env.PUBLIC_URL + '/logo.png'} alt=""/></a>
                    </div>
                    </div>
            </div>
            <div className="col-md-2">
                <div className="footer_navigation_items">
                    <ul>
                        <li>
                            <a href="/">Platform</a>
                        </li>
                        <li>
                            <a href="/">About us</a>
                        </li>
                        <li>
                            <a href="/">Founder</a>
                        </li>
                        <li>
                            <a href="/">
                                Annoucements
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
                <div className="col-md-2">
                    <div className="footer_navigation_items">
                    <ul>
                        <li>
                            <a href="/">Terms & Conditions</a>
                        </li>
                        <li>
                            <a href="/">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="/">Internal AML and CTF Policy </a>
                        </li>
                        <li>
                            <a href="/">
                            Cookie Policy 
                            </a>
                        </li>
                    </ul>
                    </div>
                    </div>
                <div className="col-md-2">
                    <div className="footer_navigation_items">
                    <ul>
                        <li>
                            <a href="/">API</a>
                        </li>
                        <li>
                            <a href="/">Trade API (Public)</a>
                        </li>
                        <li>
                            <a href="/">Markets API</a>
                        </li>
                        <li>
                            <a href="/">
                                Documentation
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                API (Loged IN)
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                Currency Details
                            </a>
                        </li>
                    </ul>
                    </div>
                </div>
        </div>
        <div className="row">
            <div className="col-md-6">
                <div className="copyrights">
                        <p>Designed by Flashcom </p>
                        <p>© FlashXchanger 2020 All rights reserved</p>
                    </div>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-5">
                        <div className="iconsRow">
                            <div className="col-md-1" style={{paddingRight:'0px', paddingLeft:'0px'}}>
                            <a href="/"><img src={process.env.PUBLIC_URL + '/Reddit.png'} alt=""/></a>
                            </div>
                            <div className="col-md-1" style={{paddingRight:'0px', paddingLeft:'0px'}}>
                            <a href="/"><img src={process.env.PUBLIC_URL + '/discord.png'} alt=""/></a>
                            </div>
                            <div className="col-md-1" style={{paddingRight:'0px', paddingLeft:'0px'}}>
                            <a href="/"><img src={process.env.PUBLIC_URL + '/Github.png'} alt=""/></a>
                            </div>
                            <div className="col-md-1" style={{paddingRight:'0px', paddingLeft:'0px'}}>
                            <a href="/"><img src={process.env.PUBLIC_URL + '/Medium.png'} alt=""/></a>
                            </div>
                            <div className="col-md-1" style={{paddingRight:'0px', paddingLeft:'0px'}}>
                            <a href="/"><img src={process.env.PUBLIC_URL + '/Linkedin.png'} alt=""/></a>
                            </div>
                            <div className="col-md-1" style={{paddingRight:'0px', paddingLeft:'0px'}}>
                            <a href="/"><img src={process.env.PUBLIC_URL + '/Instagram.png'} alt=""/></a>
                            </div>
                            <div className="col-md-1" style={{paddingRight:'0px', paddingLeft:'0px'}}>
                                <a href="/">
                                        <img src={process.env.PUBLIC_URL + '/twitter.png'} alt=""/>
                                    </a>
                            </div>
                            <div className="col-md-1" style={{paddingRight:'0px', paddingLeft:'0px'}}>
                            <a href="/">
                                        <img src={process.env.PUBLIC_URL + '/telegram.png'} alt=""/>
                                    </a>
                            </div>
                        </div>
                    </div>
        </div>
        </div>
    )
}
export default Footer;