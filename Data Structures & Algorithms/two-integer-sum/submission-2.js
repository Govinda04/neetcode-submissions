class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let a = [];

        for(let  i=0; i<nums.length; i++){
            let g = target - nums[i]; 

            if(a.includes(nums[i])){ 
                return [a.indexOf(nums[i]), i]
            }

            a[i] = g;
        }

    }
}
