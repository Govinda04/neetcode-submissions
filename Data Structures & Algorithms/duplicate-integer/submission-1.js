class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let a = {}

        for (let i = 0; i < nums.length; i++) { 
            if(Object.keys(a).includes(`${nums[i]}`)){
                return true
            }
            a[nums[i]]= i;
            // for (let j = i + 1; j < nums.length; j++) {
            //     if (nums[i] == nums[j]) return true
            // }
        } 

        return false
    }
}
