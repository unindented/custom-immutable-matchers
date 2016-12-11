/// <reference types="jest"/>

declare namespace jest {
  interface Matchers {
    toBeImmutable(): boolean
    toEqualImmutable(actual: any): boolean
  }
}
