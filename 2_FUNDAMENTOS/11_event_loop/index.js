function a() {
    console.log("Executando a()")
}

function b() {
    console.log("Executando b()")
}

function c() {
    console.log("Executando c()")
    a()
    b()
}

c()

//De cima para baixo a leitura do codigo..