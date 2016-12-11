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
