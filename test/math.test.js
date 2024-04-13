const Math = require('../lib/Math')

describe('Math Tests', () => {
    it('Should return the sum of two numbers', () => {
        const sum = Math.diff(10, 5)

        expect(sum).toBe(5)
    })

    //Write a test that checks that math Math.sumArray returns the sum of n numbers in a provided argument array [10, 15, 3] - 28
    it('Should return the sum of an array', () => {
        const sum = Math.sumArray([-1,-1,-1,-1])

        expect(sum).toBe(-4)
    })
})

