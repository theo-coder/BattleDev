let ppp = input[0]
let nbTables = input[1]
let tot = 0;
for (let i = 0; i < nbTables; i++) {
    const table = input[i + 2];
    let note = ppp * table
    if (table >= 10) {
        note = note - (note * 0.3)
    } else if (table >= 6) {
        note = note - (note * 0.2)
    } else if (table >= 4) {
        note = note - (note * 0.1)
    }
    tot = note + tot
}
console.log(Math.ceil(tot));