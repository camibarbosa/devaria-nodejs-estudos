const readLine = require('readline').createInterface({
    input : process.stdin,
    output : process.stdout
});

const validarNumeroInformado = numero => {
    const resultado = Number.parseFloat(numero);
    if(!resultado){
        console.log('Numero informado nao e valido!');
    }
    return resultado;
}
const validarOperador = operador => {
    switch(operador){
        case '+':
        case '-':
        case '/':
        case '*':
        case '%':
            return operador;
        default:
            console.log('Operador informado nao e valido');
            return null;
    }
}

readLine.question('Por favor, informe um numero: ', numero1 => {
    const numeroValidado1 = validarNumeroInformado(numero1);

    if(numeroValidado1){
        readLine.question('Por favor, informe outro número: ', numero2 => {
            const numeroValidado2 = validarNumeroInformado(numero2);
        
            if(numeroValidado2){
                readLine.question('Por favor, informe um operador: ', operador => {
                    const operadorValidado = validarOperador(operador);
                if(operadorValidado){
                    switch(operadorValidado){
                        case '+' : console.log(`Operador selecionado soma. Resultado = ${numeroValidado1} + ${numeroValidado2} = ${numeroValidado1 + numeroValidado2} `);
                            break;
                        case '-' : console.log(`Operador selecionado subtracao. Resultado = ${numeroValidado1} - ${numeroValidado2} = ${numeroValidado1 - numeroValidado2} `);
                            break;
                        case '*' : console.log(`Operador selecionado multiplicacao. Resultado = ${numeroValidado1} * ${numeroValidado2} = ${numeroValidado1 * numeroValidado2} `);
                            break;
                        case '/' : console.log(`Operador selecionado divisao. Resultado = ${numeroValidado1} / ${numeroValidado2} = ${numeroValidado1 / numeroValidado2} `);
                            break;
                        case '%' : console.log(`Operador selecionado modulo. Resultado = ${numeroValidado1} % ${numeroValidado2} = ${numeroValidado1 % numeroValidado2} `);
                            break;
                        default: break;
                    
                    }
                }
                })
            }
        });
    }
});