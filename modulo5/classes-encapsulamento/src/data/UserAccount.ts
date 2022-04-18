export class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = []

    public setTransaction(newTransaction: Transaction) {
        this.transactions.push(newTransaction)
    }
  
    constructor(
       cpf: string,
       name: string,
       age: number,
    ) {
       console.log("Chamando o construtor da classe UserAccount")
       this.cpf = cpf;
       this.name = name;
       this.age = age;
    }

  }

  export class Transaction {
    private description: string
    private value: number
    private date: string

    constructor(
        description: string,
        value: number,
        date: string
    ) {
        console.log("Transição aqui!")
        this.description = description,
        this.value = value,
        this.date = date
    }

    public getTransactionData() {
        return this.description, this.value, this.date
    }
  }

  export class Bank{
      private accounts: UserAccount[] = []

      constructor(accounts: UserAccount[]) {
          this.accounts = accounts
      }

      public setNewAccount(newAccount: UserAccount){
          this.accounts.push(newAccount)
      }

      public getAllAccounts():UserAccount[]{
          return this.accounts
      }
  }
