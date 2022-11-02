import React, { useState } from 'react'
import style from './section2.module.css'
import {  FaLink,  FaPhoneAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'



export default function Section2() {


    const [isOpen1, setIsOpen1] = useState(false)
    const [isOpen2, setIsOpen2] = useState(false)
    const [isOpen3, setIsOpen3] = useState(false)
    const [isOpen4, setIsOpen4] = useState(false)
    const [isOpen5, setIsOpen5] = useState(true)

    const display1 =()=>{
        setIsOpen1(true)
        setIsOpen4(false)
        setIsOpen2(false)
        setIsOpen3(false)
        setIsOpen5(false)
    }
    const display2 =()=>{
        setIsOpen2(true)
        setIsOpen1(false)
        setIsOpen3(false)
        setIsOpen4(false)
        setIsOpen5(false)
    }
    const display3 =()=>{
        setIsOpen3(true)
        setIsOpen2(false)
        setIsOpen1(false)
        setIsOpen4(false)
        setIsOpen5(false)
    }
    const display4 =()=>{
        setIsOpen4(true)
        setIsOpen2(false)
        setIsOpen3(false)
        setIsOpen1(false)
        setIsOpen5(false)
    }
    const display5 =()=>{
        setIsOpen4(false)
        setIsOpen2(false)
        setIsOpen3(false)
        setIsOpen1(false)
        setIsOpen5(true)
    }




  return (
    <div className={style.offer}>
        <div className="container">
            <div className={style.box}>
                <h4>Our Services</h4>
                <ol>
                    {isOpen5?<button className={style.click}  onClick={display5}>Music Production</button>:<button onClick={display5}>Music Production</button>}


                    {isOpen2?<button className={style.click} onClick={display2}>Slur Academy</button>: <button onClick={display2}>Slur Academy</button>}

                    {isOpen3 ? <button className={style.click} onClick={display3}>Recoding Session</button> : <button onClick={display3}>Recoding Session</button> }
                    
                    
                    {isOpen4?<button className={style.click} onClick={display4}>Mixing and Mastering</button>: <button onClick={display4}>Mixing and Mastering</button>}

                    {isOpen1?<button className={style.click}  onClick={display1}>Jingle</button>: <button onClick={display1}>Jingle</button>}

                </ol>
                
                <ul className="container">
                   {isOpen1 && 
                   
                    <li>
                       <div className={style.single}>
                            <h3>Jingle</h3>
                            <p>We make corperate signage and adverts for companies and business enterprises</p>
                           <button className='bookbtn'><FaPhoneAlt /> <a href='http://wa.me/2347060518866'> Contact us</a></button>
                       </div>
                    </li>
                   } 

                   {isOpen2 &&

                    <li>
                       <div className={style.single}>
                            <h3>Slur Academy</h3>
                            <p>Slur Academy affordable and intensive practical base program in Music Production, Mixing and Mastering Engineering, Beat Making & Piano </p>
                            <button className='bookbtn'><FaLink/> <Link to='/sluracademy'>  Visit Page</Link></button>
                       </div>
                    </li>
                   }
                   {isOpen3 &&

                    <li>
                       <div className={style.single}>
                            <h3>Recoding Session</h3>
                            <p>Our Recording Session is 6HOURS. You can choose to bring your producer/engineer or work with our professionals <br />
                                <small>one session is #15,000 / $22</small>
                            </p>

                            <button className='bookbtn'><FaPhoneAlt /><a href='http://wa.me/2347060518866'> Contact us</a> </button>
                       </div>
                    </li>
                   }
                   {isOpen4 &&

                    <li>

                       <div className={style.single}>
                            <h3>Mixing and Mastering</h3>
                            <p>We stimulate strength & expression into your song and keep it alive. We preserve the creative ideas in the project but make it better.</p>
                            <button className='bookbtn'><FaPhoneAlt /><a href='http://wa.me/2347060518866'> Contact us</a></button>
                       </div>
                    </li>
                   }
                   {isOpen5 &&

                    <li>
                       <div className={style.single}>
                            <h3>Music Production</h3>
                            <p>We produce all types of music from Sacular to Gospel; Amapiano, Afropop, Rap & Trap.
                            </p>
                                <ul>
                                    <small>This package includes:</small> 
                                    <li>Beat (Digital Sountrack)</li>
                                    <li>Recordings</li>
                                    <li>Mixing & Mastering</li>
                                </ul>
                              
                            <button className='bookbtn'> <FaLink/> <Link to='/studioproduction'>Visit Page</Link></button>
                       </div>
                    </li>
                   }
                </ul>
            </div>
        </div>
    </div>
  )
}
