const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Programa para checar se usuário é maior de idade e se possui habilitação para entrar no Kart");
console.log("Além de suas verificações, precisamos verificar se o usuário está na lista de presença do horário");

readLine.question("Qual o ano de seu nascimento? ", ano => {
    if(ano > 2004){
        console.log("Você não tem 18 anos");
    } else {
        readLine.question("Você possui habilitação? (Sim/Não) ", temHabilitacao => {
            if(!(temHabilitacao.toUpperCase() === "SIM")){
                console.log("Você não tem habilitação para entrar no Kart");
            } else {
                readLine.question("Qual seu nome? ", nomeUsuario => {
                    switch(nomeUsuario){
                        case "João":
                            console.log("Bem-vindo ao Kart, João!");
                            break;
                        case "Giovana":
                            console.log("Bem-vinda ao Kart, Giovana");
                            break;
                        default:
                            console.log("Seu nome não foi identificado na lista de presença");

                    }
                });
            }
        })
    }
})