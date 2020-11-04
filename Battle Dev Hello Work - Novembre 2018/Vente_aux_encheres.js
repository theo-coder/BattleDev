let nbEncheres = input[0]
let prixReserve = input[1]
let arr = []
let winner = prixReserve
let nomWinner = ""
for (let i = 0; i < nbEncheres; i++) {
    arr.push([parseInt(input[i + 2].split(' ')[0]), input[i + 2].split(' ')[1]]);
    if (parseInt(input[i + 2].split(' ')[0]) > parseInt(winner)) {
        winner = parseInt(input[i + 2].split(' ')[0])
        nomWinner = input[i + 2].split(' ')[1]
    }
}
if (winner <= prixReserve) {
    console.log('KO');
} else {
    console.log(nomWinner.toUpperCase());

}