/*
 * @lc app=leetcode.cn id=833 lang=javascript
 *
 * [833] 字符串中的查找与替换
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number[]} indices
 * @param {string[]} sources
 * @param {string[]} targets
 * @return {string}
 */
var findReplaceString = function(s, indices, sources, targets) {
    let result = s.split('');
    const l = indices.length;
    for(let j =0;j<l;j++){
        let S = sources[j];//即将替换的数组元素赋值给temp
        let i = s.indexOf(S,0);//从头开始找
        while(i>-1){
            if(i===indices[j]){
                // 匹配上了
                let tempArr= new Array(S.length).fill(' ');
                tempArr[0]=targets[j];
                result.splice(i,S.length,...tempArr);//在数组中删除对应索引元素
                break;
            }
            i=s.indexOf(S,i+1);
        }
    }
    return result.join('').split(' ').join('');
};

console.log(findReplaceString('abcd',[0,2],['a','cd'],['eee','ffff']));
// @lc code=end

