/*
 * @lc app=leetcode.cn id=2244 lang=typescript
 *
 * [2244] 完成所有任务需要的最少轮数
 */

// @lc code=start
function minimumRounds(tasks: number[]): number {
//   let ans = 0;
//   let map = {}
//   tasks.forEach(t=>{
//     map[t] = (map[t] || 0) + 1;
//   })
//   const tasksKey = Object.keys(map);
//   for(let i = 0; i < tasksKey.length; i++){
//     const task = tasksKey[i];
//     let time = Math.floor(map[task] / 3);
//     let els = map[task] % 3;
//     if(els == 1){
//         // 除3会有1，所以得借3，然后除2，次数 -1 + 新次数；
//         if(time > 0){
//             time = time - 1 + Math.floor((els + 3) / 2);
//             els = (els + 3) % 2;
//         }
//         // 还是1，就直接返回-1；
//         if(els == 1) return -1;
//     }
//     if(els == 2){
//         time += 1;
//         els = 0;
//     }
//     ans += time;
//   }
//   return ans;
    const cnt = new Map();
    for (const t of tasks) {
        cnt.set(t, cnt.has(t) ? cnt.get(t) + 1: 1);
    }
    let res = 0;
    for (const [k, v] of cnt) {
        if (v === 1) {
            return -1;
        } else if (v % 3 === 0) {
            res += v / 3;
        } else {
            res += Math.ceil(v / 3);//向上取整
        }
    }
    return res;
}
// @lc code=end
