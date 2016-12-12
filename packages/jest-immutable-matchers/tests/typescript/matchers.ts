/// <reference types="jest" />
/// <reference types="../../index" />

import * as Immutable from 'immutable'

describe('Matchers', function () {
  describe('#toBeImmutable', function () {
    it('does not pass if the argument is not an iterable', function () {
      const l = [1, 2]
      expect(l).not.toBeImmutable()
    })

    it('passes if the argument is an iterable', function () {
      const l = Immutable.List.of(1, 2)
      expect(l).toBeImmutable()
    })
  })

  describe('#toBeIterableImmutable', function () {
    it('does not pass if the argument is not an iterable immutable', function () {
      const l = [1, 2]
      expect(l).not.toBeIterableImmutable()
    })

    it('passes if the argument is an iterable immutable', function () {
      const l = Immutable.List.of(1, 2)
      expect(l).toBeIterableImmutable()
    })
  })

  describe('#toBeKeyedImmutable', function () {
    it('does not pass if the argument is not a keyed immutable', function () {
      const l = Immutable.List.of(1, 2)
      expect(l).not.toBeKeyedImmutable()
    })

    it('passes if the argument is a keyed immutable', function () {
      const m = Immutable.Map({a: 1})
      expect(m).toBeKeyedImmutable()
    })
  })

  describe('#toBeIndexedImmutable', function () {
    it('does not pass if the argument is not an indexed immutable', function () {
      const m = Immutable.Map({a: 1})
      expect(m).not.toBeIndexedImmutable()
    })

    it('passes if the argument is an indexed immutable', function () {
      const l = Immutable.List.of(1, 2)
      expect(l).toBeIndexedImmutable()
    })
  })

  describe('#toBeAssociativeImmutable', function () {
    it('does not pass if the argument is not an associative immutable', function () {
      const o = Immutable.fromJS('foo')
      expect(o).not.toBeAssociativeImmutable()
    })

    it('passes if the argument is an associative immutable', function () {
      const m = Immutable.Map({a: 1})
      expect(m).toBeAssociativeImmutable()
    })
  })

  describe('#toBeOrderedImmutable', function () {
    it('does not pass if the argument is not an ordered immutable', function () {
      const m = Immutable.Map({a: 1})
      expect(m).not.toBeOrderedImmutable()
    })

    it('passes if the argument is an ordered immutable', function () {
      const l = Immutable.List.of(1, 2)
      expect(l).toBeOrderedImmutable()
    })
  })

  describe('#toBeImmutableList', function () {
    it('does not pass if the argument is not an immutable list', function () {
      const l = [1, 2]
      expect(l).not.toBeImmutableList()
    })

    it('passes if the argument is an immutable list', function () {
      const l = Immutable.List.of(1, 2)
      expect(l).toBeImmutableList()
    })
  })

  describe('#toBeImmutableMap', function () {
    it('does not pass if the argument is not an immutable map', function () {
      const m = {a: 1}
      expect(m).not.toBeImmutableMap()
    })

    it('passes if the argument is an immutable map', function () {
      const m = Immutable.Map({a: 1})
      expect(m).toBeImmutableMap()
    })
  })

  describe('#toBeImmutableOrderedMap', function () {
    it('does not pass if the argument is not an immutable ordered map', function () {
      const m = Immutable.Map({a: 1})
      expect(m).not.toBeImmutableOrderedMap()
    })

    it('passes if the argument is an immutable ordered map', function () {
      const m = Immutable.OrderedMap({a: 1})
      expect(m).toBeImmutableOrderedMap()
    })
  })

  describe('#toBeImmutableSet', function () {
    it('does not pass if the argument is not an immutable set', function () {
      const s = [1, 2]
      expect(s).not.toBeImmutableSet()
    })

    it('passes if the argument is an immutable set', function () {
      const s = Immutable.Set.of(1, 2)
      expect(s).toBeImmutableSet()
    })
  })

  describe('#toBeImmutableOrderedSet', function () {
    it('does not pass if the argument is not an immutable ordered set', function () {
      const s = Immutable.Set.of(1, 2)
      expect(s).not.toBeImmutableOrderedSet()
    })

    it('passes if the argument is an immutable ordered set', function () {
      const s = Immutable.OrderedSet.of(1, 2)
      expect(s).toBeImmutableOrderedSet()
    })
  })

  describe('#toBeImmutableStack', function () {
    it('does not pass if the argument is not an immutable stack', function () {
      const s = [1, 2]
      expect(s).not.toBeImmutableStack()
    })

    it('passes if the argument is an immutable stack', function () {
      const s = Immutable.Stack.of(1, 2)
      expect(s).toBeImmutableStack()
    })
  })

  describe('#toBeImmutableSeq', function () {
    it('does not pass if the argument is not an immutable sequence', function () {
      const s = [1, 2]
      expect(s).not.toBeImmutableSeq()
    })

    it('passes if the argument is an immutable sequence', function () {
      const s = Immutable.Seq.of(1, 2)
      expect(s).toBeImmutableSeq()
    })
  })

  describe('#toEqualImmutable', function () {
    it('does not pass if the lists are not equal', function () {
      const l1 = Immutable.List.of(1, 2)
      const l2 = Immutable.List.of(1, 2, 3)

      expect(l1).not.toBe(l2)
      expect(l1).not.toEqualImmutable(l2)
    })

    it('passes if the lists are equal', function () {
      const l1 = Immutable.List.of(1, 2)
      const l2 = Immutable.List.of(1, 2)

      expect(l1).not.toBe(l2)
      expect(l1).toEqualImmutable(l2)
    })

    it('does not pass if the maps are not equal', function () {
      const m1 = Immutable.Map({a: 1})
      const m2 = Immutable.Map({a: 2})

      expect(m1).not.toBe(m2)
      expect(m1).not.toEqualImmutable(m2)
    })

    it('passes if the maps are equal', function () {
      const m1 = Immutable.Map({a: 1})
      const m2 = Immutable.Map({a: 1})

      expect(m1).not.toBe(m2)
      expect(m1).toEqualImmutable(m2)
    })
  })
})
