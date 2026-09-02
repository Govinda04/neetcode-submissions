class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {

        let i = 0;
        let j = s.length - 1

        while (i < j) {
            if (s.charAt(i).match(/[\W]/g) || s.charAt(j).match(/[\W]/g)) {

                if (s.charAt(i).match(/[\W]/g)) i++;
                if (s.charAt(j).match(/[\W]/g)) j--;

            } else {

                if (s.charAt(i).toLowerCase() !== s.charAt(j).toLocaleLowerCase()) return false

                i++;
                j--;
            }


        }

        return true;
    }
}
