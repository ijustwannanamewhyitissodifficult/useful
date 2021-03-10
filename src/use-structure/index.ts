import type { Structure } from '../@type-utility'
import { useState } from 'react'

type UseStructureReturn<T> = {
  structure: T,
  get: <K extends keyof T>(k: K) => T[K],
  set: <K extends keyof T>(k: K, v: T[K]) => void
}


export const useStructure = <T extends Structure = {}>(init: T): UseStructureReturn<T> => {
  const [structure, setStructure] = useState(init)
  const get: UseStructureReturn<T>['get'] = (k) => structure[k]
  const set: UseStructureReturn<T>['set'] = (k, v) => setStructure(s => ({ ...s, [k]: v }))
  return {
    /** the structure object*/
    structure,
    /** the method for get property in structure by key*/
    get,
    /** the method for set property in structure by key & value*/
    set
  }

}