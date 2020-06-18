/**
 * 给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target，
 * 写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1。
 * 
 * 示例 1:
 * 输入: nums = [-1,0,3,5,9,12], target = 9
 * 输出: 4
 * 
 * 示例 2:
 * 输入: nums = [-1,0,3,5,9,12], target = 2
 * 输出: -1
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

//思路：
//获取中间值mid，最左值left和最右值right
//将target与mid比较，等于直接返回，小于right=mid-1，大于则left = mid+1
var search = function(nums, target) {
    let left = 0,right = nums.length - 1
    while(left <= right) {
        let mid = Math.floor((left+right)/2)
        if(nums[mid] < target) {
            left = mid + 1
        }else if(nums[mid] > target) {
            right = mid - 1
        }else{
            return mid
        }
    }
    return -1
};