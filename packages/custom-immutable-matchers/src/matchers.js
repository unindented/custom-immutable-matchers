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

export const toBeIterableImmutable = comparator((actual) => {
  const pass = Immutable.Iterable.isIterable(actual)
  const message = `Expected ${toString(actual)}${pass ? ' not' : ''} to be an iterable immutable`
  return {pass, message}
})

export const toBeKeyedImmutable = comparator((actual) => {
  const pass = Immutable.Iterable.isKeyed(actual)
  const message = `Expected ${toString(actual)}${pass ? ' not' : ''} to be a keyed immutable`
  return {pass, message}
})

export const toBeIndexedImmutable = comparator((actual) => {
  const pass = Immutable.Iterable.isIndexed(actual)
  const message = `Expected ${toString(actual)}${pass ? ' not' : ''} to be an indexed immutable`
  return {pass, message}
})

export const toBeAssociativeImmutable = comparator((actual) => {
  const pass = Immutable.Iterable.isAssociative(actual)
  const message = `Expected ${toString(actual)}${pass ? ' not' : ''} to be an associative immutable`
  return {pass, message}
})

export const toBeOrderedImmutable = comparator((actual) => {
  const pass = Immutable.Iterable.isOrdered(actual)
  const message = `Expected ${toString(actual)}${pass ? ' not' : ''} to be an ordered immutable`
  return {pass, message}
})

export const toBeImmutableList = comparator((actual) => {
  const pass = Immutable.List.isList(actual)
  const message = `Expected ${toString(actual)}${pass ? ' not' : ''} to be an immutable list`
  return {pass, message}
})

export const toBeImmutableMap = comparator((actual) => {
  const pass = Immutable.Map.isMap(actual)
  const message = `Expected ${toString(actual)}${pass ? ' not' : ''} to be an immutable map`
  return {pass, message}
})

export const toBeImmutableOrderedMap = comparator((actual) => {
  const pass = Immutable.OrderedMap.isOrderedMap(actual)
  const message = `Expected ${toString(actual)}${pass ? ' not' : ''} to be an immutable ordered map`
  return {pass, message}
})

export const toBeImmutableSet = comparator((actual) => {
  const pass = Immutable.Set.isSet(actual)
  const message = `Expected ${toString(actual)}${pass ? ' not' : ''} to be an immutable set`
  return {pass, message}
})

export const toBeImmutableOrderedSet = comparator((actual) => {
  const pass = Immutable.OrderedSet.isOrderedSet(actual)
  const message = `Expected ${toString(actual)}${pass ? ' not' : ''} to be an immutable ordered set`
  return {pass, message}
})

export const toBeImmutableStack = comparator((actual) => {
  const pass = Immutable.Stack.isStack(actual)
  const message = `Expected ${toString(actual)}${pass ? ' not' : ''} to be an immutable stack`
  return {pass, message}
})

export const toBeImmutableSeq = comparator((actual) => {
  const pass = Immutable.Seq.isSeq(actual)
  const message = `Expected ${toString(actual)}${pass ? ' not' : ''} to be an immutable sequence`
  return {pass, message}
})

export const toEqualImmutable = comparator((actual, expected) => {
  const pass = Immutable.is(actual, expected)
  const message = `Expected ${toString(actual)}${pass ? ' not' : ''} to equal ${toString(expected)}`
  return {pass, message}
})
