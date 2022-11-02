import React from 'react'
import logo from '../../../images/SlurArena Icon.png'
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa'
import style from './footer.module.css'
export default function Footer() {
  return (
    <footer className={style.box}>
        <div className='container'>
            <div className={style.footercontent}>
                <div className={style.address}>
                    <h3 className='logo' id={style.sidebarlogo}><img src={logo} alt="" />
                        slur<span>S</span>tudio
                    </h3>
                    <p>Producing solid sound...</p>
                    <address>5, Odebiyi street, Haruna College Road, Ifako Ogba, Lagos, Nigeria. <br />
                        slurarena@gmail.com
                    </address>
                    <small>+2349051204002</small>
                </div>
            <div className={style.follow}>
                <h4>follow us</h4>
                <ul>
                    <li><a href="http://facebook.com/slurstudio"><FaFacebook/> </a> </li>
                    <li><a href='http://twitter.com/sluracademy'><FaTwitter/> </a></li>
                    <li><a href='http://instagram.com/sluracademy'> <FaInstagram/></a> </li>
                    <li> <a href="http://wa.me/2347060518866"><FaWhatsapp/></a> </li>
                </ul>
            </div>
            <div className={style.terms}>
                <small>&copy; 2022</small>
                <div>Terms and Condition</div>
            </div>
            </div>
        </div>
    </footer>
  )
}
