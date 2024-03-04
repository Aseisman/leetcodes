/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length!==t.length)return false;
    let map1={},map2={};
    for(let i = 0;i<s.length;i++){
        let v = s[i];
        map1[v]?map1[v]++:map1[v]=1;
    }
    for(let i = 0;i<t.length;i++){
        let v = t[i];
        map2[v]?map2[v]++:map2[v]=1;
    }
    let keys = Object.keys(map1);
    if(Object.keys(map2).length!=keys.length)return false;
    for(let i = 0; i<keys.length;i++){
        if(map1[keys[i]]!=map2[keys[i]])return false;
    }
    return true;
};

var isAnagram = function (s, t) {
    if (s.length !== t.length) return false
    return isEqualObj(setMap(s), setMap(t))
};
function setMap(list) {
    let map = {}
    for (let i = 0; i < list.length; i++) {
        const item = list[i];
        if (!map[item]) {
        map[item] = 1
        } else {
        map[item]++
        }
    }
    return map
}
function isEqualObj(a, b) {
    let aKeys = Object.keys(a)
    let bKeys = Object.keys(b)
    let flag = true
    bKeys.some(key => {
      flag = a[key] === b[key]
      return a[key] !== b[key]
    })
    return flag
}
// @lc code=end

console.log(isAnagram("ccac","aacc"));