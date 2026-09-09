class Solution {
public:
    int search(vector<int>& nums, int target) {

        int bottom = 0;

        int top = nums.size() - 1;

        while(bottom <= top){
            int middle = bottom + ((top - bottom) / 2);

            if(nums[middle] > target){
               top = middle - 1;
            } else if ( nums[middle] < target){
                bottom = middle + 1;
            } else { 
                return middle;
            }
        }
        
        return -1;
    }
};
