``` 
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  const arrayNumeroEscolhido = arrayDeNumeros.filter((n, i, array) => {
    return n === numeroEscolhido
  })
  if (arrayNumeroEscolhido.length !== 0) {
    return `O número ${numeroEscolhido} aparece ${arrayNumeroEscolhido.length}x`
  } else {
    return "Número não encontrado"
  }
}
```