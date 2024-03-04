/*
 * @lc app=leetcode.cn id=567 lang=javascript
 *
 * [567] 字符串的排列
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {

    let windows ={},needs={};
    // 初始化needs
    [...s1].forEach(v=>{
        needs[v]? needs[v]++ : needs[v]=1;
    })

    let left = 0,right =0;
    let valid = 0;
    let keyLen = Object.keys(needs).length;
    while(right<s2.length){
        // 开始滑动
        let c = s2[right];
        right++;
        if(needs[c]){
            // need里面有c
            windows[c]?windows[c]++:windows[c]=1;
            if(windows[c]==needs[c]){
                // 相同时，valid表示一个值达到了
                valid++;
            }
        }

        while(right - left >=s1.length){
        // 判断左侧窗口是否需要收缩
            if(valid == keyLen)return true;
            let d = s2[left++];
            if(windows[d]--===needs[d])valid--;
        }
    }
    return false;
};
// @lc code=end

