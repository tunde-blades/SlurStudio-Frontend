import React from 'react'
import founderimg from '../../../../images/slurfounder.jpg'
import style from './about.module.css'

export default function Founder() {
  return (
    <div className='container'>
        <section className={style.founder}>
            <article>
                <div className={style.founderBox}>
                    <picture><img src={founderimg} alt="" /></picture>
                    <div className={style.founderDetails}>
                      <h2>Adeyemo Daniel</h2>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi facere totam soluta.</p>
                      <h5>Founder.</h5>
                    </div>
                </div>
            </article>
        </section>

    </div>
  )
}
