/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
     	var left = 0;
     	var right = nums.length - 1;
     	var mid;
     	while(left <= right) {
     		mid = Math.floor((left + right) / 2);
     		if(nums[mid] === target) {
     			return mid;
     		}
     		if(nums[mid] > nums[left]) {
     			if(target >= nums[left] && target < nums[mid]) {
     				right = mid - 1;
     			} else {
     				left = mid + 1;
     			}
     		} else if(nums[mid] < nums[left]) {
     			if(target > nums[mid] && target <= nums[right]) {
     				left = mid + 1;
     			} else {
     				right = mid - 1;
     			}
     		} else {
     			left++;
     		}
     	}
     	return -1; 
    };
