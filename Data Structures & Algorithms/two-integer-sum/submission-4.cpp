class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {

        unordered_map<int, int> mp;

        for(int i=0; i <nums.size( ); i++){
            int partner = target - nums[i];
            if(mp.find(partner) != mp.end()){
                return {mp[partner], i};
            }

             mp.insert({nums[i], i});
        }

       
    return {};
        
        
    }
    

};
