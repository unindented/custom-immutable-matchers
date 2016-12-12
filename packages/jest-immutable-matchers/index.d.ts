/// <reference types="jest"/>

declare namespace jest {
  interface Matchers {
    toBeImmutable(): boolean
    toBeIterableImmutable(): boolean
    toBeKeyedImmutable(): boolean
    toBeIndexedImmutable(): boolean
    toBeAssociativeImmutable(): boolean
    toBeOrderedImmutable(): boolean
    toBeImmutableList(): boolean
    toBeImmutableMap(): boolean
    toBeImmutableOrderedMap(): boolean
    toBeImmutableSet(): boolean
    toBeImmutableOrderedSet(): boolean
    toBeImmutableStack(): boolean
    toBeImmutableSeq(): boolean
    toEqualImmutable(actual: any): boolean
  }
}
