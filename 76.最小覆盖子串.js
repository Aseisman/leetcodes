/*
 * @lc app=leetcode.cn id=76 lang=javascript
 *
 * [76] 最小覆盖子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    // 暴力
    // 双重for循环，判断[i,j]上包含所有t的字母然后比较哪个最短，最短则返回 o(n2)
    // 滑动窗口思路：[left,right)
    // t有n个字符，那我们就把窗口先扩充到n个字符，让right一直加到n+1
    // 然后再根据条件left ++
    // 重复right++ 和left++ 这就是滑动窗口的精髓了

    let windows ={},needs={};
    // 初始化needs
    [...t].forEach(v=>{
        needs[v]? needs[v]++ : needs[v]=1;
    })

    let left = 0,right =0;
    let valid = 0;
    let start = -1, len = Infinity;
    let keyLen = Object.keys(needs).length;
    while(right<s.length){
        // 开始滑动
        let c = s[right];
        right++;
        if(needs[c]){
            // need里面有c
            windows[c]?windows[c]++:windows[c]=1;
            if(windows[c]==needs[c]){
                // 相同时，valid表示一个值达到了
                valid++;
            }
        }

        // 判断左侧窗口是否需要收缩
        while(valid == keyLen){
            if(right - left < len){
                start = left ;
                len = right  - left;
            }
            let d = s[left++];
            if(windows[d]--===needs[d])valid--;
        }
    }
    return start === -1 ? "":s.substr(start,len);
};
// @lc code=end

​/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    let windows = {}, needs = {}, l = 0, r = 0, count = 0, start = -1, minLen = Infinity;
    [...t].forEach(c => needs[c] ? needs[c]++ : needs[c] = 1)
    let keyLen = Object.keys(needs).length;
    while (r < s.length) {
        let c1 = s[r++];
        windows[c1] ? windows[c1]++ : windows[c1] = 1;
        if (windows[c1] === needs[c1]) count++;
        while(count === keyLen) {
            if (r - l < minLen) {
                start = l;
                minLen = r - l;
            }
            let c2 = s[l++];
            if (windows[c2]-- === needs[c2]) count--;
        }
    }
    return start === -1 ? "" : s.substr(start, minLen)
};
