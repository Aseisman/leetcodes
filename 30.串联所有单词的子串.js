/*
 * @lc app=leetcode.cn id=30 lang=javascript
 *
 * [30] 串联所有单词的子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    let wsl = words[0].length,wl=words.length,wm={}
    for(const w of words){
        wm[w] = (wm[w]||0)+1
    }
    let i=0,l=0,r=0,count=0,res=[],win = {}
    while(i<wsl){
        l=r=i,count=0,win = {}
        while(r<=s.length-wsl){
            let ss = s.substring(r, r+wsl)
            r+=wsl
            if(!wm[ss]){
                win = {}
                count = 0
                l=r
            }else{
                win[ss] = (win[ss]||0)+1
                count++
                while(win[ss]>wm[ss]){
                    let sl = s.substring(l,l+wsl)
                    win[sl] = (win[sl]||0)-1
                    count--
                    l+=wsl
                }
                if(count===wl) res.push(l)
            }
        }
        i++
    }
    return res
};

console.log(findSubstring('barfoothefoobarman',["foo","bar"]));
// @lc code=end

// 
// 
// 
/**
 * 滑动窗口大概流程
 * left=right=0
 * 循环 right<s.length
 * while(right<s.length){
 *    window.add(s[right]);
 *    right++;
 *    
 *    while(window 需要缩小，即判断){
 *      window.remove(s[left]);
 *      left++;
 *    }
 * }
 * 
 */