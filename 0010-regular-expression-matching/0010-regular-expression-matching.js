/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    const hashmap = new Map();

    const dfs = (i, j) => {
        const key = `${i},${j}`;
        if(hashmap.has(key)) return hashmap.get(key);

        if(i >= s.length && j >= p.length) {
            hashmap.set(key, true);
            return true;
        }
        if(j >= p.length) {
            hashmap.set(key, false);
            return false;
        }

        const match = i < s.length && (s[i] === p[j] || p[j] === ".");

        let result;

        if(j + 1 < p.length && p[j + 1] === "*") {
            result = dfs(i, j + 2) || (match && dfs(i + 1, j));
        } else {
            result = match && dfs(i + 1, j + 1);
        }

        hashmap.set(key, result);
        return result;
    }

    return dfs(0,0);
};