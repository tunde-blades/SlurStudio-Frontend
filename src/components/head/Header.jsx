import React, {useState} from 'react'
import {useSpring, animated } from 'react-spring'
import logo from '../../images/SlurArena Icon.png'
import {FaBars, FaSearch, FaTimes} from 'react-icons/fa'
import style from './style.module.css'
import Menu from './Menu'
import { Link } from 'react-router-dom'
import DesktopNav from './desktopNav'



function Header() {

    const [showMenu, setShowMenu] = useState(false)
    function menuDisplay(){
        setShowMenu(true)
        setCloseMenu(true)
    }

    const [closeMenu, setCloseMenu] = useState(true)
    function menuHide(){
        setCloseMenu(false)
    }

    const [showsearch, setShowsearch] = useState(false)
    function searchDisplay(){
        setShowsearch(true)
    }

const fade = useSpring({
    marginTop: showMenu ? '0' : '-200px',
    opacity: showMenu ? '1' : '0',
    config:{friction:20, mass:1, tension:200}
})


  return (
    <header className={style.headbox}>
        <div className={style.desktopnav}>
            <DesktopNav/>
        </div>
        <div className={style.mobilenav}>
            {showMenu && closeMenu && <div  className={style.overlay} onClick={menuHide}></div>}
        </div>
        <div className={style.headcontent}>
            <Link to='/'>
                <div onClick={menuHide} className='logo'><img src={logo} alt="" />
                slur<span>S</span>tudio
            </div>
            </Link> 
            <div className={style.icons}>
                <span onClick={menuHide} className={style.searchbox}  onMouseEnter={searchDisplay}>
                {showsearch && <input type="text" placeholder='Search'/>}
                    
                    <FaSearch className={style.searchicon}/>
                </span>
                <div className={style.navbtn}>
                    {closeMenu && showMenu?<FaTimes className={style.cancelnav} onClick={menuHide}/>:<FaBars  onClick={menuDisplay} className={style.menuicon}/>}
                    {showMenu && closeMenu &&  <animated.div style={fade}> <Menu/> </animated.div> }
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header