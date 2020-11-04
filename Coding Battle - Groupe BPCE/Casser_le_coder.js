let pad = parseInt(input[0])
let newWord = [];
let i = 0;


while (newWord.length != input[1].length) {
    newWord.push(input[1].toString()[i]);
    i += pad
    if (i >= input[1].length) {
        i = i - (input[1].length - 1)
    }
}
let res = ""
for (let i = 0; i < newWord.length; i++) {
    res += newWord[i]
}
console.log(res);