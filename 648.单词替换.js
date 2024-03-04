/*
 * @lc app=leetcode.cn id=648 lang=javascript
 *
 * [648] 单词替换
 */

// @lc code=start
/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
// var replaceWords = function(dictionary, sentence) {
//     let arr = sentence.split(" ");
//     dictionary.sort((a,b)=>a.length-b.length);
//     arr.forEach((item,index)=>{
//         let word = dictionary.find(v=>{
//             return eval(`/^${v}/`).test(item);
//         });
//         if(word){
//             arr[index] = word;
//         }
//     })
//     return arr.join(' ');
// };
// // @lc code=end

class Trie {
    constructor() {
      this.h = {}
    }
    insert(word) {  
      let h = this.h  
      for (const ch of word) {
        if (!h[ch]) h[ch] = {}
        h = h[ch];//递归，进入子节点
      }
      h.word = word
     // cat: h:{ c: { a: { t:{ word: "cat" } } } }   
    }
    search(word) {
      //cattle 
      let h = this.h
      for (const ch of word) {
        if (!h[ch]) return word // 不存在前缀
        h = h[ch]
        if (!!h.word) return h.word // 到达最短前缀
      }
      return word
    }
}
  
var replaceWords = function(dictionary, sentence) {
    const T = new Trie()
    for (const word of dictionary) {
        T.insert(word)
    }
    return sentence.split(' ').map(word => T.search(word)).join(' ')
}