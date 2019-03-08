import { subtract, total } from "./App";

const add = jest.fn((x, y) => 3)

test('add', () => {
  // const value = add(1, 2)
  expect(add(1, 2)).toBe(3)
  expect(add).toHaveBeenCalledTimes(1)
  expect(add).toHaveBeenCalledWith(1, 2)
});

// console.log(add(1, 2))

test('subtract', () => {
  expect(subtract(1, 2)).toBe(-1)
  expect(subtract(5, 13)).toBe(-8)
});

// console.log(subtract(1, 2))
// console.log(subtract(5, 13))

test('Fake Test', () => {
  expect(true).toBeTruthy();
})

test('total', () => {
  expect(total(5, 20)).toBe('$25')
})
