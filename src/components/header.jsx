import React from 'react';
import './first.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import  { useEffect, useState } from "react";

function Header() {
   
    const calculateTimeLeft = () => {
        const difference = +new Date("2020-09-01") - +new Date();
        let timeLeft = {};
    
        if (difference > 0) {
          timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60)
          };
        }
    
        return timeLeft;
      };
      const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
      useEffect(() => {
        setTimeout(() => {
          setTimeLeft(calculateTimeLeft());
        }, 1000);
      });
    
      const timerComponents = [];
    
      Object.keys(timeLeft).forEach(interval => {
        if (!timeLeft[interval]) {
          return;
        }
        if(interval === "seconds"){
            
            if(interval < 10){
                timerComponents.push(
                    <h3>
                         {"0 "}{timeLeft[interval]}
                    </h3>
                )
            }
            else{
                timerComponents.push(
                    <h3>
                        {timeLeft[interval]}
                    </h3>
                )
            }
        }
        else{
            timerComponents.push(
                <h3>
                    {timeLeft[interval]} {" : "}
                </h3>
            )
        }
        
      }
      );
    return(
        
        <div className="first">
            <div className="container">
                <div className="row" style={{marginLeft:'0',marginRight:'0'}}>
                    <div className="col-md-1"></div>
                    <div className="col-md-5" style={{marginTop:'250px', marginBottom:'220px'}}>
                        <h3 id="white">See the ads you need<br />and get paid doing that!</h3>
                        <p>Any question? Reach out to us and we'll get back to you shortly.</p>
                        <button>Contact</button>
                    </div>
                    <div className="col-md-5">
                        <div className="parent">
                            <img src={process.env.PUBLIC_URL + '/Timer.png'} alt="timer"></img>
                            <img src={process.env.PUBLIC_URL + '/F_circle.png'} id="f_circle" alt="f"/>
                            <img src={process.env.PUBLIC_URL + '/animation.png'} id="overlay" alt="f"/>
                            <div className="timer">
                                <p id="tradesOpening">Opening Trades</p>
                                {timerComponents.length ? timerComponents : <p>Start Trading</p>}
                                <p>Days Hours Mins Sec</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-1"></div>
                </div>
            </div>
        </div>
    )
}

export default Header;