import React, { useState } from 'react'
import style from './section2.module.css'
import {  FaLink,  FaPhoneAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import {motion} from 'framer-motion'



export default function Section2() {


const [isOpen,setIsOpen]= useState([false,false,false,false,true])

    const display1 =()=>{
        setIsOpen()

        setIsOpen([true, false, false, false,false])
    }
    const display2 =()=>{
         setIsOpen([false, true, false, false,false])
    }
    const display3 =()=>{
         setIsOpen([false, false, true, false,false])
    }
    const display4 =()=>{
         setIsOpen([false, false, false, true,false])
    }
    const display5 =()=>{
         setIsOpen([false, false, false, false,true])
    }




  return (
    <div className={style.offer}>
        <div className="container">
            <div className={style.box}>
                <h4>Our Services</h4>
                <ol>
                    {isOpen[4]?<button className={style.click}  onClick={display5}>Music Production</button>:<button onClick={display5}>Music Production</button>}


                    {isOpen[1]?<button className={style.click} onClick={display2}>Slur Academy</button>: <button onClick={display2}>Slur Academy</button>}

                    {isOpen[2] ? <button className={style.click} onClick={display3}>Recoding Session</button> : <button onClick={display3}>Recoding Session</button> }
                    
                    
                    {isOpen[3]?<button className={style.click} onClick={display4}>Mixing and Mastering</button>: <button onClick={display4}>Mixing and Mastering</button>}

                    {isOpen[0]?<button className={style.click}  onClick={display1}>Jingle</button>: <button onClick={display1}>Jingle</button>}

                </ol>
                
                <ul className="container">
                   {isOpen[0] && 
                   
                    <motion.li  animate={{opacity:1, marginLeft: 0}} initial={{opacity:0, marginLeft:10}} exit={{opacity:0, marginLeft:10}} >
                       <div className={style.single}>
                            <h3>Jingle</h3>
                            <p>We make corperate signage and adverts for companies and business enterprises</p>
                           <button className='bookbtn'><FaPhoneAlt /> <a href='http://wa.me/2347060518866'> Contact us</a></button>
                       </div>
                    </motion.li>
                   } 

                   {isOpen[1] &&

                    <motion.li animate={{opacity:1, marginLeft: 0}} initial={{opacity:0, marginLeft:10}} exit={{opacity:0, marginLeft:10}}  >
                       <div className={style.single}>
                            <h3>Slur Academy</h3>
                            <p>Slur Academy affordable and intensive practical base program in Music Production, Mixing and Mastering Engineering, Beat Making & Piano </p>
                            <button className='bookbtn'><FaLink/> <Link to='/sluracademy'>  Visit Page</Link></button>
                       </div>
                    </motion.li>
                   }
                   {isOpen[2] &&

                    <motion.li animate={{opacity:1, marginLeft: 0}} initial={{opacity:0, marginLeft:10}} exit={{opacity:0, marginLeft:10}} >
                       <div className={style.single}>
                            <h3>Recoding Session</h3>
                            <p>Our Recording Session is 6HOURS. You can choose to bring your producer/engineer or work with our professionals <br />
                                <small>one session is #15,000 / $22</small>
                            </p>

                            <button className='bookbtn'><FaPhoneAlt /><a href='http://wa.me/2347060518866'> Contact us</a> </button>
                       </div>
                    </motion.li>
                   }
                   {isOpen[3] &&

                    <motion.li animate={{opacity:1, marginLeft: 0}} initial={{opacity:0, marginLeft:10}} exit={{opacity:0, marginLeft:10}} >

                       <div className={style.single}>
                            <h3>Mixing and Mastering</h3>
                            <p>We stimulate strength & expression into your song and keep it alive. We preserve the creative ideas in the project but make it better.</p>
                            <button className='bookbtn'><FaPhoneAlt /><a href='http://wa.me/2347060518866'> Contact us</a></button>
                       </div>
                    </motion.li>
                   }
                   {isOpen[4] &&

                    <motion.li animate={{opacity:1, marginLeft: 0}} initial={{opacity:0, marginLeft:10}} exit={{opacity:0, marginLeft:10}} >
                       <div className={style.single}>
                            <h3>Music Production</h3>
                            <p>We produce all types of music from Sacular to Gospel; Amapiano, Afropop, Rap & Trap.
                            </p>
                                <ul>
                                    <small>This package includes:</small> 
                                    <li>Quality Beat</li>
                                    <li>Clear Recording</li>
                                    <li>Creative Mix & Mastering guaranteed.</li>
                                    <small>Note: Infusion of Live Instruments attracts extra charges (except you come with your instrumentalists)</small>
                                </ul>
                              
                            <button className='bookbtn'> <FaLink/> <Link to='/studioproduction'>Visit Page</Link></button>
                       </div>
                    </motion.li>
                   }
                </ul>
            </div>
        </div>
    </div>
  )
}
