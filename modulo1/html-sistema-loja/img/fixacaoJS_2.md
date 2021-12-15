``` function calculaPrecoTotal(quantidade) {
    let precoMaca = 0;
      if (quantidade >= 12) {
      precoMaca = 1;
      } else {
      precoMaca = 1.3;
      }
    let custoTotal = precoMaca * quantidade;
    return custoTotal;
} 
```