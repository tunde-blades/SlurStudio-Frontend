import React,{useState} from 'react'
import { FaAngleDown } from 'react-icons/fa'
import Login from '../../login/Login'
import style from './signup.module.css'
import logo from '../../../../images/SlurArena Icon.png'



export default function SignUp() {

  const [login, setLogin] = useState(false)
  let openLogin = ()=>{
    setLogin(true)
  }
  const [typelist, setTypelist] = useState(false)
 let prevtypelist = typelist
  let openTypelist = ()=>{
    setTypelist(!prevtypelist)
  }
  let closeTypelist = ()=>{
      setTypelist(false)

  }

  return (
    
    <div>
        {login? <Login/> :
        <div className={style.signup}>
          <div className={style.logo}>
            <img src={logo} alt="" />
            <h3>slur<span>S</span>tudio</h3>
          </div>
          <div className={style.signupcontainer}>
            <div className={style.signupbox}>
            <span className={style.joinhead}>
              <h1 className={style.join}>
                  Join us </h1><p>in few seconds</p>
            </span>
            <form>
                <label htmlFor="name"><p>Name:</p>
                  <input type="text" required />
                </label>
                <label htmlFor="email"><p>Email:</p>
                  <input type="email" required/>
                </label>
                <label htmlFor="phone"><p>Phone:</p>
                  <input type="tel" required/>
                </label>
                <label htmlFor="password" placeholder='**************'><p>Password:</p>
                    <input type="password" required/>
                  </label>
                <div>
                  <div className={style.songtype} onClick={openTypelist}><p>Artist type</p> <FaAngleDown/> </div>
                  {
                    typelist &&
                  <ul className={style.songtypelist}>
                    <li onClick={closeTypelist} value="Rap Artist">Rap Artist</li>
                    <li onClick={closeTypelist} value="Trap Artist">Trap Artist</li>
                    <li onClick={closeTypelist} value="Gospel Artist">Gospel Artist</li>
                    <li onClick={closeTypelist} value="Regae Artist">Reggae Artist</li>
                    <li onClick={closeTypelist} value="Hiphop Artist">Hiphop Artist</li>
                  </ul>
                  }
                </div>
                
                <div className={style.checkbox}>
                    <input className={style.check} type="checkbox" />
                    <p>I've read the terms and conditions and I accept the terms and conditions</p>
                  </div>
                 <button className={style.signupbtn}>Sign up</button>
                  
                  
            </form>    
          </div>
          <div className={style.loginbox}><p>already have an account?</p><span className={style.loginbtn} onClick={openLogin}>Log in</span></div>
          </div>                
      </div>
        }
    </div>
  )
}
