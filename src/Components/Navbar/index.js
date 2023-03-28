import React from 'react'
import "./index.css"
import home from '../../Icons/home.png'
import settings from '../../Icons/settings.png'
import notification from '../../Icons/notification.png'
import Ellipse from '../../Icons/Ellipse 2.png'

function Navbar() {
  return (
    <nav className='nav-cont'>
    <div className='nav-sub'>
    <img src='https://deepthought.education/assets/images/logo/logo.svg' className='logo' alt='logo'/>
        <div className='icon-cont'>
        <img src={home} alt='home' className='home'/>
        <img src={settings} alt="settings" className='home'/>
        <img src={notification} alt="notification" className='notification'/>
        <img className='home'/>
        <div className='dots'>
        <img src={Ellipse} alt="dot"/>
        <img src={Ellipse} alt = "dot"/>
        <img src={Ellipse} alt="dot"/>
        </div>
        </div>
    </div>
        
    </nav>
  )
}

export default Navbar


