/**
 * 将一个任意长的数字变成逗号分割的格式
 * 例子：
 *
 *parseToMoney(1234.56); // return '1,234.56'
 *parseToMoney(123456789); // return '123,456,789'
 *parseToMoney(1087654.321); // return '1,087,654.321'
 * @param {*} num
 */



function parseToMoney(num) {
  let [integer,decimal] = String.prototype.split.call(num,".")
  console.log(decimal)
  let count = 0
  for(let i = integer.length - 1; i > 0; i--) {
    count += 1
    if(count % 3 === 0) {
      integer = integer.slice(0,i) + "," + integer.slice(i)
    }
  }
  return integer+"."+decimal
}