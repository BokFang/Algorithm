/**
 * 在一个数组中，每一个数左边比当前数小的数“累加”起来，叫做这个数组的小和。求一个数组的小和。
 * @param {Array} arr 
 */


function smallSum(arr) {
  let len = arr.length
  if(arr === null || len < 2){return 0}
  return sortProcess(arr,0,len-1)
}

function sortProcess(arr,left,right) {
  if(left === right){return 0}
  let mid = left + ((right - left) >> 1)//位运算，相当于left+(right-left)/2,防止溢出
  return sortProcess(arr,left,mid) 
  + sortProcess(arr,mid+1,right) 
  + merge(arr,left,mid,right)
}

function merge(arr,left,mid,right) {
  let help = []
  let smallSun = 0
  let p1 = left
  let p2 = mid+1
  while(p1 <= mid && p2 <= right){
    if(arr[p1] < arr[p2]){
      help.push(arr[p1])
      smallSun += arr[p1++] * (right - p2 + 1)
    }else{
      help.push(arr[p2++])
    }
  }
  while(p1 <= mid){
    help.push(arr[p1++])
  }
  while(p2 <= right){
    help.push(arr[p2++])
  }
  for(let i = 0; i < help.length; i ++) {
    arr[left + i] = help[i]
  }
  return smallSun
}

// for test

// 生成随机长度，元素随机的数组
function generateRandomArr (size, value){
  const len = Math.round(Math.random() * size)
  let arr = []
  for(let i = 0; i < len; i++){
    arr[i] = Math.round(Math.random() * value) - Math.round(Math.random() * value)
  }
  return arr
}

function isEqual(a, b){ // 小和相等，判定相等
  return a === b
}

function copy(arr){
  if(arr === null) return arr
  let copyArr = []
  for(let i = 0; i < arr.length; i ++){
    copyArr[i] = arr[i]
  }
  return copyArr
}

function rightMethod(arr){
  let smallSum = 0
  for(let i = 1; i < arr.length; i ++) {
    for(let j = 0; j < i; j ++) {
      if(arr[j] < arr[i]) {
        smallSum += arr[j]
      }
    }
  }
  return smallSum
}

// times: 测试次数
function test(times) {
  let success = true
  for(let i = 0; i < times; i++){
    let arr1 = generateRandomArr(10, 1000)
    let arr2 = copy(arr1)
    let arr3 = copy(arr1)
    let sum1 = smallSum(arr2)
    let sum2 = rightMethod(arr3)
    if(!isEqual(sum1, sum2)){
      success = false
      console.log('error:')
      console.log(`原始值`, arr1)
      console.log(`测试值`, sum1)
      console.log(`绝对正确值`, sum2)
      console.log('\n')
    }
  }
  if(success) console.log('OK')
}

test(2000)