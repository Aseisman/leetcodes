/*
 * @lc app=leetcode.cn id=241 lang=javascript
 *
 * [241] 为运算表达式设计优先级
 */

// @lc code=start
/**
 * @param {string} expression
 * @return {number[]}
 */
var diffWaysToCompute = function(expression) {
    // 递归分治思想：1 + 2 * 3 - 4 * 5
    // 可以分成 （1 + 2 * 3） - （4 * 5）,这是其中一种第一层括号的拆分，然后再进行第二层括号
    // 1 + 2 * 3 可以继续第二层括号的拆分 （1+2）*3 or 1+（2*3） 
    // 先分后治，拆分子问题，再合并起来
    // 加个memo，避免重复计算
    const memo = new Map();
    const operate = (a,b,o)=>{
        switch (o) {
            case '*':
                return a*b;
            case '-':
                return a-b;
            case '+':
                return a+b;
        }
    }
    const recursion = (exp) =>{
        if(memo.has(exp)){
            return memo.get(exp);
        }
        let res = [];
        for(let i = 0 ;i< exp.length;i++){
            let c = exp.charAt(i);
            // 判断运算符
            if(c == '*' || c == '+' || c == '-'){
                let left = recursion(exp.substring(0,i));
                let right = recursion(exp.substring(i+1));

                // 通过子问题的结果，合成
                for(let a of left){
                    for(let b of right){
                        res.push(operate(a,b,c));
                    }
                }
            }
        }
        if(!res.length){
            res.push(parseInt(exp));
        }
        // 将结果添加进memo
        memo.set(exp,res);
        return res;
    }
    return recursion(expression);
};

var diffWaysToCompute = function (input) {
    // 1.找到所有的运算符
    // 2.左边所有的结果 运算符 右边所有的结果
    const isNumber = (str) => {
        return /^\d+$/i.test(str);
    };
    const operate = (a, b, o) => {
        if (o == '+') return a + b;
        else if (o == '-') return a - b;
        else if (o == '*') return a * b;
    };
    const map = {}; // 缓存结果
    const dfs = (input, l, r) => {
        const str = input.slice(l, r + 1);
        // 从缓存结果中获取
        if (map[str]) {
            return map[str];
        }
        if (isNumber(str)) {
            // 结束条件
            return [Number(str)];
        }
        // 找到所有的操作符
        const res = [];
        for (let i = l; i < r; i++) {
            if (!isNumber(input[i])) {
                // 递归 + 合并信息
                const left = dfs(input, l, i - 1);
                const right = dfs(input, i + 1, r);
                for (const num1 of left) {
                    for (const num2 of right) {
                        res.push(operate(num1, num2, input[i]));
                    }
                }
            }
        }
        map[str] = res;
        return res;
    };
    return dfs(input, 0, input.length - 1);
};

// @lc code=end

// dp的，我不会，过！
var diffWaysToCompute = function (input) {
    // dp[l][r] = {v1,v2,...} 表示对应在l到r中按不同优先级组合数字和运算符的操作下能产生的全部可能结果；
    // 当l==r时，对应的结果就只会有一个数字
    // dp[l][r] = { ops[l] },l=r&ops[l]>=0
    // 预处理
    input = input.split('');
    const nums = [];
    const operation = [];
    let num = 0;
    for (let i = 0; i < input.length; i++) {
        if (['+', '-', '*'].includes(input[i])) {
            nums.push(num);
            num = 0;
            operation.push(input[i]);
            continue;
        }
        num = num * 10 + Number(input[i]);
    }
    nums.push(num);
    // 状态机
    const dp = Array.from({ length: nums.length }, () => {
        return new Array(nums.length).fill([]);
    });
    const operate = (a, b, o) => {
        if (o == '+') return a + b;
        else if (o == '-') return a - b;
        else if (o == '*') return a * b;
    };
    // 初始状态
    for (let i = 0; i < nums.length; i++) dp[i][i] = [nums[i]];
    // 从俩个数字开始，因为数组从0开始，所以，n=1开始
    for (let n = 1; n < nums.length; n++) {
        for (let start = 0; start + n < nums.length; start++) {
            const end = start + n;
            const res = [];
            for (let i = start; i < end; i++) {
                const left = dp[start][i];
                const right = dp[i + 1][end];
                // 结算
                for (const num1 of left) {
                    for (const num2 of right) {
                        res.push(operate(num1, num2, operation[i]));
                    }
                }
            }
            dp[start][end] = res;
        }
    }
    return dp[0][nums.length - 1];
};
diffWaysToCompute('2*3-4*5');
