class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */

    getMap(str) {
        let m = new Map()
        for (let i = 0; i < str.length; i++) {
            let count = m.get(str[i]);

            // console.log('get: ', str[i], count, i, m)

            m.set(str[i], count ? count + 1 : 1)

        }
        return m;
    }
    isAnagram(s, t) {

        if (s.length !== t.length) return false;

        let m1 = this.getMap(s);
        let m2 = this.getMap(t);

        console.log(m1)
        console.log(m2)

        if (m1.size !== m2.size) return false;


        let result = true

        const it = m1.keys();
        let i = 0;

        while (i < m1.size) {
            const key = it.next().value;

            if (!m2.has(key) || m1.get(key) !== m2.get(key)) {
                return false
            }

            i++;
        }

        return result;

    }
}
