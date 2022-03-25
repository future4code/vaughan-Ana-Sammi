import { retornaFrase} from "./exercicio1";
import { imprimeTipo} from "./exercicio2"
import {organizaFilmes, GENERO} from "./exercicio3"
import {colaboradores, filtraPessoas} from './exercicio4'

console.log(retornaFrase("ana", "11/03/1987"))

imprimeTipo(44)

console.log(organizaFilmes("Batman", 1995, GENERO.ACAO))

console.table(filtraPessoas(colaboradores))
