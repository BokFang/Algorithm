/**
 * 
 *给出一个区间的集合，请合并所有重叠的区间。
 *示例 1:
 *输入: [[1,3],[2,6],[8,10],[15,18]]
 *输出: [[1,6],[8,10],[15,18]]
 *解释: 区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
 * @param {*} arr 
 */

//思路：
//先排序，排序后相邻区间进行对比合并

function merge(arr) {
  if(arr.length < 2) return arr
  let newArr = []
  arr.sort((a,b) => a[0] - b[0])
  newArr.push(arr[0])
  for(let i = 1; i < arr.length; i++) {
    if(newArr[newArr.length-1][1] < arr[i][0]){
      newArr.push(arr[i])
    }else if(newArr[newArr.length-1][1] > arr[i][0] && newArr[newArr.length-1][1] <= arr[i][1]){
      newArr[newArr.length-1][1] = arr[i][1]
    }
  }
  return newArr
}