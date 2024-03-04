/*
 * @lc app=leetcode.cn id=205 lang=typescript
 *
 * [205] 同构字符串
 */

// @lc code=start
function isIsomorphic(s: string, t: string): boolean {
    return getTransformString(s) === getTransformString(t);
};
function getTransformString(str:string):string{
    let res = "";
    const map = new Map();
    let last = 0;
    for(let c of str) {
        if(!map.has(c)) {
            // ASCII字符
            map.set(c, String.fromCharCode(last++));
        }
        res += map.get(c);
    }
    return res;
}
// @lc code=end