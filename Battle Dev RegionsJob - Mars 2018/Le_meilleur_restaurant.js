let nbRestos = input[0]
let moyennes = []
for (let i = 0; i < input[0]; i++) {
    const notes = input[i + 1].split(" ");
    let moyenne;
    for (let j = 0; j < notes.length; j++) {
        if (j == 0) {
            moyenne = parseInt(notes[j])
        } else {
            moyenne += parseInt(notes[j]);
        }
    }
    moyennes.push(Math.ceil(moyenne / notes.length))
}
console.log(Math.max(...moyennes))