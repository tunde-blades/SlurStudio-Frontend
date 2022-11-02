import React from 'react'
import Header from '../../../head/Header'
import style from './sluracademy.module.css'
import Section5 from '../../../landing page/contact-us section/Section5'
import Footer from '../../../landing page/footer section/Footer'


import image1 from '../../../../images/troy-t-dX76Mts-LVM-unsplash.jpg'
import image2 from '../../../../images/josh-sorenson-LVmyjS0hxYU-unsplash.jpg'
import image3 from '../../../../images/piano-2323844_1920.jpg'
import image4 from '../../../../images/dj-743802.jpg'
import image5 from '../../../../images/journal-675227_1920.jpg'



export default function Sluracademy() {
  return (
    <div>
        <Header/>
        <div className={style.academy}>
          <article>
            <section className='container'>
             <div className={style.academyContent}>
               <h1>Explore over 20+ courses in our <span>academy</span></h1>
              <p>Slur Academy offers affordable & intenseive practical base program in Music Production, Mixing & Mastering engineering, Beat Making and Piano.</p>
             </div>
             <iframe width="350" height='280' src="https://www.youtube.com/embed/XBOpDB35FIA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loop='true'></iframe>
            </section>
            <picture className={style.gallery}>
                <img src={image4} alt="" />
                <img src={image5} alt="" />
                <img src={image3} alt="" />
                <img src={image2} alt="" />
                <img src={image1} alt="" />
            </picture>
            <section className='container'>
              <div className={style.academyContent}>
                <h2>A 12 week <span>Piano Training</span></h2>
                <p>We teach you scales, chords & progressions on the keyboard and their applications. Two classes per week for a period of 3months should set a good base. Students should have personal keyboard to rehearse with at home <br /> -this helps to speed up the learning process.
                </p>
              </div>
              <picture><img src={image3} alt="" /><span className={style.price}>$85 / N60,000</span></picture>
              <button className="bookbtn" id={style.regbtn}>Register now</button>
            </section>
            <section className='container'>
              <div className={style.academyContent}>
                <h2>A 18 week <span>Music Production Training</span></h2>
                <p>We train you how to make beat on digital Audio Workstation; FL-Studio, Cubase, Logic, Reason, etc... <br /> We'll also teach you how to records vocals and live instrument and also train your ear to understanding Frequency & Dynamics which are the bases of Mixing and Mastering engineering. We will work you through the process PF professional Mixing and Mastering. <br />
                Music Production is a complete package, it runs for 4months with 4classes per week
                </p>
              </div>
              <picture><img src={image1} alt="" /><span className={style.price}>$430 / N300,000</span></picture>
              <button className="bookbtn" id={style.regbtn}>Register now</button>
            </section>
            <section className='container'>
              <div className={style.academyContent}>
                <h2>A 8 week <span>Beat Making Class</span></h2>
                <p>You'll learn to sequence beat on Fruity Loops Studio, Mix and Master the Beat. <br /> it runs for 2months with two classes per week
                </p>
              </div>
              <picture><img src={image2} alt="" /><span className={style.price}>$145 / N100,000</span></picture>
              <button className="bookbtn" id={style.regbtn}>Register now</button>
            </section>
            <section className='container'>
              <div className={style.academyContent}>
                <h2>A 12 week <span>Mix & Mastering Engineering</span></h2>
                <p>This ia a 3months practical classes on Recording, Mixing & Mastering with 3classes per week. We teach you Recordings Techniques and train your ears to understanding Frequency & Dynamics which are the bases of Mixing and Mastering
                </p>
              </div>
              <picture><img src={image4} alt="" /><span className={style.price}>$285 / N200,000</span></picture>
              <button className="bookbtn" id={style.regbtn}>Register now</button>
            </section>
          </article>
            
        </div>
        <Section5/>
        <Footer/>
    </div>
  )
}
