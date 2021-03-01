import { act, renderHook } from '@testing-library/react-hooks'
import { useBoolState } from '.'

test('initiating bool state', () => {
  const { result } = renderHook(() => useBoolState(true))
  expect(result.current.bool).toBe(true)
})

test('set true bool state to true', () => {
  const { result } = renderHook(() => useBoolState(true))

  act(() => {
    result.current.setFalse()
  })

  expect(result.current.bool).toBe(false)
})

test('set true bool state to false', () => {
  const { result } = renderHook(() => useBoolState(true))

  act(() => {
    result.current.setTrue()
  })

  expect(result.current.bool).toBe(true)
})

