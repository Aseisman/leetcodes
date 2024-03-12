/*
 * @lc app=leetcode.cn id=2129 lang=typescript
 *
 * [2129] 将标题首字母大写
 */

// @lc code=start
function capitalizeTitle(title: string): string {
  const items = title.split(" ");
  return items
    .map((item) => {
      return item.length > 2
        ? item[0].toUpperCase() + item.slice(1).toLowerCase()
        : item.toLowerCase();
    })
    .join(" ");
}
// @lc code=end
