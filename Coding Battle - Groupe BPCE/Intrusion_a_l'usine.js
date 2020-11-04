let nbRep = input[0]
let testArr = []
for (let i = 0; i < nbRep; i++) {
    let occ = input[i + 1];
    testArr.push(occ.split(' ')[1])
}
for (let i = 0; i < testArr.length; i++) {
    let nbOcc = testArr.filter(x => x == input[i + 1].split(' ')[1]).length
    if (nbOcc === 1) {
        console.log(input[i + 1].split(' ')[0]);
    }
}