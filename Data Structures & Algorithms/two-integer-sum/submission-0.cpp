class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        int n = nums.size();
        unordered_map<int, int> mp; /*The map is used to keep track of the number 
        and it's complement*/


        for (int i = 0; i < n; i++){
            int complement = target - nums[i];
            if(mp.find(complement) != mp.end()){
                return {mp[complement], i};

            }

            mp.insert({nums[i], i});
        }

        return {};
    

    }
};
