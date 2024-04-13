class Math {
    static sum(a, b) {
        return a + b
    }

    //static is so that math.diff can be written as Math.diff and does not requre "const = new Math()"
    static diff(a, b) {
        return a - b
    }

    // static sumArray(a) {
    //     let sum = 0
    //     for (let i = 0; i < a.length; i++) {
    //         sum += a[i]
    //     }
    //     return sum
    // }

    static sumArray(array) {
        return array.reduce((x, y) => x + y, 0)
    }
}


module.exports = Math