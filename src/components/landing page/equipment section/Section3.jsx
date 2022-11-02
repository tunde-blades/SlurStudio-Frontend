import React from 'react'
import { FaAudible, FaMicrophone, FaMixer, FaRecordVinyl, FaToggleOn,  FaToolbox, FaWatchmanMonitoring } from 'react-icons/fa'
import style from './section3.module.css'

export default function Section3() {
  return (
    <div className={style.box}>
        <div className="container">
            <div>
                <div>
                  <h3>Equipments</h3>
                  <p>Our studio is well equiped with one the best quality studio equipments that will give your lycris the exact sounds it demands</p>
                </div>
                <br />
                <ul className={style.equipments}>
                  <li><FaMixer/>External Processors</li>                  
                  <li><FaWatchmanMonitoring/>Monitor</li>
                  <li><FaToolbox/> DAW</li>
                  <li><FaMicrophone/>Microphones</li>
                  <li><FaToggleOn/> USB Keyboard Controller</li>
                  <li><FaAudible/>Audio Interface </li>
                  <li><FaRecordVinyl/>Yamaha Console</li>
                </ul>
            </div>
        </div>
    </div>
  )
}
