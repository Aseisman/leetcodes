/*
 * @lc app=leetcode.cn id=1175 lang=javascript
 *
 * [1175] 质数排列
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numPrimeArrangements = function(n) {
    if(n==0)return 0;
    // n个数里面有多少个质数，然后质数间进行排序，非质数间进行排序，最后mod10^9+7;
    let sum = 1,primeNum = 0,nonprimeNum = 0; 
    let isPrime = (num)=>{
        if(num==1)return false;
        for(let i = 2; i < num; i++){
            if(num%i==0){
                return false;
            }
        }
        return true;
    }
    for(let i = 1; i <= n; i++ ){
        if(isPrime(i)){
            primeNum++;
        }else{
            nonprimeNum++;
        }
    }
    // 求primeNum，nonprimeNum的阶层，即有多少种排序方式
    for(let i = 1; i<= primeNum; i++){
        sum=(sum*i)%(10**9+7);
    }
    for(let i = 1; i<=nonprimeNum; i++){
        sum=(sum*i)%(10**9+7);
    }
    return sum;
};
// @lc code=end

console.log(numPrimeArrangements(100));