/**
 * 优化版随机快排
 */

 //思路：
 //采用荷兰国旗的方式去优化快排，并用随机数来避免时间复杂度为O(N^2)

function quickSort(arr) {
  const len = arr.length
  if(len < 2 || len === null){return arr}
  let cur = 0
  let right = len - 1
  return sort(arr,cur,right)
}

function sort(arr,cur,right) {
  if(cur < right){
    swap(arr,cur+parseInt(Math.random()*(right-cur+1)),right)
    let p = partition(arr,cur,right)
    sort(arr,cur,p[0]-1)
    sort(arr,p[1]+1,right)
  }
  return arr
}


function partition(arr,cur,right) {
  let less = cur - 1
  let more = right 
    while(cur < more){
      if(arr[cur] < arr[right]) {
        swap(arr, cur++, ++less)
      }else if(arr[cur] > arr[right]){
        swap(arr,cur,--more)
      }else{
        cur++
      }
    }
    swap(arr,more,right)
    return [less+1,more]
}

function swap(arr,i,j) {
  let tem = arr[i]
  arr[i] = arr[j]
  arr[j] = tem
}

