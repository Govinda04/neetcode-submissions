class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let encode = "";

        for (let i = 0; i < strs.length; i++) {
            let curr = strs[i];
            let ch = String.fromCharCode(curr.length);

            encode += `${ch}${curr}`;
        }

        return encode;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        const decode = [];
        // decode.push(str);

        for (let i = 0; i < str.length; ) {
            let ch = str[i].charCodeAt(0);
            let st = str.slice(i + 1, i + ch + 1);

            decode.push(st);
            i += ch + 1;
        }

        return decode;
    }
}
