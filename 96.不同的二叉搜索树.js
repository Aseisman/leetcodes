/*
 * @lc app=leetcode.cn id=96 lang=javascript
 *
 * [96] 不同的二叉搜索树
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    // 会有重叠子问题
    // 所以需要弄一个对象来标记
    let memo ={};
    for(let i=0;i<n;i++){
        memo[i]={};
    }
    // 计算lo到hi组成的BST的个数
    let count = (lo,hi)=>{
        if(lo>hi)return 1;
        if(memo[lo-1][hi-1]){
            return memo[lo-1][hi-1];
        }
        let res = 0;
        for(let i=lo;i<=hi;i++){
            // 以i为根节点
            let left= count(lo,i-1);
            let right = count(i+1,hi);
            // 左右子树的组合数乘积，即BST的总数
            res+=left*right;
        }
        memo[lo-1][hi-1]=res;
        return res;
    }
    return count(1,n);
};

var numTrees = function(n) {
    // 数学问题
    // 数学公式 卡塔兰数C(n+1)=[2(2n+1)/n+2]C(n); C(0)=1;
    // let C=1;
    // for(let i =0;i<n;i++){
    //     C=C*2*(2*i+1)/(i+2);
    // }
    // return C;

    // 动态规划问题
    // dp
    // G(n) 长度为n的不同二叉搜索树的个数
    // F(i,n) 以i为根，长度为n 的不同二叉搜索树的个数（1<=i<=n）
    // F(3,7) = G(2)*G(4) 即 F(i,n) = G(i-1) * G(n-i)
    // 而G(n)= ΣF(i,n)的（i=1到n的F(i,n)累加之和）
    // 由上面两公式得：G(n)= ΣG(i-1)*G(n-i); 1<=i<=n;
    let G = new Array(n+1).fill(0);
    G[0]=G[1]=1;
    for(let i = 2; i<=n ; i++){
        for(let j = 1;i<=i;j++){
            G[i]+=G[j-1]*G[i-j];
        }
    }
}
// @lc code=end

