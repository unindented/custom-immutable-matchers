import * as Immutable from 'immutable'

const comparator = (func) => () => ({
  compare: func
})

const toString = function (obj) {
  return obj && typeof obj.toString === 'function' ? obj.toString() : obj
}

export const toBeImmutable = comparator((actual) => {
  const pass = Immutable.Iterable.isIterable(actual)
  const message = `Expected ${toString(actual)}${pass ? ' not' : ''} to be immutable`
  return {pass, message}
})

export const toEqualImmutable = comparator((actual, expected) => {
  const pass = Immutable.is(actual, expected)
  const message = `Expected ${toString(actual)}${pass ? ' not' : ''} to equal ${toString(expected)}`
  return {pass, message}
})
