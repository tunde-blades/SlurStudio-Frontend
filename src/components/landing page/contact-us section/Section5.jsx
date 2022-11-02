import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaBookmark, FaCheck, FaPhone } from 'react-icons/fa'
import style from './section5.module.css'
import { useState } from 'react';



export default function Section5() {

    const form = useRef();
    const [sentmsg, setSentmsg] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_kx418ok', 'template_i8mnd85', form.current, 'tvtYG5403cIw5IKPO')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()

        let setSent = ()=>{
            setSentmsg(true)
        }
        setSent()

        setInterval(() => {
            setSentmsg(false)
        }, 10000);
        
    };


  return (
    <div>
        <div className='container' id={style.readyform}>
            <div className={style.readybox}>
                <div>
                    <h1>Ready to record?</h1>
                    <p>we are always avaliable anytime anyday to provide the best of our studio services</p>
                    <div>
                        <button className='bookbtn'><a href='http://wa.me/2347060518866'> <FaBookmark />Book Session</a></button>
                        </div>
                        <button className={style.callbtn}>
                            <a href="tel: 09051204002">Call us <FaPhone/></a> 
                        </button>
                    </div>
            </div>
            <div className={style.box}>
                    <h3>Have a question?</h3>
                <form ref={form} onSubmit={sendEmail}>
                    <div>
                        <label htmlFor="message">Queston:</label>
                        <textarea name="Message" id="" cols="20" rows="10" placeholder=' Write your question here'></textarea>
                    </div>
                    <div>
                        <label htmlFor="name">Name : <input type="text" name='Name' placeholder='toms brown'/></label>
                    
                        <label htmlFor="email" >Email :<input name='Email' type="email" placeholder='toms@yahoo.com'/></label>
                        
                        <label htmlFor="phone">Phone :<input type="tel" name='Phone' placeholder='+2349051204002'/></label>
                        <div className={style.sendmessage}>
                            <button type='submit' className='bookbtn'>Send message </button>
                        </div>
                    </div>
                    {sentmsg && <div className={style.sentmsg}><p>We have received your message, we'll get back to you soon. </p> <small>Thank you.</small><FaCheck/></div>}
                
                </form>
            </div>
        </div>
    </div>
  )
}
