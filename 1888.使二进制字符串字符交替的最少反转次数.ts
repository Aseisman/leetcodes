/*
 * @lc app=leetcode.cn id=1888 lang=typescript
 *
 * [1888] 使二进制字符串字符交替的最少反转次数
 */

// @lc code=start
function minFlips(s: string): number {
    // 滑动窗口
    // cnt 与 len - cnt 分别代表01与10
	let target = '01';
	let cnt = 0;
	for (let i = 0 ; i < s.length; i++) {
		if (s[i] !== target[i % 2]) {
			cnt++;
		}
	}
    // 得到最小的变动；
	let ret = Math.min(cnt, s.length - cnt);

    // 滑动窗口，模拟类型1，将前面的数移动到后面
    // [1,1,1,0,0,0],1,1,1,0,0,0  
    // 1,[1,1,0,0,0,1],1,1,0,0,0  cnt减掉第一个字符的计数；
    // 1,1,[1,0,0,0,1,1],1,0,0,0  cnt减掉第二个字符的计数；
    // ...
    // 1,1,1,0,0,0,[1,1,1,0,0,0]  cnt减掉第n个字符的计数；

	let tmps = s + s;
	for (let i = 0; i < s.length; i++) {
        // 去掉前面的字符对数量的影响
		cnt -= (tmps[i] == target[i % 2] ? 0 : 1);//和01xx一样就不用减，不一样的数量-1；
		cnt += (tmps[s.length + i] == target[(s.length + i) % 2] ? 0 : 1);//和01一样的就不用加，不一样的数量+1;
		ret = Math.min(ret, cnt, s.length - cnt);//再比较最小值
	}
	return ret;
};
// "01001001101"
// @lc code=end

