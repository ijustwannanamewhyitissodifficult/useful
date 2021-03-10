import { renderHook } from '@testing-library/react-hooks'
import { useSet } from '.'

const initSet = new Set([1, 2, 3])
const hookRender = () => useSet(initSet)
test('initiating collection', () => {
  const { result } = renderHook(hookRender)
  expect(result.current.collection).toStrictEqual(initSet)
})
test('add element to collection', () => {
  const { result } = renderHook(hookRender)
  const expectedSet = new Set(initSet).add(4)
  expect(result.current.collection).toStrictEqual(expectedSet)
})
test('delete element from collection', () => {
  const { result } = renderHook(hookRender)
  const expectedSet = new Set(initSet)
  expectedSet.delete(2)
  expect(result.current.collection).toStrictEqual(expectedSet)
})
