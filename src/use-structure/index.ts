import { useState } from 'react'

type HookReturn<T> = {
  structure: T,
  get: <K extends keyof T>(k: K) => T[K],
  set: <K extends keyof T>(k: K, v: T[K]) => void
}


export const useStructure = <T extends { [index: string]: unknown } = {}>(init: T): HookReturn<T> => {
  const [structure, setStructure] = useState(init)
  const get: HookReturn<T>['get'] = (k) => structure[k]
  const set: HookReturn<T>['set'] = (k, v) => setStructure(s => ({ ...s, [k]: v }))
  return {
    /** the structure object*/
    structure,
    /** the method for get property in structure by key*/
    get,
    /** the method for set property in structure by key & value*/
    set
  }

}