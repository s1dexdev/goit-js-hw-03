/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
let id = 0;
const idCounter = function () {
    id += 1;
    return id;
}


const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
    createTransaction(amount, type) {
        const transaction = {};

        transaction['id'] = idCounter();
        transaction['amount'] = amount;
        transaction['type'] = type;

        return transaction;
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
    deposit(amount) {
        this.balance += amount;
        this.transactions.push(this.createTransaction(amount, 'deposit'));
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
    withdraw(amount) {
        if (amount > this.balance) {
            return alert('Cнятие такой суммы не возможно, недостаточно средств.');
        } else {
            this.transactions.push(this.createTransaction(amount, 'withdraw'));
            this.balance -= amount;
        }
  },

  /*
   * Метод возвращает текущий баланс
   */
    getBalance() {
        return this.balance;
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
    getTransactionDetails(id) {
        for (let obj of this.transactions) {
            if (obj.id === id) {
                return obj;
            }
        }
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
    getTransactionTotal(type) {
        let total = 0;

        for (let obj of this.transactions) {
            if (obj.type === type) {
                total += obj.amount;
            }
        }

        return total;
  },
};



// account.deposit(1000);
// account.withdraw(500);
// account.deposit(1000);
// account.withdraw(500);
// account.deposit(1000);
// account.withdraw(500);
// account.deposit(1000);


// console.log(account);

// console.log(account.getTransactionTotal('deposit'));
// console.log(account.getTransactionTotal('withdraw'));
// console.log(account.getBalance());
// console.log(account.getTransactionDetails(2));