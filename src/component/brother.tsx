import React , { useState , useEffect } from 'react'

import { useEmitter ,LocalEventAction  } from "../hooks/useEventEmitter"
import {  eventEmitter } from '../utils/eventEmitter' 


export default function(){
  const [value ,setValue ] = useState('jamacy')

//  const UseEmitter = useEmitter()


  function handleChange(){
    console.log("val")
    let str = 'jamacy' + Math.floor(Math.random() * 10) 
    setValue(str)
  }
  

  useEffect(() => {
    // useEmitter(LocalEventAction.ACTIVE_SUGGEST_SEARCH,value,100)

    eventEmitter.emit(
      LocalEventAction.ACTIVE_SUGGEST_SEARCH,
      value
    )


    return () => {}
  }, [value])

  
  
return <>
  <button onClick={()=>handleChange()}>改变Brother A 的值</button>
  <div>我是兄弟组件A，我的值是{value}</div>
  </>
}