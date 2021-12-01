/**
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {
    var result = 0;
    var negative = false;
    if (x < 0) {
        negative = true;
        x = -x;
    }
    while (x > 0) {
        result = result * 10 + x % 10;
        x = Math.floor(x / 10);
    }
    if (negative) {
        result = -result;
    }
    if (result < -2147483648 || result > 2147483647) {
        return 0;
    }
    return result;
};