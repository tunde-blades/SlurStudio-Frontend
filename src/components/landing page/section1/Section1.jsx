import React from 'react'
// import {Link} from 'react-router-dom'
import style from './section1.module.css'
import '../../../index.css'
import Nowplaying from '../nowPlaying section/Nowplaying'
import { FaBookmark } from 'react-icons/fa'



function Section1() {


  return (
        <div >
           <div className={style.section1}>
               <div className={style.box}>
                <div id={style.content}>
                 <div className={style.content}>
                   <h1>We give your lycris the right <br /><span className={style.species} data-text='spice...'>spice</span></h1>
                   <span className={style.btns}>
                    
                      <button className='bookbtn'><a href='http://wa.me/2347060518866'> <FaBookmark />Book Session</a></button>
                      {/* <button className={style.learnbtn}><Link to='/aboutus'>Learn more</Link> </button> */}
                   </span>
                   
                 </div>
                  {/* <img src={image1} alt="" /> */}
                </div>
              
              </div>
           </div>
            <Nowplaying/>
        </div>
     )
}

export default Section1