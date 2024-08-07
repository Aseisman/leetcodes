/*
 * @lc app=leetcode.cn id=721 lang=typescript
 *
 * [721] 账户合并
 */

// @lc code=start
function accountsMerge(accounts: string[][]): string[][] {
    const emailToIndex = new Map();
    const emailToName = new Map();
    let emailsCount = 0;
    for (const account of accounts) {
        const name = account[0];
        const size = account.length;
        for (let i = 1; i < size; i++) {
            const email = account[i];
            if (!emailToIndex.has(email)) {
                emailToIndex.set(email, emailsCount++);
                emailToName.set(email, name);
            }
        }
    }

    const uf = new UnionFind(emailsCount);
    for (const account of accounts) {
        const firstEmail = account[1];
        const firstIndex = emailToIndex.get(firstEmail);
        const size = account.length;
        for (let i = 2; i < size; i++) {
            const nextEmail = account[i];
            const nextIndex = emailToIndex.get(nextEmail);
            uf.union(firstIndex, nextIndex);
        }
    }

    const indexToEmails = new Map() as Map<number, string[]>;
    for (const email of emailToIndex.keys()) {
        const index = uf.find(emailToIndex.get(email));
        const account = (indexToEmails.get(index) ? indexToEmails.get(index) : []) as string[];
        account.push(email);
        indexToEmails.set(index, account);
    }
    const merged = [] as string[][];
    for (const emails of indexToEmails.values()) {
        emails.sort();
        const name = emailToName.get(emails[0]);
        const account = [] as string[];
        account.push(name);
        account.push(...emails);
        merged.push(account);
    }
    return merged;
};

class UnionFind {
    parent: number[]
    constructor (n) {
        this.parent = new Array(n).fill(0).map((element, index) => index);
    }

    union (index1, index2) {
        this.parent[this.find(index2)] = this.find(index1);
    }

    find (index) {
        if (this.parent[index] !== index) {
            this.parent[index] = this.find(this.parent[index]);
        }
        return this.parent[index];
    }
}
// @lc code=end
