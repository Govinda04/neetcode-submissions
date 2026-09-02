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

            if (!m.has(mKey)) {
                m.set(mKey, [])
            }

            m.get(mKey).push(currS)


        }

        return [...m.values()]

    }
}
