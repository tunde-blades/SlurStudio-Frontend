import React from 'react'
import style from './section4.module.css'
import image from '../../../images/IMG-20210630-WA0092.jpg'

export default function Section4() {
  return (
    <div className={style.box}>
        <div className='container'>
        <div>
            <h4>Our clients</h4>
            <div className={style.testimonial}>
                <div className={style.testicontent}>
                    <div className={style.texthead}>
                        <img src={image} alt=""/>
                        <div>
                            <h5>Davies Drey</h5>
                            <small>Rapper</small>
                        </div>
                    </div>
                    <p>I really enjoyed working with the <b>slurStudio.</b>  I got 1k likes and 1.5k plays within a week on my first single
                    </p>
                </div>
                <div className={style.testicontent}>
                    <div className={style.texthead}>
                        <img src={image} alt=""/>
                        <div>
                            <h5>Davies Drey</h5>
                            <small>Rapper</small>
                        </div>
                    </div>
                    <p>I really enjoyed working with the <b>slurStudio.</b>  I got 1k likes and 1.5k plays within a week on my first single
                    </p>
                </div>
                <div className={style.testicontent}>
                    <div className={style.texthead}>
                        <img src={image} alt=""/>
                        <div>
                            <h5>Davies Drey</h5>
                            <small>Rapper</small>
                        </div>
                    </div>
                    <p>I really enjoyed working with the <b>slurStudio.</b>  I got 1k likes and 1.5k plays within a week on my first single
                    </p>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}
