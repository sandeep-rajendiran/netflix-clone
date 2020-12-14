import React, {useEffect, useState} from 'react'
import './Nav.css'



function Nav() {
    const  [show, handleShow]=useState(false);
    useEffect(() => {
        if(window.scrolly>100){
            handleShow(true);
        }else handleShow(false);
        return () => {
            window.removeEventListener("scroll");
        }
    }, []);
    
    return (
        <div className={ 'nav '}>
            <img
            className="nav__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png"
            alt="Netflix Logo"
            />
            <img
            className="nav__avatar"
            src="https://i.pinimg.com/236x/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.jpg"
            alt="Netflix Logo"
            />
        </div>
    )
   
}

export default Nav
