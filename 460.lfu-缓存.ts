// /*
//  * @lc app=leetcode.cn id=460 lang=typescript
//  *
//  * [460] LFU 缓存
//  */

// // @lc code=start
// class Node {
//     key: number
//     value: number
//     prev: Node | null
//     next: Node | null
//     freq: number
//     constructor(key = 0, value = 0){
//         this.key = key;
//         this.value = value;
//         this.prev = null;
//         this.next = null;
//         this.freq = 1;
//     }
// }
// class LFUCache {
//     capacity: number
//     keyToNode: Map<number,Node>
//     freqToDummy: Map<number, Node>
//     minFreq :number
//     constructor(capacity: number) {
//         this.capacity = capacity;
//         this.keyToNode = new Map();
//         this.freqToDummy = new Map();
//         this.minFreq = 0;
//     }

//     // 删除一个节点
//     remove(x: Node) {
//         x.prev.next = x.next;
//         x.next.prev = x.prev;
//     }

//     get(key: number): number | null {
//         if(!this.keyToNode.has(key)){
//             return null;
//         }
//         const node = this.keyToNode.get(key) as Node;
//         this.remove(node);
//         const dummy = this.freqToDummy.get(node.freq);
//         if(dummy.prev == dummy){
            
//         }
//         return 1;
//     }

//     put(key: number, value: number): void {
        
//     }
// }

// /**
//  * Your LFUCache object will be instantiated and called as such:
//  * var obj = new LFUCache(capacity)
//  * var param_1 = obj.get(key)
//  * obj.put(key,value)
//  */
// // @lc code=end

// class Node {
//     constructor(key = 0, value = 0) {
//         this.key = key;
//         this.value = value;
//         this.freq = 1; // 新书只读了一次
//         this.prev = null;
//         this.next = null;
//     }
// }

// class LFUCache {
//     constructor(capacity) {
//         this.capacity = capacity;
//         this.keyToNode = new Map();
//         this.freqToDummy = new Map();
//         this.minFreq = 0; // 初始化成什么值都可以
//     }

//     getNode(key) {
//         if (!this.keyToNode.has(key)) { // 没有这本书
//             return null;
//         }
//         const node = this.keyToNode.get(key); // 有这本书
//         this.remove(node); // 把这本书抽出来
//         const dummy = this.freqToDummy.get(node.freq);
//         if (dummy.prev === dummy) { // 抽出来后，这摞书是空的
//             this.freqToDummy.delete(node.freq); // 移除空链表
//             if (this.minFreq === node.freq) { // 这摞书是最左边的
//                 this.minFreq++;
//             }
//         }
//         this.pushFront(++node.freq, node); // 放在右边这摞书的最上面
//         return node;
//     }

//     get(key) {
//         const node = this.getNode(key);
//         return node ? node.value : -1;
//     }

//     put(key, value) {
//         const node = this.getNode(key);
//         if (node) { // 有这本书
//             node.value = value; // 更新 value
//             return;
//         }
//         if (this.keyToNode.size === this.capacity) { // 书太多了
//             const dummy = this.freqToDummy.get(this.minFreq);
//             const backNode = dummy.prev; // 最左边那摞书的最下面的书
//             this.keyToNode.delete(backNode.key);
//             this.remove(backNode); // 移除
//             if (dummy.prev === dummy) { // 这摞书是空的
//                 this.freqToDummy.delete(this.minFreq); // 移除空链表
//             }
//         }
//         const newNode = new Node(key, value); // 新书
//         this.keyToNode.set(key, newNode);
//         this.pushFront(1, newNode); // 放在「看过 1 次」的最上面
//         this.minFreq = 1;
//     }

//     // 创建一个新的双向链表
//     newList() {
//         const dummy = new Node(); // 哨兵节点
//         dummy.prev = dummy;
//         dummy.next = dummy;
//         return dummy;
//     }

//     // 在链表头添加一个节点（把一本书放在最上面）
//     pushFront(freq, x) {
//         if (!this.freqToDummy.has(freq)) {
//             this.freqToDummy.set(freq, this.newList());
//         }
//         const dummy = this.freqToDummy.get(freq);
//         x.prev = dummy;
//         x.next = dummy.next;
//         x.prev.next = x;
//         x.next.prev = x;
//     }

//     // 删除一个节点（抽出一本书）
//     remove(x) {
//         x.prev.next = x.next;
//         x.next.prev = x.prev;
//     }
// }