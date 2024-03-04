/*
 * @lc app=leetcode.cn id=735 lang=javascript
 *
 * [735] 行星碰撞
 */

// @lc code=start
/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    let stack = [];
    asteroids.forEach(id=>{
        // 栈有值，就拿出来比较
        while(id < 0 && stack.length){
            const last = stack.pop();
            // 退出条件，前一个是负值时，怎么都不会撞到，直接break；
            if(last < 0){
                stack.push(last);
                break;
            }

            if(last > Math.abs(id)){
                stack.push(last);
                id = 0;
                break;
            }else if(last < Math.abs(id)){
                continue;
            }else {
                id = 0;
                break;
            }
        }
        if(id!==0){
            stack.push(id);
        }
    })
    return stack;
}
console.log(asteroidCollision([10,2,-5]));
console.log(asteroidCollision([8,-8]));
console.log(asteroidCollision([5,10,-5]));
console.log(asteroidCollision([-2,-1,1,2]));

// @lc code=end

