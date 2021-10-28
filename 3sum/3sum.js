/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function(nums) {
    var result = [];
    var len = nums.length;
    if (len < 3) return result;
    nums.sort(function(a, b) {
        return a - b;
    });
    for (var i = 0; i < len - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        var left = i + 1;
        var right = len - 1;
        while (left < right) {
            var sum = nums[i] + nums[left] + nums[right];
            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);
                left++;
                right--;
                while (left < right && nums[left] === nums[left - 1]) left++;
                while (left < right && nums[right] === nums[right + 1]) right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }
    return result;
}