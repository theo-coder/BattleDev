let nbOcc = input[0];
let arr = []
for (let i = 0; i < nbOcc; i++) {
    arr.push(input[i + 1])
}

var map = arr.reduce(function (p, c) {
    p[c] = (p[c] || 0) + 1;
    return p;
}, {});

var newTypesArray = Object.keys(map).sort(function (a, b) {
    return map[b] - map[a];
});

console.log(newTypesArray[0] + ' ' + newTypesArray[1])