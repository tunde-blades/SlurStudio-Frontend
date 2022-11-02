import React, { useState } from 'react'
import style from './login.module.css'
import SignUp from '../sign up/sign up/SignUp'
import logo from '../../../images/SlurArena Icon.png'


export default function Login() {
  const [sigup, setSignup] = useState(false)
  let openSignup = ()=>{
    setSignup(true)
  
  }

  return (
    <div>
      
      {sigup ?<SignUp/> : 
      <div className={style.login}>
        <div className={style.logo}>
            <img src={logo} alt="" />
            <h3>slur<span>S</span>tudio</h3>
          </div>
        <div className={style.logincontainer}>
            <div className={style.loginbox}>
          <div className={style.formbox}>
              <span>
                <h1 className={style.join}>
                  Log in </h1>
              </span>
              <form>
                <label htmlFor="email" placeholder='example@gmail.com'><p>Email:</p>
                  <input type="email" required/>
                </label>
                <label htmlFor="password" placeholder='************'><p>Password:</p>
                  <input type="password" required/>
                </label>
                <div className={style.checkbox}>
                  <input className={style.check} type="checkbox" />
                  <p>keep me loged in</p>
                </div>
                <button className={style.loginbtn}>Log in</button>
              </form>            
          </div>
          <div className={style.signupbtnbox}><p>don't have an account?</p><span className={style.signupbtn} onClick={openSignup}>Sign up</span></div>
        </div>
        </div>
    </div>}
    </div>

    
  )
}
