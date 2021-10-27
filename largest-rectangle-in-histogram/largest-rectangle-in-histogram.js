/**
 * @param {number[]} heights
 * @return {number}
 */
 var largestRectangleArea = function(heights) {
    var maxArea = 0;
    var stack = [];
    for (var i = 0; i < heights.length; i++) {
        var h = heights[i];
        while (stack.length && h < heights[stack[stack.length - 1]]) {
            var h2 = heights[stack.pop()];
            var w = stack.length ? i - stack[stack.length - 1] - 1 : i;
            maxArea = Math.max(maxArea, h2 * w);
        }
        stack.push(i);
    }
    while (stack.length) {
        var h2 = heights[stack.pop()];
        var w = stack.length ? heights.length - stack[stack.length - 1] - 1 : heights.length;
        maxArea = Math.max(maxArea, h2 * w);
    }
    return maxArea;
}

    