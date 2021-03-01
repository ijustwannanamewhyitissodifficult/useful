import { useState } from 'react'
import { EnumMember, EnumType } from 'typescript'
import { UnArray } from '../@type-utility'

export type SwitchKey = (string | number)
/** There should be no duplication in state keys */
export const useSwitch = (keys: SwitchKey[], defaultSwitched: SwitchKey) => {
  const [switched, setSwitched] = useState(defaultSwitched)

  return {
    /** check switched state by index (from zero) */
    isOn: (key: UnArray<typeof keys>) => {
      return switched === key
    },

    /** check */
    switchTo: (index: UnArray<typeof keys>) => {
      return setSwitched(index)
    },

    currentSwitched: () => {
      return switched
    }
  }
}

