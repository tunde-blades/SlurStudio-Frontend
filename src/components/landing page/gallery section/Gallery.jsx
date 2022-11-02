import React from 'react'
import style from './gallery.module.css'
import image2 from '../../../images/audio-720589_1920.jpg'
import image1 from '../../../images/piano-2323844_1920.jpg'
import image7 from '../../../images/troy-t-dX76Mts-LVM-unsplash.jpg'
import image8 from '../../../images/josh-sorenson-LVmyjS0hxYU-unsplash.jpg'
import image3 from '../../../images/clarinet-1708715_1920.jpg'
import image6 from '../../../images/guitar-lesson-435099_1920.jpg'
import image5 from '../../../images/dj-743802.jpg'
import image4 from '../../../images/musician-1658887_1920.jpg'



export default function Gallery(){


  
  return (
    
    <div>
       <picture className={style.gallery}>
        <img src={image1} alt="" />
        <img src={image2} alt="" />
        <img src={image3} alt="" />
        <img src={image4} alt="" />
        <img src={image5} alt="" />
        <img src={image6} alt="" />
        <img src={image7} alt="" />
        <img src={image8} alt="" />
       </picture>
    </div>
  )
}
