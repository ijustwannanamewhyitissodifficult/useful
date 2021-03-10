import { useState } from 'react'

export const useSet = <T = unknown>(init: Set<T>) => {
  const [collection, setCollection] = useState(init)
  return {
    /** collection variable */
    collection: collection,

    /** add element to collection */
    add: (v: T) => setCollection(c => (c.add(v), c)),

    /** add element to collection */
    del: (v: T) => setCollection(c => (c.delete(v), c))
  }
}