import { useState } from 'react'

export const useBoolState = (init: boolean | (() => boolean)) => {
  const [bool, setBool] = useState<boolean>(init)

  const setTrue = () => {
    if (!bool) setBool(true)
  }

  const setFalse = () => {
    if (bool) setBool(false)
  }

  return {
    /** the bool variable */
    bool,
    /** the set-true function */
    setTrue,
    /** the set-false function */
    setFalse
  }
}