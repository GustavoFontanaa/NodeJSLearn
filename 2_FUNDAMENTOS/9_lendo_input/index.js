const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
})

readline.question('Qual a sua linguagem preferida?', (language) => {
    if(language == "CSS" || language == "HTML" || language == "C") {
        console.log("Isso não é linguagem cabaço")
    } else {
        console.log(`A minha linguagem preferida é: ${language}`)
    }
    readline.close()
})