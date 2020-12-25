import React , { useEffect, useState }  from 'react'
import { useListener ,LocalEventAction } from "../hooks/useEventEmitter"
import {  eventEmitter } from '../utils/eventEmitter' 


export default function(){
  const [value ,setValue ] = useState<string>('')
  // 通过 hook 的方式 listener
  //useListener(LocalEventAction.ACTIVE_SUGGEST_SEARCH,handleListener)
  // 通过调用的方式 listener
  eventEmitter.on(
    LocalEventAction.ACTIVE_SUGGEST_SEARCH,
    handleListener
  )
  function handleListener(value:string){
    console.log("我接受到了消息",value);
    setValue(value)
  }

  return <>
  <div>我是兄弟组件B，我拿到兄弟A的值是-{value}</div>
  </>
}