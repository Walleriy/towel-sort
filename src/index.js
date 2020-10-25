module.exports = function towelSort (matrix) {
    if (matrix == null) {
        return []
    }
    return matrix.reduce((a, b, i) => a.concat(i % 2 === 0 ? b : b.reverse()), []);
}
