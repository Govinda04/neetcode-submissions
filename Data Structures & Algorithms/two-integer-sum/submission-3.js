class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let a = new Map();

        for(let i=0; i<nums.length; i++){
            let diff = target - nums[i]; 

            if(a.has(diff)){ 
                return [a.get(diff), i]
            }

            a.set(nums[i], i);
        }

    }
}
