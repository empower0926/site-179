import React, {Component} from 'react';
import './App.css';
import Toolbar from './components/toolbar.js';
import Header from './components/header.jsx';
import Second from './components/second.jsx';
import Process from './components/process.jsx';
import Services from './components/services.jsx';
import Footer from './components/footer.jsx';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/backdrop'
import Trade from './components/trade.jsx';

class App extends Component {


state={
  sideDrawerOpen:false
}

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen : !prevState.sideDrawerOpen}
    })
  }

  backdropClickHanlder = () => {
    this.setState({sideDrawerOpen:false})
  }
    render()
    {
      let backDrop;

      if(this.state.sideDrawerOpen){
        backDrop = <Backdrop click={this.backdropClickHanlder}/>
      }
      return (
        <div className="App" style={{height:'100%'}}>
          <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
          <SideDrawer show={this.state.sideDrawerOpen}/>
          {backDrop}
          <Header></Header>
          <Second></Second>
          <Process></Process>
          <Services></Services>
          <Trade></Trade>
          <Footer></Footer>
          
        </div>
      );
    }
  
}

export default App;
