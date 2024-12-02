var fullJustify = function (words, maxWidth) {
    let ans = [];
    let i = 0;
    while (i < words.length) {
        let currentLine = getWords(i, words, maxWidth);
        i += currentLine.length;
        ans.push(createLine(currentLine, i, words, maxWidth));
    }
    return ans;
    function getWords(i, words, maxWidth) {
        let currentLine = [];
        let currLength = 0;
        while (i < words.length && currLength + words[i].length <= maxWidth) {
            currentLine.push(words[i]);
            currLength += words[i].length + 1;
            i++;
        }
        return currentLine;
    }
    function createLine(line, i, words, maxWidth) {
        let baseLength = -1;
        for (let word of line) {
            baseLength += word.length + 1;
        }
        let extraSpaces = maxWidth - baseLength;
        if (line.length === 1 || i === words.length) {
            return line.join(" ") + " ".repeat(extraSpaces);
        }
        let wordCount = line.length - 1;
        let spacesPerWord = Math.floor(extraSpaces / wordCount);
        let needsExtraSpace = extraSpaces % wordCount;
        for (let j = 0; j < needsExtraSpace; j++) {
            line[j] += " ";
        }
        for (let j = 0; j < wordCount; j++) {
            line[j] += " ".repeat(spacesPerWord);
        }
        return line.join(" ");
    }
};