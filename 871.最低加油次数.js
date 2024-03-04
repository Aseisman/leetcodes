/*
 * @lc app=leetcode.cn id=871 lang=javascript
 *
 * [871] 最低加油次数
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number} startFuel
 * @param {number[][]} stations
 * @return {number}
 */
var minRefuelStops = function(target, startFuel, stations) {
    // 贪心 + 堆
    // 我们把我们能到的加油站的油都放进去大顶堆，用startFuel +起来，当startFuel >=tartet的时候，退出whle；当大顶堆为空时，车无法到达
    let heap = [];
    let headAdd = (heap,n)=>{
        heap.push(n);
        let t = heap.length - 1, np = ((t-1)-(t-1)%2)/2;
        while(t>0){
            if(heap[np]<heap[t]){
                [heap[np],heap[t]]=[heap[t],heap[np]];
                t= np;
                np = ((t-1)-(t-1)%2)/2;
            }else{
                break;
            }
        }
        return;
    }
    let headPop = (heap)=>{
        if(heap.length<=0)return null;
        let rn = heap[0];
        heap[0] = heap[heap.length - 1];
        heap.splice(heap.length - 1,1);

        let rL = 1, r, n = 0;
        while(rL <= heap.length - 1){
            r = rL;
            if(rL + 1 <= heap.length - 1 && heap[rL]< heap[rL + 1]){
                r = rL + 1;
            }
            if(heap[n]<heap[r]){
                [heap[n],heap[r]]=[heap[r],heap[n]];
                n = r;
                rL = 2*n + 1;
            }else{
                break;
            }
        }
        return rn;
    }

    let fuel =startFuel, startNum = 0;
    // 把目的地当作最后一个站，该站油为0
    stations.push([target,0]);

    for(let i = 0; i < stations.length; i++){
        let road = stations[i][0];
        let heapR = 0;
        // 当road>fuel时油料不够，然后就会进来把我们最大堆的油pop出来，
        while(road>fuel){
            heapR = headPop(heap);
            if(heapR == null) return -1;
            fuel += heapR;
            startNum++;
        }
        headAdd(heap,stations[i][1]);
    }
    return startNum;
};
// 
// @lc code=end
console.log(minRefuelStops(100,10,[[10,60],[20,30],[30,30],[60,40]]));
console.log(minRefuelStops(100,1,[[10,100]]));
console.log(minRefuelStops(1,1,[]));
console.log(minRefuelStops(100,1,[]));
console.log(minRefuelStops(100,25,[[25,25],[50,25],[75,25]]));
console.log(minRefuelStops(100,50,[[25,25],[50,50]]));

/**
 *     // 贪心
    let curFuel = startFuel;
    let curTarget = target;
    let res = 0;
    let index = 0;//走过的加油站
    while(1){
        console.log(curFuel,curTarget);
        if(curFuel>=curTarget){
            break;
        }
        // 目前还到不了，才只能往下走
        if(stations.length==0){
            res = -1;
            break;
        }
        let [len,fuel] = stations[index];
        let allStationRun = 0;
        for(let i = 0; i<index ; i++){
            allStationRun += stations[i][0];
        }
        index++;
        if(curFuel<len-allStationRun){
            // 到不了
            res = -1;
            break;
        }
        // 到的了
        curFuel-=len;
        curFuel+=fuel;
        curTarget -= len;
        res++;
    }
    return res;
 */