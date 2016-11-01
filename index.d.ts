/// <reference types="jasmine"/>

declare namespace jasmine {
    interface Matchers {
        toBeImmutable(): boolean;
        toEqualImmutable(actual: any): boolean;
    }
}
