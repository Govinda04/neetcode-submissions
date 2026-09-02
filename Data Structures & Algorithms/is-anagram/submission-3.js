class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */

    isAnagram(s, t) {

        if (s.length !== t.length) return false;

        const arr = new Array(25).fill(0);

        for (let i = 0; i < s.length; i++) {
            const sCode = s.charCodeAt(i) - 97;
            const tCode = t.charCodeAt(i) - 97;
            arr[sCode] = arr[sCode] ? arr[sCode] + 1 : 1
            arr[tCode] = arr[tCode] ? arr[tCode] - 1 : -1
        }

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] !== 0) return false
        }

        return true;



    }
}
