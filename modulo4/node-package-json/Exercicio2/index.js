let operacao = process.argv[2];
let num1 = Number(process.argv[3]);
let num2 = Number(process.argv[4]);

switch(operacao) {
    case "soma":
        console.log(`Resposta: ${num1 + num2}`)
        break;
    case "sub":
        console.log(`Resposta: ${num1 - num2}`)
        break;
    case "mult":
        console.log(`Resposta: ${num1 * num2}`)
        break;
    case "div":
        console.log(`Resposta: ${num1 / num2}`)
}

