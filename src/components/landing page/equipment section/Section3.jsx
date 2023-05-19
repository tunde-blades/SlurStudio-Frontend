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
                  <p>Our studio is equipped with brilliant audio devices that will excite your music</p>
                </div>
                <br />
                <ul className={style.equipments}>
                  <li><FaMixer/>M-Audio BX8</li>                  
                  <li><FaWatchmanMonitoring/>Presonus Quantum</li>
                  <li><FaToolbox/> AudioBox 44VSL</li>
                  <li><FaMicrophone/>Rode NT2A Condenser Mic</li>
                  <li><FaToggleOn/>M-Audio Code49</li>
                  <li><FaAudible/>Behringer Truth B2030A</li>
                  <li><FaMicrophone/>BM-800 Mic</li>
                  <li><FaRecordVinyl/>Yamaha MG24/14FX Mixing Console</li>
                  <li>FL-Studio</li>
                  <li>Cubase 12 Pro</li>
                  <li>Pro-tools</li>
                  <li><FaMicrophone/>AKG 880S Dynamic Vocal Mic</li>
                  <li>Composer Pro-XL Dynamics Processor</li>
                  <li>Sonic Exciter SX3040</li>
                  <li>Virtualizer FX2000</li>
                  <li>Graphic EQ</li>
                </ul>
            </div>
        </div>
    </div>
  )
}
