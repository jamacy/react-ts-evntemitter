import * as React from "react"
import { eventEmitter } from "../utils/eventEmitter"


export enum LocalEventAction {
  ACTIVE_SUGGEST_SEARCH = "ACTIVE_SUGGEST_SEARCH",
  SUBMIT_SUGGEST_SEARCH = "SUBMIT_SUGGEST_SEARCH",
}



const useListener = (eventName: string, listener: any) => {
  React.useEffect(() => {
    eventEmitter.on(eventName, listener)
    return () => {
      eventEmitter.removeEventListener(eventName, listener)
    }
  }, [])
}

const useEmitter = (eventName: string, value: any, timeoutSec: number) => {
  let timeout: NodeJS.Timeout | null = null
  if (timeout) clearTimeout(timeout)
  timeout = setTimeout(() => {
    eventEmitter.emit(eventName, value)
  }, timeoutSec)
}

export { useListener, useEmitter }