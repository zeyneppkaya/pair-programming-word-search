const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l === word) {
            return true;
        }
    }
    return false;
};

module.exports = wordSearch