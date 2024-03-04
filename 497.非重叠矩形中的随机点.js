/*
 * @lc app=leetcode.cn id=497 lang=javascript
 *
 * [497] 非重叠矩形中的随机点
 */

// @lc code=start
/**
 * @param {number[][]} rects
 */
var Solution = function(rects) {
    this.rects=rects
    this.total=rects.length
    //每个矩形包含的所有整数点的个数
    this.sum=rects.map(item=>(item[2]-item[0]+1)*(item[3]-item[1]+1))
    //对矩形包含的整数点个数进行累计
    for(let i=1;i<this.total;i++){
        this.sum[i]=this.sum[i-1]+this.sum[i]
    }
};

/**
 * @return {number[]}
 */
 Solution.prototype.pick = function() {
    // 随机选取一个整数点
    let k=Math.floor(Math.random()*this.sum[this.total-1])+1
    let kr=0
    // 获取该整数点所在的矩形
    for(let i=0;i<this.total;i++){
        if(k<=this.sum[i]){
            kr=i
            if(i!==0){
                // 该点在整数点中的序号
                k=k-this.sum[i-1]
            }
            break
        }
    }
    const r=this.rects[kr]
    const l=r[2]-r[0]+1
    // 矩形中点的次序为从左向右，从上到下
    if(k%l===0){
        return [r[2],r[1]-1+k/l]
    }
    return [r[0]-1+k%l,r[1]+Math.floor(k/l)]
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(rects)
 * var param_1 = obj.pick()
 */
// @lc code=end