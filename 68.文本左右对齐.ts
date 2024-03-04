/*
 * @lc app=leetcode.cn id=68 lang=typescript
 *
 * [68] 文本左右对齐
 */

// @lc code=start
function fullJustify(words: string[], maxWidth: number): string[] {
  let arr: string[] = [];
  let arrs: string[][] = [];
  let len = 0;
  //  判断每行能放多少个单词
  for (let i = 0; i < words.length; i++) {
    if (words[i].length + len <= maxWidth) {
      arr.push(words[i]);
      len += words[i].length + 1;
    } else {
      arrs.push(arr);
      arr = [words[i]];
      len = words[i].length + 1;
    }
  }
  arrs.push(arr);
  return arrs.map((item, index) => {
    // 最后一行
    if (index == arrs.length - 1) {
      let str = item.join(" ");
      return str + " ".repeat(maxWidth - str.length);
    }
    // 当前行只有一个单词的时候
    if (item.length === 1) {
      return item[0] + " ".repeat(maxWidth - item[0].length);
    }
    // 普通情况
    let wordsLen = item.reduce((all, _item) => all + _item.length, 0);
    let spacesLen = maxWidth - wordsLen;
    let everySpace = spacesLen / (item.length - 1); //单词中间放置多少个空格 // 注意这里,可能是小数,这里不用处理是因为repeat有处理
    let elseSpace = spacesLen % (item.length - 1); //剩余多少个空格,需要补在前几个上;
    let spaces = " ".repeat(everySpace); // 每个单词中间的空格

    for (let i = 0; i < elseSpace; i++) {
      item[i] += " ";
    }
    return item.join(spaces);
  });
}
// @lc code=end
