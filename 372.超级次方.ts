/*
 * @lc app=leetcode.cn id=372 lang=typescript
 *
 * [372] 超级次方
 */

// @lc code=start
function superPow(a: number, b: number[]): number {
    // p^(a*b) = (p^a)^b 
    const MOD = 1337;
    let res = 1;
    a %= MOD;
    for(let i = b.length - 1; i >= 0; i--){
        let k = 1;
        for(let j = 0; j < 10; j++){
            if(j == b[i]) res = res * k % MOD;
            k = k * a % MOD;
        }
        a = k;
    }
    return res;
}
// @lc code=end
