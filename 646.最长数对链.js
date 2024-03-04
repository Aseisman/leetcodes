/*
 * @lc app=leetcode.cn id=646 lang=javascript
 *
 * [646] 最长数对链
 */

// @lc code=start
/**
 * @param {number[][]} pairs
 * @return {number}
 */
var findLongestChain = function(pairs) {
    // 贪心算法，满足条件时，第二个数总是升序的
    pairs.sort((a,b)=>a[1]-b[1]);
    let res = 1, temp = pairs[0];
    for(let i = 1; i < pairs.length; i++){
        if(pairs[i][0]>temp[1]){
            // 后面的一个数 比前面的小时
            res++;
            temp[1] = pairs[i][1];
        }
    }
    return res;
};
var findLongestChain = function(pairs) {
    // dp 的精髓在于取当前值取还是不取，
    pairs.sort((a,b)=>a[0]-b[0]);
    let n = pairs.length;
    let dp = new Array(n).fill(1);

    for(let j = 1; j < n; j++){
        for(let i = 0; i < j; i++){
            if(pairs[i][1]<pairs[j][0]){
                dp[j]= Math.max(dp[j],dp[j]+1);
            }
        }
    }
    return Math.max(...dp);
}

/**
[ [ 1, 2 ], [ 3, 6 ], [ 3, 4 ], [ 5, 6 ] ]

//pair[i], pair[j], pair[i][1], pair[j][0]  [ 1, 2 ] [ 3, 6 ] 2 3
//dp                                        [ 1, 2, 1, 1 ]

//pair[i], pair[j], pair[i][1], pair[j][0]  [ 1, 2 ] [ 3, 4 ] 2 3
//dp                                        [ 1, 2, 2, 1 ]

//pair[i], pair[j], pair[i][1], pair[j][0]  [ 3, 6 ] [ 3, 4 ] 6 3
//dp                                        [ 1, 2, 2, 1 ]

//pair[i], pair[j], pair[i][1], pair[j][0]  [ 1, 2 ] [ 5, 6 ] 2 5
//dp                                        [ 1, 2, 2, 2 ]

//pair[i], pair[j], pair[i][1], pair[j][0]  [ 3, 6 ] [ 5, 6 ] 6 5
//dp                                        [ 1, 2, 2, 2 ]

//pair[i], pair[j], pair[i][1], pair[j][0]  [ 3, 4 ] [ 5, 6 ] 4 5
//dp                                        [ 1, 2, 2, 3 ]
 */
findLongestChain([[1,2],[3,6],[3,4],[5,6]])
// @lc code=end

