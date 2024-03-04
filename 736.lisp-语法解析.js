/*
 * @lc app=leetcode.cn id=736 lang=javascript
 *
 * [736] Lisp 语法解析
 */

// @lc code=start
/**
 * 首先将字符串转义为可操作的解析数组，里面包括每个关键字和关键字对应位置的内容。
 * 如：(add x (mult y 5)) 可以转换为数组 ['add', 'x', ['mult', 'y', '5']] ，以此类推。
 * 这里需要注意右括号 ) 和 空格两个关键字符的处理。
 * 转换为解析数组之后，从头按照不同关键字对应的操作执行即可。
 * 这步需要注意的是let变量的生效范围，即内层同名变量不影响外层变量的值。
 * @param {string} expression
 * @return {number}
 */
 var evaluate = function(expression) {
    let i = 0;

    const parseDeep = expr => {
        i += 1;
        const deep = [];
        let content = '';

        while (i < expr.length) {
            if (expr[i] == ' ') {
                deep.push(content);
                content = '';
            } else if (expr[i] == '(') {
                content = parseDeep(expr);
            } else if (expr[i] == ')') {
                if (content) {
                    deep.push(content);
                }

                return deep;
            } else {
                content += expr[i];
            }

            i += 1;
        }

        return deep;
    }

    const lisp = (deep, topVars = {}) => {
        const vars = new Map(Object.entries(topVars));

        if (!Array.isArray(deep)) {
            if (vars.has(deep)) {
                return vars.get(deep);
            }

            return Number(deep);
        }

        if (deep.length == 0) {
            return 0;
        }

        const keyword = deep[0];
        let lastValue = 0;

        switch (keyword) {
            case 'let':
                for (let i = 1; i < deep.length - 1; i += 2) {
                    vars.set(deep[i], lisp(deep[i + 1], Object.fromEntries(vars)));
                }

                lastValue = lisp(deep[deep.length - 1], Object.fromEntries(vars));
                break;
            case 'add':
                lastValue = lisp(deep[1], Object.fromEntries(vars)) + lisp(deep[2], Object.fromEntries(vars));
                break;
            case 'mult':
                lastValue = lisp(deep[1], Object.fromEntries(vars)) * lisp(deep[2], Object.fromEntries(vars));
                break;
        }

        return lastValue;
    };

    return lisp(parseDeep(expression));
};
// @lc code=end

