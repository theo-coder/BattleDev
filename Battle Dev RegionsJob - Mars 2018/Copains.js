let notes = input[0].split(' ')
let nombreCopains = input[1]
let nombreMeilleursCopains = input[2]
let scores = [];
for (let i = 0; i < nombreCopains; i++) {
    let score = 0;
    let notesCopain = input[i + 3].split(' ');
    let noteNew = notesCopain[5]
    notesCopain.pop()
    for (j = 0; j < 5; j++) {
        let greater = Math.max(notesCopain[j], notes[j])
        let diff
        if (notesCopain[j] == greater) {
            diff = notesCopain[j] - notes[j]
        } else {
            diff = notes[j] - notesCopain[j]
        }
        score = score + diff
    }
    scores.push([i, score])

}
scores.sort(compare);
let final = 0
for (let i = 0; i < nombreMeilleursCopains; i++) {
    let meilleurCopain = scores[i][0]
    let noteCopain = input[meilleurCopain + 3].split(' ').pop();
    final = final + parseInt(noteCopain)
}
console.log(Math.floor(final / nombreMeilleursCopains));

function compare(a, b) {
    if (a[1] === b[1]) {
        return 0;
    }
    else {
        return (a[1] < b[1]) ? -1 : 1;
    }
}