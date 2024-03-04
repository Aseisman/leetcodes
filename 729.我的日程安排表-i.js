/*
 * @lc app=leetcode.cn id=729 lang=javascript
 *
 * [729] 我的日程安排表 I
 */

// @lc code=start

var MyCalendar = function() {
    this.events = [];
};


MyCalendar.prototype.findInsertIndex = function (start) {
    var left = 0;
    var right = this.events.length - 1;

    while(left <= right){
        let mid = left + ((right - left) >> 1);
        // 退出条件，要插入的区间的start 跟当前二分到的区间start相同，那就返回对应的index；
        if(this.events[mid][0]===start){
            return mid;
        }else if(this.events[mid][0]<start){
            left = mid + 1;
        }else{
            right = mid - 1;
        }
    }
    // 一直找不到，然后找到了left 和 right 重叠的地方
    return left;
}

/** 
 * @param {number} start 
 * @param {number} end
 * @return {boolean}
 */
MyCalendar.prototype.book = function(start, end) {
    let index = this.findInsertIndex(start);
    if( 
        // start < 前一个区间end || end > 找到的区间的start，则有重叠
        (this.events[index-1] && start < this.events[index-1][1]) ||
        (this.events[index] &&end>this.events[index][0])
    ){
        return false;
    }
    this.events.splice(index,0,[start,end]);
    return true;
};

/**
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */
// @lc code=end