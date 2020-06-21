/**字符串的排列
 * 输入一个字符串，打印出该字符串中字符的所有排列。
 * 你可以以任意顺序返回这个字符串数组，但里面不能有重复元素。
 * 
 * 示例:
 * 输入：s = "abc"
 * 输出：["abc","acb","bac","bca","cab","cba"]
 * 
 * @param {string} s
 * @return {string[]}
 */

//思路：去重+回溯
const permutation = (s) => {
  let res = new Set()
  let backTrack = (str,s)=> {
      let set = new Set()
      if(!s) {
          res.add(str)
      }else {
      for (let i = 0; i < s.length; i++) {
          if(set.has(s[i])) continue //去重
          set.add(s[i])
          backTrack(str + s[i],s.slice(0,i) + s.slice(i+1))// 每递归一层删掉被固定的元素
          }
      }
  }
  backTrack("",s)
  return [...res]
}



















