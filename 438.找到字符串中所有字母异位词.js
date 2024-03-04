/*
 * @lc app=leetcode.cn id=438 lang=javascript
 *
 * [438] 找到字符串中所有字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    let windows ={},needs={};
    // 初始化needs
    [...p].forEach(v=>{
        needs[v]? needs[v]++ : needs[v]=1;
    })

    let left = 0,right =0;
    let valid = 0;
    let keyLen = Object.keys(needs).length;
    let res= [];
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
        while(right-left == p.length){
            if(valid == keyLen)res.push(left);
            let d = s[left++];
            if(windows[d]--===needs[d])valid--;
        }
    }
    return res;
};
// @lc code=end

