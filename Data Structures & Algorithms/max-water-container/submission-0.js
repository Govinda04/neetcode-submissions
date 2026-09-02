class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(height) {

    let result = 0;


    let i = 0, j = height.length - 1;

    while (i < j) {

        const area = Math.min(height[i], height[j]) * Math.abs(i - j);

        result = Math.max(result, area)

        if (height[i] > height[j]) {
            j--;
        } else {
            i++
        }
    }

    return result;

    }
}
