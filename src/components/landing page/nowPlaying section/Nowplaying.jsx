import React, {useState, useRef} from 'react'
import { FaBackward, FaForward, FaMusic, FaPause,  FaPlay} from 'react-icons/fa'
import style from './play.module.css'

import music1 from './songs/04-Burna-Boy-Kilometre-file-2-(JustNaija.com)_092204.mp3'







function Nowplaying() {

  const audioPlayer = useRef();

  let [isPlaying, setIsPlaying] = useState(false)
  let togglePlayPause = ()=>{
    const prevValue = isPlaying
    setIsPlaying(!prevValue)
    if (!prevValue) {
      audioPlayer.current.play()
    }else{
      audioPlayer.current.pause()
    }
    
  }
  let next = ()=>{
  
  }
    let previous = ()=>{
      
    }
    
  return (
    <div className={style.playing}>
        <span><FaMusic/><p className={style.songTitle}>{isPlaying ? <small>Now playing </small>: <small>Play</small> } <small>Free sample Rap Beat</small></p><FaBackward onClick={previous}/><small onClick={togglePlayPause}> {isPlaying?<FaPause className={style.pause}/> : <FaPlay className={style.play}/>}</small><FaForward onClick={next}/>
          <audio ref = {audioPlayer} src={music1} preload='metadata' loop></audio>
        </span>
        
    </div>
  )
}

export default Nowplaying