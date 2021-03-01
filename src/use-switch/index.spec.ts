import { act, renderHook } from '@testing-library/react-hooks'
import { useSwitch } from '.'

enum State {
  LOGIN, LOGOUT, BUSY
}
describe('switch', () => {
  test('initiating switched state', () => {
    const hookRender = () => useSwitch([State.BUSY, State.LOGOUT, State.LOGIN], State.BUSY)
    const { result } = renderHook(hookRender)
    expect(result.current.isOn(State.BUSY)).toBeTruthy()
    expect(result.current.isOn(State.LOGIN)).toBeFalsy()
    expect(result.current.isOn(State.LOGOUT)).toBeFalsy()
    expect(result.current.currentSwitched()).toBe(State.BUSY)
  })
  test('switching state', () => {
    const hookRender = () => useSwitch([State.BUSY, State.LOGOUT], State.BUSY)
    const { result } = renderHook(hookRender)

    act(() => {
      result.current.switchTo(State.LOGOUT)
    })

    expect(result.current.isOn(State.BUSY)).toBeFalsy()
    expect(result.current.isOn(State.LOGIN)).toBeFalsy()
    expect(result.current.isOn(State.LOGOUT)).toBeTruthy()
    expect(result.current.currentSwitched()).toBe(State.LOGOUT)
  })


})
