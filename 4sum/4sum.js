/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
 var fourSum = function(nums, target) {
    var result = [];
    var len = nums.length;
    if(len < 4) return result;
    nums.sort(function(a, b){return a - b;});
    for(var i = 0; i < len - 3; i++){
        if(i > 0 && nums[i] == nums[i - 1]) continue;
        for(var j = i + 1; j < len - 2; j++){
            if(j > i + 1 && nums[j] == nums[j - 1]) continue;
            var left = j + 1;
            var right = len - 1;
            while(left < right){
                var sum = nums[i] + nums[j] + nums[left] + nums[right];
                if(sum == target){
                    result.push([nums[i], nums[j], nums[left], nums[right]]);
                    while(left < right && nums[left] == nums[left + 1]) left++;
                    while(left < right && nums[right] == nums[right - 1]) right--;
                    left++;
                    right--;
                }else if(sum < target){
                    left++;
                }else{
                    right--;
                }
            }
        }
    }
    return result;
};