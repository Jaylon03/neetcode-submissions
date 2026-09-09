class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a, b) => a - b);
        const res = [];

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] > 0) break; // since sorted, no need to continue
            if (i > 0 && nums[i] === nums[i - 1]) continue; // skip duplicate i

            let l = i + 1;
            let r = nums.length - 1;

            while (l < r) {
                let sum = nums[i] + nums[l] + nums[r];
                if (sum > 0) {
                    r--; // need smaller sum
                } else if (sum < 0) {
                    l++; // need bigger sum
                } else {
                    res.push([nums[i], nums[l], nums[r]]);
                    l++;
                    r--;

                    while (l < r && nums[l] === nums[l - 1]) l++; // skip dupes
                    while (l < r && nums[r] === nums[r + 1]) r--; // skip dupes
                }
            }
        }
        return res;
    }
}
