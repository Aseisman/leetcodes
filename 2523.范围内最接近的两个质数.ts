/*
 * @lc app=leetcode.cn id=2523 lang=typescript
 *
 * [2523] 范围内最接近的两个质数
 */

// @lc code=start
function closestPrimes(left: number, right: number): number[] {
    const countPrimes = (left,right)=>{
        // 构造质数序列；
        const isPrime = Array(right + 1).fill(true);
        let ans = [] as number[];
        for(let i = 2; i <= right; i++){
            if(isPrime[i] && i >= left) ans.push(i);
            for(let j = i * i; j <= right; j += i){
                isPrime[j] = false;
            }
        }
        return ans;
    }
    let primes = countPrimes(left,right);
    let min = Infinity, ans = [-1, -1];
    for(let i = 1; i < primes.length; i++){
        const sub = primes[i] - primes[i-1];
        if(sub < min){
            ans = [primes[i-1],primes[i]];
            min = sub;
        }
    }
    return ans;
}
// @lc code=end
