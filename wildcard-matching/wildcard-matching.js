/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    var i = 0, j = 0, star = -1, match = 0, sLen = s.length, pLen = p.length;
    while (i < sLen) {
        if (j < pLen && (s[i] === p[j] || p[j] === '?')) {
            i++;
            j++;
        } else if (j < pLen && p[j] === '*') {
            star = j;
            match = i;
            j++;
        } else if (star !== -1) {
            j = star + 1;
            i = ++match;
        } else {
            return false;
        }
    }
    while (j < pLen && p[j] === '*') {
        j++;
    }
    return j === pLen;
    
};