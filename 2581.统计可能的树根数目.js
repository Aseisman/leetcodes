/*
 * @lc app=leetcode.cn id=2581 lang=javascript
 *
 * [2581] 统计可能的树根数目
 */

// @lc code=start
function rootCount(edges, guesses, k){
    const n = edges.length + 1;
    const g = Array.from({ length: n }, () => []);
    const st = new Set();

    const h = (x, y) => {
        return x << 20 | y;
    }

    edges.forEach(v => {
        g[v[0]].push(v[1]);
        g[v[1]].push(v[0]);
    });

    guesses.forEach(v => {
        st.add(h(v[0], v[1]));
    });

    let cnt = 0;
    let res = 0;

    function dfs(x, fat) {
        for (const y of g[x]) {
            if (y === fat) {
                continue;
            }
            cnt += st.has(h(x, y));
            dfs(y, x);
        }
    }
    dfs(0, -1);

    function redfs(x, fat, cnt) {
        if (cnt >= k) {
            res++;
        }
        for (const y of g[x]) {
            if (y === fat) {
                continue;
            }
            redfs(y, x, cnt - (st.has(h(x, y))) + (st.has(h(y, x))));
        }
    }
    redfs(0, -1, cnt);
    return res;
};
// @lc code=end