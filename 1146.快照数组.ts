/*
 * @lc app=leetcode.cn id=1146 lang=typescript
 *
 * [1146] 快照数组
 */

// @lc code=start
// class SnapshotArray {
//     shot: number
//     map: Map<string,number>
//     constructor(length: number) {
//         this.shot = 0;
//         this.map = new Map();
//     }

//     set(index: number, val: number): void {
//         this.map.set(`${this.shot}-${index}`,val);
//     }

//     snap(): number {
//         return this.shot++;
//     }

//     get(index: number, snap_id: number): number {
//         for(let i = snap_id; i >= 0; i--){
//             const val = this.map.get(`${i}-${index}`);
//             if(val !== undefined) return val;
//         }
//         return 0;
//     }
// }
const binarySearch = (index, snap_id, data) => {
    let low = 0, high = data[index].length;
    while (low < high) {
        const mid = low + Math.floor((high - low) / 2);
        const [x, y] = data[index][mid];
        if (x > snap_id + 1 || (x == snap_id + 1 && y >= 0)) {
            high = mid;
        } else {
            low = mid + 1;
        }
    }
    return low;
}
class SnapshotArray {
    snap_cnt: number
    data: number[][][]
    constructor(length: number) {
        this.snap_cnt = 0;
        this.data = Array.from({length},()=>([]));
    }
    set(index: number, val: number): void {
        this.data[index].push([this.snap_cnt, val])
    }
    snap(): number {
        return this.snap_cnt++;
    }
    get(index: number, snap_id: number): number {
        const idx = binarySearch(index, snap_id, this.data);
        if (idx === 0) {
            return 0;
        }
        return this.data[index][idx - 1][1];
    }
}

/**
 * Your SnapshotArray object will be instantiated and called as such:
 * var obj = new SnapshotArray(length)
 * obj.set(index,val)
 * var param_2 = obj.snap()
 * var param_3 = obj.get(index,snap_id)
 */
// @lc code=end

