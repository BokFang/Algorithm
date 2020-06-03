/**
 * 荷兰国旗问题
 * 给定一个数组arr，和一个数num，请把小于num的数放在数组的左边，等于num的数放数组中间，
 * 大于num的数放数组的右边。
 */

//思路：
//在原数组划定两个位置，一个放小于num的值，起始index为-1，一个放大于num的值，起始index为数组长度
//使用一个指针，从第一个数开始比较，如果小于num则与前位index+1的数交换，并且指针向后移
//如果大于num则与后位index-1的数交换，指针原地不动继续检测交换后的数
//如果等于num则不交换，指针向后移一位
//当指针指向后位index的数，则比对结束，返回数组


function NetherlandFlag(arr,num) {
  let len = arr.length
  if(len === null || len < 2){return arr}
  let cur = 0
  let right = len - 1
  return partition(arr,cur,right,num)
}

function partition(arr,cur,right,num) {
  let less = cur - 1
  let more = right + 1
  while(cur < more){
    if(arr[cur] < num){
      swap(arr,++less,cur++)
    }else if(arr[cur] > num){
      swap(arr,cur,--more)
    }else{
      cur++
    }
  }
  return arr
}
