import React from 'react'
import Header from '../../../head/Header'
import Section5 from '../../../landing page/contact-us section/Section5'
import Footer from '../../../landing page/footer section/Footer'
import style from './production.module.css'
import image2 from '../../../../images/audio-720589_1920.jpg'
import image7 from '../../../../images/troy-t-dX76Mts-LVM-unsplash.jpg'
import qdot from '../../../../images/qdot-alagbe.jpeg'
import segunJohnson from '../../../../images/segun-johnson.jpg'
import bimboPonmile from '../../../../images/Bimbo-Ponmile.webp'
import tonymaria from '../../../../images/tonymaria.jpg'
import tonymaria2 from '../../../../images/tonymaria2.jpeg'

export default function StudioProduction() {
  return (
    <div className={style.production}>
      <Header/>
      <div className='container'>
        <article>
        <div className={style.header}>
          <h1>Our Top Class <span>Studio Production</span></h1>
        </div>
          <header className={style.heads}>
            <h5>RECORDING SESSION</h5>
            <p>Our Recording Session is 6 Hours. You can choose to bring in your producer/engineer or work with ours.
              <small>1 Session is N15,000 or $22</small>
            </p>
          </header>
          <section>
                <menu>
                  <picture><img src={image7} alt="" /></picture>
                  <ol>
                    <h5>Buy a Slot & Save 40% off Recording Session
                    Class A Slot:</h5> 
                    <li>20 Sessions (120 Hours)</li>
                    <li>You gain extra 7 free sessions</li>
                    <li>Expires in 10 Months</li>
                    <li>No extra charges</li>
                    <small>= N200, 000  or $285</small>
                  </ol>
                </menu>

                <menu>
                  <picture><img src={image2} alt="" /></picture>
                  <ol>
                    <h5>Class B Slot:</h5>
                    <li>13 Sessions (78 Hours)</li>
                    <li>You gain extra 3 free sessions</li>
                    <li>Expires in 8 Months</li>
                    <li>No extra charges</li>
                  <small> = N150, 000  or $215</small>
                  </ol>
                </menu>

                <menu>
                  <picture><img src={image7} alt="" /></picture>
                  <ol>
                    <h5> Class C Slot:</h5>
                    <li>8 Sessions (48 Hours)</li>
                    <li>You gain extra 2 free sessions</li>
                    <li>Expires in 5 Months</li>
                    <li>No extra charges</li>
                    <small>= N90, 000  or  $130</small>
                  </ol>
                </menu>

          </section>
          <header  className={style.heads}>
            <h5>MIXING & MASTERING</h5>
            <p>We stimulate strength & expression into your song and keep it alive. We preserve the creative ideas in the project but make it better.</p>
          </header>
          <section className={style.mixing}>
            <ul>
               {/* <picture><img src={image2} alt="" /></picture> */}
              <li>Mixing & Mastering (Mixed Beat + Vocal Stems) = N40,000  (or write it in dollar) $55</li>
              <li> Mixing & Mastering (Beat Stems + Vocal Stems) = N45,000  or $60</li>
              <li>Mastering (below 4min) = N10,000 or $15</li>
              <li>Mastering (above 4min) = N15,000  or $20</li>
            </ul>
          </section>
          <section className={style.stem}>
           <div>
             <h5>How To Send Your Stem</h5>
              <p>STEM is the most common means of transfering Audio Data from one Studio/DAW to another.</p>
           </div>
            <ol>
              <li>Create your Dry Stem Exports from your DAW in 48kHz Sample Rate, also export a Stereo Mixdown of the song, all into a Folder.
              </li>
              <li>Rename the STEMS Folder as the Title of your song, include the Song Tempo & Sample Rate information in the Folder Name.
              </li>
              <li>Zip/Rar the Folder
              </li>
              <li>Send it as Document to our Telegram [07060518866]</li>
            </ol>
          </section>
          <header className={style.heads}>
            <h5>EQUIPMENTS</h5>
          </header>
          <section>
            <ol>
              <li>Console - Yamaha MG24/14FX Mixing Console
              </li>
              <li>Monitor - Behringer Truth B2030A, M-Audio BX8</li>
              <li>DAW - FL-Studio 20, Cubase 12 Pro, Pro-tools 2021</li>
              <li>Microphones - Rode NT2A Condenser Mic, BM-800, AKG 880S Dynamic Vocal Mic</li>
              <li>External Processors - Composer Pro-XL Dynamics Processor, Sonic Exciter SX3040, Virtualizer FX2000, dbx 231S Graphic Equalizer</li>
              <li>USB Keyboard Controller - M-Audio Code49</li>
              <li>Audio Interface - Presonus AudioBox 44VSL</li>
            </ol>
          </section>
          <header className={style.heads}>
            <h5>Clients & Songs We Produced</h5>
          </header>
          <section>
            <ul className={style.produced}>
              <li>
                <picture><img src={qdot} alt="" /></picture>
                <h5>QDot Alagbe</h5>
                <a href='https://instagram.com/qdot_alagbe'>https://instagram.com/qdot_alagbe</a><br />
                <small>Songs: Moriamo | Jegele | Despirate Journey</small>
              </li>
              <li>
                <picture><img src={segunJohnson} alt="" /></picture>
                <h5>Segun Johnson</h5>
                <a href='https://instagram.com/isegunjohnson'>https://instagram.com/isegunjohnson</a><br />
                <small>Songs: Mama | Oh My Father | Vibes & Engergy</small>
              </li>
              <li>
                <picture><img src={bimboPonmile} alt="" /></picture>
                <h5>Bimbo Pomile</h5>
                <a href='https://instagram.com/bimboponmile'>https://instagram.com/bimboponmile</a><br />
                <small>Songs: Comforter | I Will Speak | Alagbada Ina</small>
              </li>
              <li>
                <picture><img src={tonymaria} alt="" /></picture>
                <h5>Dolphsongs</h5>
                <a href='https://instagram.com/tonymariaoyedele'>https://instagram.com/tonymariaoyedele</a> <br />
                <small>Songs: Believe | Stay</small>
              </li>
              <li>
                <picture><img src={tonymaria2} alt="" /></picture>
                <h5>Tonymaria Oyedele</h5>
                <a href='https://instagram.com/tonymariaoyedele'>https://instagram.com/tonymariaoyedele</a><br />
                <small>Songs: Yahwey | Alagbada Ina | Odale Ore</small>
              </li>
            </ul>
          </section>
        </article>
        </div>
      <Section5/>
      <Footer/>
        
  
    </div>
  )
}
