/*
 * @lc app=leetcode.cn id=150 lang=typescript
 *
 * [150] 逆波兰表达式求值
 */

// @lc code=start
function evalRPN(tokens: string[]): number {
  let stack: number[] = [];
  const len = tokens.length;
  let index = 0;
  const getNumbers = () => {
    while (index < len && !["+", "-", "*", "/"].includes(tokens[index])) {
      stack.push(Number(tokens[index]));
      index++;
    }
  };
  getNumbers();
  while (stack.length >= 2) {
    // @ts-ignore
    let num2: number = stack.pop();
    // @ts-ignore
    let num1: number = stack.pop();
    switch (tokens[index]) {
      case "+":
        stack.push(num1 + num2);
        break;
      case "-":
        stack.push(num1 - num2);
        break;
      case "*":
        stack.push(num1 * num2);
        break;
      case "/":
        stack.push((num1 / num2) << 0);
        break;
    }
    index++;
    getNumbers();
  }
  //   @ts-ignore
  let res: number = stack.pop();
  return res;
}

// 简洁版本
// var evalRPN = function(tokens) {
//     if(!tokens) return null;
//     let map = new Map();
//     map.set('+',(item2,item1) => item2 + item1);
//     map.set('-',(item2,item1) => item2 - item1);
//     map.set('*',(item2,item1) => item2 * item1);
//     map.set('/',(item2,item1) => (item2/item1)|0); // 位运算
//     let stack = [];
//     for(const item of tokens) {
//         if(map.has(item)) {
//             let fn = map.get(item);
//             let item1 = +stack.pop();
//             let item2 = +stack.pop();
//             let next = fn(item2,item1);
//             stack.push(next);
//         } else {
//             stack.push(item);
//         }
//     }
//     return stack[0];
// };

// @lc code=end
