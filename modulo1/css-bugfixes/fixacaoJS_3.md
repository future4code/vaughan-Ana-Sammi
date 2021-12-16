``` 
    function calculaNota(ex, p1, p2) {
  let media = (ex + (p1 * 2) + (p2 * 3)) / 6;
  let conceito = ""
  if (media >= 9) {
    conceito = "A";
  } else if (media >= 7.5) {
    conceito = "B";
  } else if (media >= 6) {
    conceito = "C";
  } else {
    conceito = "D";
  }
  return conceito
} 
``` 