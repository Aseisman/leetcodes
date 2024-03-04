/*
 * @lc app=leetcode.cn id=2477 lang=typescript
 *
 * [2477] 到达首都的最少油耗
 */

// @lc code=start
function minimumFuelCost(roads: number[][], seats: number): number {
    // dfs
    // 题目 转变成贪心的先将子城市的人运往到父城市，然后搭乘父“城市的车”。

    // 先用map存一下，到时候容易拿
    const map = new Map();
    for(let i = 0; i < roads.length; i++){
        const [a,b] = roads[i];
        if(!map.has(a)){
            map.set(a,[]);
        }
        if(!map.has(b)){
            map.set(b,[]);
        }
        map.get(a).push(b);
        map.get(b).push(a);
    }

    let ans = 0;
    /**
     * @param v 当前节点
     * @param parent 父节点，防止重复遍历
     * 返回该节点为根的个数
     */
    function dfs(v,parent){
        const children = map.get(v);
        if(!children)return 1;
        let total = 1;
        for(let i = 0; i < children.length; i++){
            if(children[i] === parent)continue;
            total += dfs(children[i],v);
        }
        // 当前节点不是父节点的话，需要计算消耗油量
        if(v!==0){
            ans += Math.ceil(total/seats);//计算需要多少辆车，也就是消耗多少油量
        }
        return total;
    }
    dfs(0,-1);
    return ans;
};
// @lc code=end

