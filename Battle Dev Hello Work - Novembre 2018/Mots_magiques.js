let alpha = "a b c d e f g h i j k l m n o p q r s t u v w x y z"
let voy = "a e i o u y"
let nbMots = input[0]
let motMag = []
for (let i = 1; i <= nbMots; i++) {
    if (input[i].length >= 5 && input[i].length <= 7) {

        if (input[i][1] === alpha.split(' ')[alpha.split(' ').indexOf(input[i][0]) + 1]) {
            if (voy.includes(input[i][input[i].length - 1])) {
                if (!motMag.includes(input[i])) {
                    motMag.push(input[i])
                }
            }
        }
    }
}
console.log(motMag.length);