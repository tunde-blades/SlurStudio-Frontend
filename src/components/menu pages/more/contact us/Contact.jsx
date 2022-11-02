import React from 'react'
import { FaMailBulk, FaPhone, FaSnapchat, } from 'react-icons/fa'
import Header from '../../../head/Header'
import style from './contact.module.css'
import Section5 from '../../../landing page/contact-us section/Section5'
import Footer from '../../../landing page/footer section/Footer'

import image1 from '../../../../images/call-center-7040784.svg'
import image2 from '../../../../images/istockphoto-1132514587-612x612.jpg'
import image3 from '../../../../images/smartphone-6899216.png'


export default function Contact() {
  return (
    <div>


        <Header/>
      <div className='container'>
        <div className={style.contactbox} >
            <div>
              <div className={style.header}> 
                <h2>Get in touch <span>with us</span></h2>
                <p>we have made it easy for all our client to reach us at their comfort time from all over the world.</p>
              </div>
              <section>


                <ul >
                  <li>
                    <div className={style.ContactText}>
                      <h2>Talk to our Studio manager</h2>
                      <p>want to ask few questions personally? talk to our manager</p>
                      <button className='bookbtn'><a href="tel: 09051204002">Call us</a> <FaPhone/>
                      </button>
                    </div>
                    <picture>
                      <img src={image1} alt="" />
                    </picture>
                  </li>
                  <li>
                    <div className={style.ContactText}>
                      <h2>Make enquires about Slur Academy</h2>
                      <p>want to ask few questions personally? talk to our manager</p>
                      <button className='bookbtn'>
                        <a href="http://wa.me/2347060518866">Chat us now</a><FaSnapchat/>
                      </button>
                    </div>
                    <picture>
                      <img src={image2} alt="" />
                    </picture>
                  </li>
                  <li>
                    <div className={style.ContactText}>
                      <h2>Send a message directly to us</h2>
                      <p>want to ask few questions personally? talk to our manager</p>
                      <button className='bookbtn'><a href="http://wa.me/2347060518866">Send a message</a><FaMailBulk/>
                      </button>
                    </div>
                    <picture>
                      <img src={image3} alt="" />
                    </picture>
                  </li>
                </ul>
              </section>
            </div>
            
        </div>
      </div>
      <Section5/>
        <Footer/>
    </div>
  )
}
