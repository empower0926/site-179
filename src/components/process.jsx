import React from 'react';
import './process.css';
import'bootstrap/dist/css/bootstrap.min.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import TabContainer from 'react-bootstrap/TabContainer';
import TabContent from 'react-bootstrap/TabContent';
import TabPane from 'react-bootstrap/TabPane';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'




class Process extends React.Component{
    state = {
        priceInputValue: "1",
        priceInput: {
          0: "€ 0.13",
          1: "€ 0.19",
          2: "€ 0.25",
          3: "€ 0.30",
          4: "€ 0.39",
          5: "€ 0.46",
          6: "€ 0.54",
          7: "€ 0.59",
          8: "€ 0.64",
          9: "€ 0.70",
          10: "€ 0.74",
          11: "€ 0.79",
          12: "€ 0.84",
          13: "€ 0.88",
          14: "€ 0.92",
          15: "€ 0.95",
          16: "€ 1.00"
        },
        users: [
            { name: "OTZG PACKAGE",amount: "5000", profit: "72.43%/83.23%",  price:"$132.50"
             },
          {name: "OTZG PACKAGE",amount: "25000", profit: "78.68%/99.16%", price:"$662.50" },
          {name: "OTZG PACKAGE",amount: "100,000", profit: "80.28%/112.51%", price:"$2650" },
          {name: "OTZG PACKAGE",amount: "500,000", profit: "82.69%/121.51%", price:"$13250" },
        ],
        
        activeIndex: 0,
      };

    slider = React.createRef();
  sliderValue = React.createRef();

  componentDidMount() {
    this.slider.current.setAttribute("min", 0);
    this.slider.current.setAttribute(
      "max",
      Object.keys(this.state.priceInput).length - 1
    );
    this.thumbSize = parseInt(
      window
        .getComputedStyle(this.sliderValue.current)
        .getPropertyValue("--thumb-size"),
      10
    );
    this.handleSliderValuePosition(this.slider.current);
  }

  handlePricingSlide = e => {
    this.setState({ priceInputValue: e.target.value });
    this.handleSliderValuePosition(e.target);
  };

  handleSliderValuePosition = input => {
    const multiplier = input.value / input.max;
    const thumbOffset = this.thumbSize * multiplier;
    const priceInputOffset =
      (this.thumbSize - this.sliderValue.current.clientWidth) / 2;
    this.sliderValue.current.style.left =
      input.clientWidth * multiplier - thumbOffset + priceInputOffset + "px";
  };

  getPricingData = (obj, pos) => {
    return pos !== undefined
      ? obj[this.state.priceInputValue][pos]
      : obj[this.state.priceInputValue];
  };
  

    render(){
        const { users, activeIndex } = this.state;
        
        return(
            <div className="platform">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <p id="features">Flash Platform features</p>
                        </div>
                    </div>
                    <div className="row">
                        {/* <div className="col-md-1"></div> */}
                        <div className="content">
                            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                                <Row>
                                    <Col sm={1}></Col>
                                    <Col sm={3}>
                                        <Nav className="flex-column">
                                            <Nav.Item>
                                                <Nav.Link eventKey="first" style={{padding:'0'}}>
                                                    <img className="navimages" src={process.env.PUBLIC_URL + '/Exchange.png'} alt=""/>
                                                </Nav.Link>
                                                <Nav.Link eventKey="second" style={{padding:'0'}}>
                                                    <img className="navimages" src={process.env.PUBLIC_URL + '/OrderTypes.png'} alt=""/>
                                                </Nav.Link>
                                                <Nav.Link eventKey="third" style={{padding:'0'}}>
                                                    <img className="navimages" src={process.env.PUBLIC_URL + '/Security.png'} alt=""/>
                                                </Nav.Link>
                                                <Nav.Link eventKey="fourth" style={{padding:'0'}}>
                                                    <img className="navimages" src={process.env.PUBLIC_URL + '/Customizable.png'} alt=""/>
                                                </Nav.Link>
                                                <Nav.Link eventKey="fifth" style={{padding:'0'}}>
                                                    <img className="navimages" src={process.env.PUBLIC_URL + '/Community.png'} alt=""/>
                                                </Nav.Link>
                                                <Nav.Link eventKey="sixth" style={{padding:'0'}}>
                                                    <img className="navimages" src={process.env.PUBLIC_URL + '/Industry.png'} alt=""/>
                                                </Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                    </Col>
                                    <Col sm={2}></Col>
                                    <Col md={6}>
                                        <Tab.Content>
                                            <Tab.Pane eventKey="first">
                                                <div className="img-content-texts">
                                                    <h3>Exchange</h3>
                                                    <p>Flash offers the most liquid order book in his segment of "tangible asset based exchange". Users can usually exchange asset-pegged/Backed and any Coin with a value link to a tangible asset. Historical Coins such as BTC and ETH will be the only assetless coin be listed.</p>
                                                </div>
                                                <img className="img-content"  src={process.env.PUBLIC_URL + '/exchange-02.png'} alt=""/>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="second">
                                                <div className="img-content-texts">
                                                    <h3>
                                                        Order Types
                                                    </h3>
                                                    <p>
                                                        Flash offers a suite of order types to give traders the tools they need for every scenario. Discover more about our most advanced Algorithmic orders types.
                                                    </p>
                                                </div>
                                                <img className="img-content"  src={process.env.PUBLIC_URL + '/exchange-02.png'} alt=""/>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="third">
                                                <div className="img-content-texts">
                                                    <h3>
                                                        Security
                                                    </h3>
                                                    <p>
                                                        Security of user information and funds is our first priority. Contact us to know more about our security features and integrations.
                                                    </p>
                                                </div>
                                                <img className="img-content"  src={process.env.PUBLIC_URL + '/exchange-02.png'} alt=""/>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="fourth">
                                                <div className="img-content-texts">
                                                    <h3>
                                                        Customizable Interface
                                                    </h3>
                                                    <p>
                                                        Organize your workspace according to your needs: Compose your layout, choose between themes, set up notifications and data preferences.
                                                    </p>
                                                </div>
                                                <img className="img-content"  src={process.env.PUBLIC_URL + '/exchange-02.png'} alt=""/>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="fifth">
                                                <div className="img-content-texts">
                                                    <h3>
                                                        Community
                                                    </h3>
                                                    <p>
                                                        Join our Growing global community that believes in the power of Cryptocurrency link to tangible asset.
                                                    </p>
                                                </div>
                                                <img className="img-content"  src={process.env.PUBLIC_URL + '/exchange-02.png'} alt=""/>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="sixth">
                                                <div className="img-content-texts">
                                                    <h3>
                                                        Industry Leading API
                                                    </h3>
                                                    <p>
                                                        Our websocket feed lets you easily gain access to real-time market data, while our trading API lets you develop secure, programmatic trading bots.
                                                    </p>
                                                </div>
                                                <img className="img-content"  src={process.env.PUBLIC_URL + '/exchange-02.png'} alt=""/>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Col>
                                </Row>
                            </Tab.Container>
                        </div>
                        
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <p id="platform_heading">OZTG PACKAGE</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="starting">
                                <p>Select OZTG Package</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                            
                                {users.map((u,i) => (
                                    <div className="col-md-3">
                                        <div className="packages" onClick={() => this.setState({activeIndex:i})} key = {u.name}>
                                            <div className={i === activeIndex ? 'circle_full' : 'circle'}></div>
                                            <div className="name">
                                                <p>
                                                    {u.name}
                                                </p>
                                            </div>
                                            <div className="amount">
                                                <h3>
                                                {u.amount}
                                                </h3>
                                            </div>
                                            <div style={{marginBottom:'10px'}}>
                                                <p className="list">
                                                    Year Profit
                                                </p>
                                                <p className="right">
                                                    {u.profit}  
                                                </p>
                                            </div>
                                            <div style={{marginBottom:'10px'}}>
                                                <p className="list">
                                                    USDT Purchase Price
                                                </p>
                                                <p className="right">
                                                    {u.price}  
                                                </p>
                                            </div>
                                            <div >
                                                <button className={i === activeIndex ? 'button_selected' : 'button_select'}>Selected</button>
                                            </div>
                                        </div>
                                    </div>
                                   
                                ))}
                            
                        
                    </div>
                    
                    <div className="col-12">
                        <div className="pricing">
                        <div className="pricing-slider center-content">
                        <label className="form-slider">
                            <span>Future OZTG Price</span>
                            <input
                            type="range"
                            ref={this.slider}
                            defaultValue={this.state.priceInputValue}
                            onChange={this.handlePricingSlide}
                            />
                        </label>
                        <div ref={this.sliderValue} className="pricing-slider-value">
                            {this.getPricingData(this.state.priceInput)}
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        {/* <div className="col-md-2"></div> */}
                        
                        <div className="col-md-2">
                            <div className="future">
                                <div className="curved_bg">
                                    <p>10 Days</p>
                                </div>
                                <div className="percentage">
                                    <h3>
                                        72.43%
                                    </h3>
                                    <h4>
                                        PER YEAR
                                    </h4>
                                </div>
                                <p className="list_left">
                                    Reward
                                </p>
                                <p className="right_left">
                                    $2.18
                                </p>
                                <p className="list_left">
                                    USDT
                                </p>
                                <p className="right_left">
                                    2.00
                                </p>
                                <p className="list_left">
                                    OZTG
                                </p>
                                <p className="right_left">
                                    6.00
                                </p>
                            </div>
                        </div>
                        <div className="col-md-2">
                        <div className="future">
                                <div className="curved_bg">
                                    <p>30 Days</p>
                                </div>
                                <div className="percentage">
                                    <h3>
                                        73.62%
                                    </h3>
                                    <h4>
                                        PER YEAR
                                    </h4>
                                </div>
                                <p className="list_left">
                                    Reward
                                </p>
                                <p className="right_left">
                                    $6.67
                                </p>
                                <p className="list_left">
                                    USDT
                                </p>
                                <p className="right_left">
                                    6.12
                                </p>
                                <p className="list_left">
                                    OZTG
                                </p>
                                <p className="right_left">
                                    18.36
                                </p>
                            </div>
                        </div>
                        <div className="col-md-2">
                        <div className="future">
                                <div className="curved_bg">
                                    <p>60 Days</p>
                                </div>
                                <div className="percentage">
                                    <h3>
                                        75.40%
                                    </h3>
                                    <h4>
                                        PER YEAR
                                    </h4>
                                </div>
                                <p className="list_left">
                                    Reward
                                </p>
                                <p className="right_left">
                                    $13.73
                                </p>
                                <p className="list_left">
                                    USDT
                                </p>
                                <p className="right_left">
                                    19.29
                                </p>
                                <p className="list_left">
                                    OZTG
                                </p>
                                <p className="right_left">
                                    37.82
                                </p>
                            </div>
                        </div>
                        <div className="col-md-2">
                        <div className="future">
                                <div className="curved_bg">
                                    <p>90 Days</p>
                                </div>
                                <div className="percentage">
                                    <h3>
                                        76.68%
                                    </h3>
                                    <h4>
                                        PER YEAR
                                    </h4>
                                </div>
                                <p className="list_left">
                                    Reward
                                </p>
                                <p className="right_left">
                                    $21.02
                                </p>
                                <p className="list_left">
                                    USDT
                                </p>
                                <p className="right_left">
                                    19.29
                                </p>
                                <p className="list_left">
                                    OZTG
                                </p>
                                <p className="right_left">
                                    57.86
                                </p>
                            </div>
                        </div>
                        <div className="col-md-2">
                        <div className="future">
                                <div className="curved_bg">
                                    <p>180 Days</p>
                                </div>
                                <div className="percentage">
                                    <h3>
                                        79.21%
                                    </h3>
                                    <h4>
                                        PER YEAR
                                    </h4>
                                </div>
                                <p className="list_left">
                                    Reward
                                </p>
                                <p className="right_left">
                                    $43.13
                                </p>
                                <p className="list_left">
                                    USDT
                                </p>
                                <p className="right_left">
                                    40.12
                                </p>
                                <p className="list_left">
                                    OZTG
                                </p>
                                <p className="right_left">
                                    120.36
                                </p>
                            </div>
                        </div>
                        <div className="col-md-2">
                        <div className="future">
                                <div className="curved_bg">
                                    <p>270 Days</p>
                                </div>
                                <div className="percentage">
                                    <h3>
                                        80.99%
                                    </h3>
                                    <h4>
                                        PER YEAR
                                    </h4>
                                </div>
                                <p className="list_left">
                                    Reward
                                </p>
                                <p className="right_left">
                                    $67.36
                                </p>
                                <p className="list_left">
                                    USDT
                                </p>
                                <p className="right_left">
                                    61.80
                                </p>
                                <p className="list_left">
                                    OZTG
                                </p>
                                <p className="right_left">
                                    185.35
                                </p>
                            </div>
                        </div>
                        
                        
                        
                        {/* <div className="col-md-2"></div> */}
                    </div>
                </div>
            </div>
        )
    }
    
}

export default Process;