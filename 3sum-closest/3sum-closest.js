/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var threeSumClosest = function(nums, target) {
    nums.sort(function(a,b){return a-b});
    var closest = nums[0] + nums[1] + nums[2];
    for(var i = 0; i < nums.length - 2; i++){
        var j = i + 1;
        var k = nums.length - 1;
        while(j < k){
            var sum = nums[i] + nums[j] + nums[k];
            if(Math.abs(target - sum) < Math.abs(target - closest)){
                closest = sum;
            }
            if(sum > target){
                k--;
            }else if(sum < target){
                j++;
            }else{
                return sum;
            }
        }
    }
    return closest;
};