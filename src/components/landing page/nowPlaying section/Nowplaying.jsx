import React, {useState, useRef} from 'react'
import { FaBackward, FaForward, FaMusic, FaPause,  FaPlay} from 'react-icons/fa'
import style from './play.module.css'

import music1 from './songs/__Zehra___Oriental_Reggaeton_Type_Beat__Instrumental__Prod._by_Ultra_Beats(128k).m4a'

import music2 from './songs/gggg.m4a'

import music3 from './songs/Hard_Fast_Rap_Trap_Beat_Instrumental___Freestyle_Beat_-__FLOW_ELEVATED____Free_Type_Beat_2022(128k).m4a'

import music4 from './songs/Hard_Fast_Rap_Trap_Beat_Instrumental___Freestyle_Beat_-__FLOW_HEAVY____Free_Type_Beat_2022(128k).m4a'


let musics = [music1, music2, music3, music4]
let index = 1
let newmusics = musics[index]



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
    setIsPlaying(index=2)
  }
    let previous = ()=>{
    if (index < musics.length) {
      return musics[index--]
    }
    else if(index > musics.length ){
      return musics[musics.length --]
    }
  }
    

  return (
    <div className={style.playing}>
        <span><FaMusic/><p className={style.songTitle}>{isPlaying ? <small>Now playing </small>: <small>Play</small> } <small>Free sample Rap Beat</small></p><FaBackward onClick={previous}/><small onClick={togglePlayPause}> {isPlaying?<FaPause className={style.pause}/> : <FaPlay className={style.play}/>}</small><FaForward onClick={next}/>
          <audio ref = {audioPlayer} src={newmusics} preload='metadata' loop></audio>
        </span>
        

    </div>
  )
}

export default Nowplaying