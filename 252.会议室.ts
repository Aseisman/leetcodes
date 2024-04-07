// Given an array of meeting time intervals where intervals[i] = [starti, endi], determine if a person could attend all meetings.

// Example 1:
// Input: intervals = [[0,30],[5,10],[15,20]]
// Output: false

// Example 2:
// Input: intervals = [[7,10],[2,4]]
// Output: true

/*
 * @lc app=leetcode.cn id=252 lang=typescript
 *
 * [252] 会议室
 */

// @lc code=start
function canAttendMeetings(intervals: number[][]): boolean {
  intervals.sort((a, b) => a[0] - b[0]);
  for (let i = 0; i < intervals.length - 1; i++) {
    const [start1, end1] = intervals[i];
    const [start2, end2] = intervals[i + 1];
    if (end1 > start2) return false;
  }
  return true;
}
