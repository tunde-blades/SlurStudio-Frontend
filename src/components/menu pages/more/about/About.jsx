import React from 'react'
import Header from '../../../head/Header'
import style from './about.module.css'
import Footer from '../../../landing page/footer section/Footer'
import Section5 from '../../../landing page/contact-us section/Section5'
import Founder from './Founder'
import image1 from '../../../../images/audio-720589_1920.jpg'
import image2 from '../../../../images/audio-1221152_1920.jpg'
import image3 from '../../../../images/microphone-4272188.jpg'

import image4 from '../../../../images/istockphoto-1132514587-612x612.jpg'
import image5 from '../../../../images/guitar-lesson-435099_1920.jpg'
import image6 from '../../../../images/istockphoto-872697970-612x612.jpg'

export default function About() {
  return (
    <div className={style.about}>
        <Header/>
        <div className='container'>
          <div className={style.aboutcontainer}>
            <div className={style.aboutbox}>
              <h1>Know more <span>about us</span></h1>
              <p>slursStudio is a well equiped studio for various artist to record and get the amazing sound beyond their expectation.</p>
            </div>
          </div>
          <article className={style.aboutarticle}>
              <section>
                <div className={style.aboutContent}>
                  <h2>Our top class equipments</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem sunt est, impedit architecto fuga odit nulla dolorem labore eum! Cumque rem saepe corporis eius ab voluptate nostrum, dicta porro sit delectus in ut iusto amet ratione asperiores fugiat quas eos similique laboriosam voluptatum expedita ad omnis. Quod officia, soluta dolores, maxime iure vel nisi fugit rem repellat, non vitae eum. Excepturi beatae aperiam amet nostrum voluptates, blanditiis enim quisquam possimus vel id, est sapiente vero non assumenda velit rem. Exercitationem eaque vitae repudiandae non cupiditate deleniti est, officia voluptate, enim eveniet voluptatum autem ullam ipsum laudantium consequuntur facilis natus aperiam ducimus doloremque facere dolores sint nihil sunt perspiciatis. Ipsum sapiente voluptatum assumenda repellat eum doloribus sunt ab officiis veniam pariatur ratione, nobis itaque perferendis est quas non possimus. </p>
                </div>
                <picture>
                  <img src={image1} alt="" />
                  <img src={image2} alt="" />
                  <img src={image3} alt="" />
                </picture>
              </section>
              <section>
                <div className={style.aboutContent}>
                  <h2>Our first class Academy</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae cupiditate consectetur dolor. Ab harum ratione corporis? Reprehenderit libero, doloremque sint eos quod optio. Quis perferendis molestiae tenetur nihil deserunt eaque.</p>
                </div>
                <picture>
                  <img src={image4} alt="" />
                  <img src={image5} alt="" />
                  <img src={image6} alt="" />
                </picture>
              </section>
            </article>
        </div>
        <Founder/>
        <Section5/>
        <Footer/>
    </div>
  )
}
