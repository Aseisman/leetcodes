/*
 * @lc app=leetcode.cn id=5 lang=typescript
 *
 * [5] 最长回文子串
 */

// @lc code=start
function longestPalindrome(s: string): string {
    let res = '';
    for(let i = 0; i< s.length; i++){
        const s1 = palindrome(s,i,i);//奇数
        const s2 = palindrome(s,i,i+1);//偶数
        res = res.length > s1.length ? res : s1;
        res = res.length > s2.length ? res : s2;
    }
    return res;
};
function palindrome(s:string,l:number,r:number):string{
    while(l>=0 && r < s.length && s[l] == s[r]){
        l--;r++;
    }
    return s.substring(l+1,r);
}
// @lc code=end

console.log(longestPalindrome('cbbd'));
