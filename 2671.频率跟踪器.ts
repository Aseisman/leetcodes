/*
 * @lc app=leetcode.cn id=2671 lang=typescript
 *
 * [2671] 频率跟踪器
 */

// @lc code=start
class FrequencyTracker {
    private freq: Map<number, number>;
    private freq_cnt: Map<number, number>;

    constructor() {
        this.freq = new Map<number, number>();
        this.freq_cnt = new Map<number, number>();
    }

    add(number: number): void {
        if (!this.freq.has(number)) {
            this.freq.set(number, 0);
            this.freq_cnt.set(0, (this.freq_cnt.get(0) || 0) + 1);
        }
        const prev = this.freq.get(number)!;
        this.freq_cnt.set(prev, (this.freq_cnt.get(prev) || 0) - 1);
        this.freq.set(number, prev + 1);
        this.freq_cnt.set(prev + 1, (this.freq_cnt.get(prev + 1) || 0) + 1);
    }

    deleteOne(number: number): void {
        if (!this.freq.has(number) || this.freq.get(number)! === 0) {
            return;
        }
        const prev = this.freq.get(number)!;
        this.freq_cnt.set(prev, (this.freq_cnt.get(prev) || 0) - 1);
        this.freq.set(number, prev - 1);
        this.freq_cnt.set(prev - 1, (this.freq_cnt.get(prev - 1) || 0) + 1);
    }

    hasFrequency(frequency: number): boolean {
        return (this.freq_cnt.get(frequency) || 0) > 0;
    }
}

/**
 * Your FrequencyTracker object will be instantiated and called as such:
 * var obj = new FrequencyTracker()
 * obj.add(number)
 * obj.deleteOne(number)
 * var param_3 = obj.hasFrequency(frequency)
 */
// @lc code=end

