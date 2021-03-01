import { act, renderHook } from '@testing-library/react-hooks'
import { useStructure } from '.'

test('initiating structure', () => {
  const structure = { id: 1, name: 'name' }
  const { result } = renderHook(() => useStructure(structure))
  expect(result.current.structure).toBe(structure)
})

test('get attr in structure ', () => {
  const structure = { id: 1, name: 'name' }
  const { result } = renderHook(() => useStructure(structure))
  expect(result.current.get('id')).toBe(1)
  expect(result.current.get('name')).toBe('name')
})

test('set attr in structure', () => {
  const structure = { id: 1, name: 'name' }
  const { result } = renderHook(() => useStructure(structure))

  act(() => {
    result.current.set('id', 0)
    result.current.set('name', 'nam')
  })

  expect(result.current.get('id')).toBe(0)
  expect(result.current.get('name')).toBe('nam')
})
