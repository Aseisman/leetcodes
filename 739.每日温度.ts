/*
 * @lc app=leetcode.cn id=739 lang=typescript
 *
 * [739] 每日温度
 */

// @lc code=start
function dailyTemperatures(temperatures: number[]): number[] {
    // const len = temperatures.length;
    // let ans = new Array(len).fill(0);
    // for(let i = 0; i < len; i++){
    //     let j = i + 1;
    //     while(j < len && temperatures[i] >= temperatures[j]) j++;
    //     j < len && (ans[i] = j - i);
    // }
    // return ans;

    const len = temperatures.length;
    const stack = [] as number[];//使用一个单调栈,存放下标
    let ans = new Array(len).fill(0);

    // 遍历每日温度，维护一个单调栈
    for (let i = 0; i < len; i++) {
        // 当日温度大于栈顶温度，说明栈顶温度的升温日找到了，栈顶出栈并计算天数；继续判断栈顶元素
        while (stack.length && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            const top = stack.pop() as number;
            ans[top] = i - top;
        }
        // 栈为空 或 每日温度小于等于栈顶温度 => 直接入栈
        stack.push(i)
    }

    return ans;

    // 模拟一下：[23,24,25,21,19,22,26,23]
    // i |  stack | ans
    // - | - | -
    // 0 |  [0] | [0, 0, 0, 0, 0, 0, 0, 0]
    // 1 |  [1] | ans[stack.pop()] = ans[0] = i - stack.pop() = 1 - 0 = 1;
    // 2 |  [2] | [1, 1, 0, 0, 0, 0, 0, 0]
    // 3 |  [3, 2] | [1,1,0,0, 0, 0, 0, 0]
    // 4 |  [4,3,2] | [1,1,0,0, 0, 0, 0, 0]
    // 5 |  [3,2] | ans[5] > ans[4] ans[4] = 5 - 4 = 1; [1,1,0,0,1,0,0]
    // 5 |  [3,2] | ans[5] > ans[3] ans[3] = 5 - 3 = 2; [1,1,0,0,1,1,0]
    // 6 |  [] | ans[6] > ans[2] ans[2] = 6 - 2 = 4;   [1,1,4,0,1,1,0]
    // 7 |  [7] | [1,1,4,0,1,1,0]
};
// @lc code=end

