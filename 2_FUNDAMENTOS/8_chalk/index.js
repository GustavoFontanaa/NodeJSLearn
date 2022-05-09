const chalk = require('chalk')

const nota = 6

if(nota >= 7) {
    console.log(chalk.green('Parabéns! Você está aprovado!'))
} else {
    console.log(chalk.bgRed.black('Parabéns! Você é um burro do caralho'))
}
