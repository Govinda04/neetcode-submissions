class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const m = new Map();

        for (let i = 0; i < strs.length; i++) {

            const currS = strs[i];
            const arr = new Array(26).fill(0);

            for (let j = 0; j < currS.length; j++) {
                arr[currS.charCodeAt(j) - 97]++;
            }

            const mKey = arr.join('-')
            const mVal = m.has(mKey) ? [...m.get(mKey), currS] : [currS]

            m.set(mKey, mVal);

        }

        console.log(m);

        return [...m.values()]

    }
}
