function ordenarString (string) {
    var array = string.split('');
    let vogais = [];
    let consoantes = [];
    for (let i=0; i < array.length; i++) {
        if (array[i] === 'a' || array[i] === 'e'|| array[i] === 'i' || array[i] === 'o' ||array[i] === 'u') {
            vogais.push(array[i])
        } else {
            consoantes.push(array[i])
        }
    } console.log(vogais, consoantes)
}