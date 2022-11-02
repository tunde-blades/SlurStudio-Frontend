import React from 'react'
import { FaBackward, FaDownload, FaForward, FaHeart, FaPause, FaPlay, FaVolumeMute, FaVolumeUp } from 'react-icons/fa'
import Header from '../../head/Header'
import Footer from '../../landing page/footer section/Footer'
import Section5 from '../../landing page/contact-us section/Section5'
import style from './beat.module.css'
function Others() {
  return (
    <div>
        <Header/>
        <div>
          <div className={style.playbox}>
          <div className={style.playdetails}>
            <div><p>playing</p><h3>Scarymeat Beat</h3><small>Dj Slurs</small></div>
            <div className={style.btns}>
              <FaBackward/>
              <FaPause/>
              <FaForward/>
            </div>
          </div>
          <div className={style.playcontrols}>
            <input type="range" />
            <FaVolumeUp/>
            <FaVolumeMute/>
          </div>
          </div>
          <div className={style.playlist}>
            <ul className='container'>
              <div className={style.songsheader}>
                <header>Random </header>
                <p>Play all</p>
              </div>
              <li>
                <div className={style.btns}>
                  <FaPlay/>
                  <FaHeart/>
                </div>
                <p>Konga rap drums</p>
                <small>3:15</small>
                <FaDownload/>
              </li>
            </ul>
          </div>
        </div>
        <Section5/>
        <Footer/>
    </div>
  )
}

export default Others