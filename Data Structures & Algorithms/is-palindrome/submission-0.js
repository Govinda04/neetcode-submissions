class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {

        let source = s.replaceAll(/[\W]/g, '').toLowerCase();

        let i = 0;
        let j = source.length - 1

        while (i < j) {
            if (source.charAt(i) !== source.charAt(j)) return false

            i++;
            j--;

        }

        return true;
    }
}
