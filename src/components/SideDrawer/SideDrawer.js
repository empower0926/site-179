import React from 'react';
import './sidedrawer.css';
const SideDrawer = props => {
    let drawerClasses = "side_drawer"
    if(props.show) {
        drawerClasses = "side_drawer open"
    }
    return(
        <nav className={drawerClasses}>
            <div className="side_drawer_img">
                <img className="img" src={process.env.PUBLIC_URL + '/flashlogo.png'} alt="logo" />
            </div>
        <ul>
            <li><a href="/"><button>Log In</button></a></li>
            <li><a href="/"><button>Sign Up</button></a></li>
            <li><a href="/" ><button>Contact</button></a></li>
        </ul>
    </nav>
    )


    //Other Way of Adding Class using PUSH Method
        // let drawerClasses = ['side_drawer'];
        // if(props.show)
        // {
        //     drawerClasses = ['side_drawer', 'open']
        // }

        // return(
        //     <nav className={drawerClasses.join(' ')}>
        //         //Other Code 
        //     </nav>
        // )
}


export default SideDrawer;