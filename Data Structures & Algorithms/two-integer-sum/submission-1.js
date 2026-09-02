class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const len = nums.length;

        // for (let i = 0; i < len; i++) {
        //     for (let j = i + 1; j < len; j++) {
        //         if(nums[i]+nums[j] === target) return [i, j];
        //     }
        // }

        // return [];

        let _map = new Map();
        for (let i = 0; i < len; i++) {
            const num = nums[i];
            const num2 = target - num;

            const isTarget = _map.has(num2);
            if (isTarget) {
                const sumIndex = _map.get(num2);
                return [i, sumIndex];
            }

            _map.set(num, i)

        }
        return [-1, -1];
    }
}

