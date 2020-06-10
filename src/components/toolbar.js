import React from 'react';
import './toolbar.css';
import DrawerToggleButton from './SideDrawer/DrawerToggleButton';

const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar_navigation">
            <div className="toolbar_logo">
                <a href="/"><img src={process.env.PUBLIC_URL + '/flashlogo.png'} alt=""/></a>
            </div>
            <div className="spacer"></div>
            <div className="toolbar_navigation_items">
                <ul>
                    <li>
                        <a href="/">Log In</a>
                    </li>
                    <li>
                        <a href="/">
                            Sign Up
                        </a>
                    </li>
                </ul>
            </div>
            <div>
                <DrawerToggleButton click={props.drawerClickHandler}/>
            </div>
        </nav>
    </header>
);

export default toolbar;