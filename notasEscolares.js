// FUNÇÃO CRIADA POR MIM

/*let score = 100;

if(score > 100){
    console.log(`Nota não aceitável`)
} else if(score >= 90) {
    console.log(`A`)
} else if (score >= 80) {
    console.log(`B`)
} else if (score >= 70) {
    console.log(`C`)
} else if (score >= 60) {
    console.log(`D`)
} else if (score >= 0){
    console.log(`E`)
} else if (score < 0) {
    console.log(`Nota não aceitável`)}

console.log(`Fim do programa`)*/


// FUNÇÃO CRIADA PELO CURSO

let score = 100

function getScore(score) {
    let scoreA = score >= 90 && score <= 100
    let scoreB = score >= 80 && score <= 89
    let scoreC = score >= 70 && score <= 79
    let scoreD = score >= 60 && score <= 69
    let scoreE = score < 60 && score >= 0

    let scoreFinal;
    
    if (scoreA) {
        scoreFinal = "A"
    } else if (scoreB) {
        scoreFinal = "B"
    } else if (scoreC) {
        scoreFinal = "C"
    } else if (scoreD) {
        scoreFinal = "D"
    } else if (scoreE) {
        scoreFinal = "E"
    } else {
        scoreFinal = "Nota inválida"
    }

    return scoreFinal
}

console.log(getScore(101))
console.log(getScore(-2))
console.log(getScore(15))
console.log(getScore(31))
console.log(getScore(61))
console.log(getScore(71))
console.log(getScore(95))
console.log(getScore(86))
console.log(getScore(54))
console.log(getScore(101))
console.log(getScore(60))