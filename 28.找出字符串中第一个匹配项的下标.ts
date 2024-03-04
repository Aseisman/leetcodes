/*
 * @lc app=leetcode.cn id=28 lang=typescript
 *
 * [28] 找出字符串中第一个匹配项的下标
 */

// @lc code=start
function strStr(haystack: string, needle: string): number {
    const n = haystack.length;
    const m = needle.length;
    if(!m) return 0;

    // kmp算法
    // http://www.ruanyifeng.com/blog/2013/05/Knuth%E2%80%93Morris%E2%80%93Pratt_algorithm.html
    // https://blog.csdn.net/weixin_47834388/article/details/127441402
    
    let next = new Array(m);
    next[0] = 0;

    for(let i = 1, j = 0; i < m; i++){
        while(j && needle[i] !== needle[j]) j = next[ j - 1 ];
     
        if( needle[i] == needle[j] ) j++;
     
        next[i] = j; 
    }
    for( let i = 0, j = 0; i < n; i++){
        while(j && haystack[i] !== needle[j]) j = next[j - 1];
        if(haystack[i] == needle[j]) j++;
        if(j == m) return i - m + 1;
    }
    return -1;
};
// @lc code=end

// function KMP(haystack,needle)
// {
//     if(haystack.length==0||needle.length==0)return -1;

//     let nextArray=new Array(needle.length);
//     nextArray[0]=0;

//     for(let i = 0,j = 1; j < needle.length; j++) {
//         while(i > 0 && needle[i] != needle[j] ) i = nextArray[i - 1];

//         if( needle[i] == needle[j] ) i++;
        
//         nextArray[j] = i;
//     }

//     for(let i = 0, j = 0; i < haystack.length; i++) {
//         while(j > 0 && haystack[i] != needle[j]) j = nextArray[j - 1];
//         // 若有相同字符，则比较下一个字符
//         if(haystack[i] == needle[j]) j++
//         // 若j等于匹配字符串长度，证明比较完成，返回起始位置即可
//         if(j == needle.length) return i + 1 - j;
//     }
//     return -1;
// }