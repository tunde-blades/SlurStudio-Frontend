import React,{ useState} from 'react'
import {Link} from 'react-router-dom'
// import {CSSTransition} from 'react-transition-group'
import { useSpring, animated } from 'react-spring'
import style from './style.module.css'
import { FaAngleDown,  FaUserCircle} from 'react-icons/fa'
import Login from '../../components/registration/login/Login'


function Menu() {

  // let  icon = {
  //   rotate : "90deg"
  // }

  const[openlogin, setopenlogin] = useState(false)
  const displayLogin = ()=>{
    setopenlogin(true)
  }

  const hideAllList = ()=>{
    if (hideMenuList || !hideMenuList) {
      setList(false)
      setList2(false)
      setList3(false)
      setList4(false)
    }
    
  }
  
const [showMenuList, setList] = useState(false)
const [hideMenuList, sethideList] = useState(true)

  const displayList = () => {
   
    
    if (!hideMenuList) {
      sethideList(true)
      setList(false)
      setList2(false)
      setList3(false)
      setList4(false)
    }
    
    else if(hideMenuList){
      // sethideList(false)
      setList(true)
      setList2(false)
      setList3(false)
      setList4(false)
    }
  }
  const [showMenuList2, setList2] = useState(false)
  const [hideMenuList2, sethideList2] = useState(true)

  const displayList2 = () => {
    if (!hideMenuList2) {
      sethideList2(true)
      setList(false)
      setList2(false)
      setList3(false)
      setList4(false)
    }
    else if(hideMenuList2){
      // sethideList2(false)
      setList2(true)
      setList(false)
      setList3(false)
      setList4(false)
    }
    
  }
  const [showMenuList3, setList3] = useState(false)
  const [hideMenuList3, sethideList3] = useState(true)

  const displayList3 = () => {
     if (!hideMenuList3) {
      sethideList3(true)
      setList(false)
      setList2(false)
      setList3(false)
      setList4(false)
    }
    else if(hideMenuList3){
      // sethideList3(false)
      setList3(true)
      setList(false)
      setList2(false)
      setList4(false)
    }
  }
  const [showMenuList4, setList4] = useState(false)
  const [hideMenuList4, sethideList4] = useState(true)

  const displayList4 = () => {
     if (!hideMenuList4) {
      sethideList4(true)
      setList(false)
      setList2(false)
      setList3(false)
      setList4(false)
    }
    else if(hideMenuList4){
      // sethideList4(false)
      setList4(true)
      setList(false)
      setList2(false)
      setList3(false)
    }
  }


  let fade = useSpring({
    top: showMenuList ? '0%' : '50px',
    display: showMenuList ? 'flex' : 'none',
    config:{friction:20, mass:1, tension:200}
  })

  let fade2 = useSpring({
    top: showMenuList2 ? '0%' : '50px',
    // display: showMenuList2 ? 'flex' : 'none',
    config:{friction:20, mass:1, tension:200}
  })

  let fade3 = useSpring({
    top: showMenuList3 ? '0%' : '50px',
    // display: showMenuList3 ? 'flex' : 'none',
    config:{friction:20, mass:1, tension:200}
  })

  let fade4 = useSpring({
    top: showMenuList4 ? '0%' : '50px',
    // display: showMenuList4 ? 'flex' : 'none',
    config:{friction:20, mass:1, tension:200}
  })



  return (
  <aside className={style.mobilenav}>
        <animated.div style={style} className={style.menucontent}>
          
          <h3 className='logo' id={style.sidebarlogo}>
                slur<span>S</span>tudio
            </h3>
           
            <ul className={style.list}>
              <li className={style.profile}>
                <FaUserCircle className={style.profileicon}/><small>Bill Smith</small>
                </li>
                <li onMouseLeave ={hideAllList}><span  onMouseEnter = {displayList} onClick = {displayList}><p>Blog post</p><FaAngleDown /></span>
                    { showMenuList && <animated.menu style={fade}  className={style.display}>
                          <li ><Link to='/topmusic'>
                          Top 10 music
                        </Link></li>
                          <li><Link to='/topvideos'>
                          Top 10 music videos
                        </Link>
                            </li>
                          <li><Link to='/artistgossip'>
                          Artist gossip
                        </Link></li>
                          <li><Link to='/upcoming'>
                          Upcoming
                        </Link></li>
                        </animated.menu>}
                </li>
                <li onMouseLeave ={hideAllList}><span onMouseEnter = {displayList2} onClick = {displayList2}><p>Produced</p><FaAngleDown/></span>
                {showMenuList2 &&
                    <animated.menu style={fade2}>
                      <li>
                        <Link to='/beats'>
                          Beats
                        </Link>
                      </li>
                      <li><Link to='/musics'>
                          Musics
                        </Link></li>
                        <li><Link to='/others'>
                          Others
                        </Link></li>
                    </animated.menu>
                }
                </li>
                <li onMouseLeave ={hideAllList}><span onMouseEnter = {displayList3} onClick = {displayList3}><p>Services</p><FaAngleDown/></span>
                {showMenuList3 &&
                    <animated.menu style={fade3}>
                      <li><Link to='/sluracademy'>
                          Slur Academy
                        </Link></li>
                      <li><Link to='/studioproduction'>
                          Studio Production
                        </Link>
                        </li>
                    </animated.menu>
                }
                    
                </li>
                <li onMouseLeave ={hideAllList}><span onMouseEnter = {displayList4} onClick = {displayList4}><p>More</p><FaAngleDown/></span>
                {showMenuList4 &&
                  <animated.menu style={fade4}>
                    <li><a href='http://wa.me/2347060518866'>
                          Book session
                        </a></li>
                    <li><Link to='/contactus'>
                          Contact us
                        </Link></li>
                    <li><Link to='/aboutus'>
                          About us
                        </Link></li>
                        <li><Link to='http://localhost:3001'>
                          Admin
                        </Link></li>
                        <li onClick={displayLogin}>Login</li>
                  </animated.menu>
                }
                </li>
            </ul>
            
            {/* <div className={style.float}>
                 <Link to='/booksession'>
                  <button className='bookbtn'><FaBookmark/>Book session</button>
                 </Link> 
                </div> */}
        </animated.div>

        {openlogin && <Login/>}
       
  </aside>
  )
}

export default Menu