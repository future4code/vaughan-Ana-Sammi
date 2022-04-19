import { client1 } from './data/Client'
import { Customer } from './data/Customer'
import { Employee } from './data/Employee'
import { Commerce, Industry, Place, Residence } from './data/Place'
import { Seller } from './data/Seller'
import {User} from './data/User'

//HERANÇA
// Exercício 1
// a. Não
// b. 1 vez
const user1: User = new User("01", "user1@email.com", "Usuário 1", "123456" )
console.log(user1.getId(), user1.getEmail(), user1.getName())

//Exercício 2
// a. 1 vez
// b. 2 vezes, uma no chamado do User e outra quando o Customer foi chamado, pois ele herdou informações de User.
const customer1: Customer = new Customer("02", "customer1@email.com", "Customer1", "123456", "visa")
console.log(customer1.getCreditCard())

// Exercício 3
// a. Não, pois password é uma oropriedade private (privada), que só é acessível à classe User.
console.log(customer1.getId(), customer1.getName(), customer1.getEmail(), customer1.purchaseTotal, customer1.getCreditCard())

//Exercício 4
console.log(customer1.introduceYourself())

//Exercício 5
console.log(customer1.introduceYourself())

// Exercício 6
// a. 3 vezes
// b. 
const employee1: Employee = new Employee("20/02/2022", 3000, "employee1@email.com", "06", "Employee1", "123456")
console.log(employee1)

// Exercício 7
console.log(employee1.calculateTotalSalary())

// Exercício 8
// a. admissionDate, baseSalary, email, id, name, password
// b. Não consegui imprimir nenhum, pois são informações privadas ou protegidas, que só podem ser acessadas por classes filhas.
const seller1: Seller = new Seller("13/04/2020", 5000, "seller1@email.com", "07", "Seller1", "123456")
console.log(seller1)

//Exercício 9
// a. Não, pois é uma informação privada.
seller1.setSalesQuantity(10)
// console.log(seller1.salesQuantity)

//POLIMORFISMO

//Exercício 1
// a. Consegui imprimir name, registration number, consumed energy e calculate bill.
console.log(client1.name, client1.registrationNumber, client1.consumedEnergy, client1.calculateBill())

//Exercício 2
// a. Erro: não é possível criar uma instância de uma classe abstrata.
// const place:Place = new Place()
// b. Como ela só armazena características comuns de outras classes, o ideal seria utilizá-la como uma superclass.

//Exercício 3
const residence1: Residence = new Residence(3, "888888")
const commerce1: Commerce = new Commerce(4, "777777")
const industry1: Industry = new Industry(20, "666666")
console.log(residence1.getCep(), commerce1.getCep(), industry1.getCep())

// Exercício 4
// a. Métodos: getCpf e clculateBill; propriedades: todas as de Client e de Residence (que também tem propriedades de Place)

// Exercício 5
// a. Todas as propriedades que vieram de Client e Place.
// b. Os métodos e as propriedades que vieram de Commerce.

// Exercício 6
// a. Deve ser filha da classe Industry, para poder acessar as propriedades dela.
// b. Deve implementar a interface Client, para poder utilizar as propriedades e métodos dela.
// c. 