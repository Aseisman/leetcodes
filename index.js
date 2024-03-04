var fun = function(nums, target) {
    // 2 哈希解法
    let map = new Map();
    for(let i = 0; i<nums.length;i++){
        if(map.has(nums[i])){
            return [map.get(nums[i]),i];
        }else{
            map.set(target-nums[i],i);
        }
    }
    return [];
};

/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
 var threeSumMulti = function (arr, target) {
    // 从小到大排序
    arr.sort((a, b) => a - b)
    console.log(arr);
    // 统计每个数字出现的个数，
    let cnt = {}
    for (let x of arr) cnt[x] = (cnt[x] || 0) + 1
    let path = []
    let ar = [...new Set(arr)], n = ar.length
    console.log(cnt,ar,n);
    // 三指针法求出组成目标值为target的ijk组数
    for (let i = 0; i < n; i++) {
        let j = i, k = n - 1
        while (j <= k) {
            let s = ar[i] + ar[j] + ar[k]
            if (s == target) {
                path.push([ar[i], ar[j], ar[k]])
                j++, k--
            } else if (s > target) k--
            else j++
        }
    }
    console.log(path);
    let ans = 0
    // 排列组合
    // 将abc转化为装有三种球的口袋，数目分别为cnt[a],cnt[b],cnt[c],
    // 则题目可以转化为 在三个口袋中分别取一个球，有多少种可能的结果
    // 但是，在此之前还需要判断的是，哪几种球在一个口袋，在题目中对应的
    // 是两个数字是否相同
    for (let [a, b, c] of path) {
        // a、b在一个口袋
        if (a == b) {
            if (b == c) {
                // 相当于在abc三种球在同一个口袋，从中取三个球
                ans += (cnt[b] * (cnt[b] - 1) * (cnt[b] - 2) / 6)
            } else {
                if (cnt[b] < 2) continue
                ans += (cnt[b] * (cnt[b] - 1) / 2 * cnt[c])
            }
        } else {
            // b、c是同一种球
            if (b == c) {
                if (cnt[b] < 2) continue
                ans += (cnt[b] * (cnt[b] - 1) / 2 * cnt[a])
            } else {
                ans += cnt[a] * cnt[b] * cnt[c]
            }
        }
    }
    return ans % (1e9 + 7)

};
console.log(threeSumMulti([1,1,2,2,3,3,4,4,5,5],8));

var isObject = (obj)=>{
    let str= Object.prototype.toString.call(obj);
    return str==='[object Object]' || str==='[object Array]'
}
var deepCopy = (source,hash = new WeakMap())=>{
    if(!isObject(source))return source;
    if(hash.has(source))return hash.get(source);

    let res = Array.isArray(source)?[]:{};
    hash.set(source,res);
    for(let key in source){
        if(Object.prototype.hasOwnProperty.call(source,key)){
            if(isObject(source[key])){
                res[key]=deepCopy(source[key],hash);
            }else{
                res[key]=source[key];
            }
        }
    }
    return res;
}
let obj={
    a:{
        b:{
            c:222,
        },
        c:111,
    }
}
obj.a.b.d=obj.a;
console.log(obj);
let res=deepCopy(obj)
console.log(res);