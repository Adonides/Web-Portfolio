/*NAVBAR==========================================*/
function toggleBtn(){
  const navbarList = document.getElementsByClassName('navbar-list')[0]
  navbarList.classList.toggle('active')
}

/*BUTTONS=========================================*/
const Modal = {
  open() {
      document.querySelector('.modal-overlay')
      .classList
      .add('engage')
  },
   close() {
      document.querySelector('.modal-overlay')
      .classList
      .remove('engage')
  }
}

/*TRANSACTIONS.CALCULATION============================================*/
const Transactions = {
  all: [
    {
      description: 'Rent',
      amount: -31000,
      date: '31/01/2021'
    }, 
    {
    description: 'Eletricity',
    amount: -7000,
    date: '23/01/2021'
    }, 
    {
    description: 'Website',
    amount: 150000,
    date: '26/01/2021'
    }, 
    {
    description: 'Internet',
    amount: -3499,
    date: '16/01/2021'
    }, 
    {
    description: 'Water',
    amount: -2389,
    date: '16/01/2021'
    } 
  ],  

  add(newTransaction) {
    this.all.push(newTransaction)

    BudgetApp.reload()
  },

  remove(index) {
    this.all.splice(index, 1)

    BudgetApp.reload()
  },

  incomes() {
    let income = 0

    this.all.forEach(transaction => {
      if (transaction.amount > 0) {
        income += transaction.amount
      }
    })

    return income
  },

  expenses() {
    let expense = 0

    this.all.forEach(transaction => {
      if (transaction.amount < 0) {
        expense += transaction.amount
      }
    })

    return expense
  }, 

  total () {

    return this.incomes() + this.expenses()
  },

  updateTransactions() {
    document.
      querySelector('#viewIncome').
        innerText = Formatting.formatcurrency(this.incomes())

    document.
      querySelector('#viewExpense').
        innerText = Formatting.formatcurrency(this.expenses())

    document.
      querySelector('#viewTotal').
      innerText = Formatting.formatcurrency(this.total())
  }
}

/*CreateTags.HTMLtoJS============================================*/
const CreateHTMLtags = {
  tbodyContainerHTML: document.querySelector('#data-table tbody'),

  addTableRowTransaction(transaction, index) {
    const tr = document.createElement('tr')
    tr.innerHTML = CreateHTMLtags.getTransactionHTML(transaction, index)
    tr.dataset.index = index

    CreateHTMLtags.tbodyContainerHTML.appendChild(tr)

  },

  getTransactionHTML(transaction, index) {

    const className = transaction.amount > 0 ? "income" : "expense"

    const amount = Formatting.formatcurrency(transaction.amount)

    const HTML = `
    
      <td class="description">${transaction.description}</td>
      <td class="${className}">${amount}</td>
      <td class="date">${transaction.date}</td>
      <td>
        <img onclick="Transactions.remove(${index})" class="delete" src="./Images/minus.svg" alt="Delete transaction">
      </td>
    
    `
    return HTML
  },

  clearTbody() {
    CreateHTMLtags.tbodyContainerHTML.innerText = ""
  }
}

/*Formatting======================================*/
const Formatting = {
  formatcurrency(amount) {
    const sign = Number(amount) < 0 ? "-" : ""
    
    amount = String(amount).replace(/\D/g, "") 

    amount = Number(amount) / 100

    amount = amount.toLocaleString("pt-PT", {
      style: "currency",
      currency: "EUR"
    })

    return sign + amount
    
  },
  
  formatAmount(amountForm) {
    amountForm = Number(amountForm.replace(/\,\./g, "")) * 100
    
    return amountForm
  },

  formatDate(date) {
    const splitDate = date.split("-")

    return `${splitDate[2]}/${splitDate[1]}/${splitDate[0]}`
  }
}

/*Form===============================================*/
const Form = {
  description: document.querySelector('#description'),
  amount: document.querySelector('#amount'),
  date: document.querySelector('#date'),

  getValues() {
    return {
      description: this.description.value,
      amount: this.amount.value,
      date: this.date.value
    }
  },

  validation() {
    const { description, amount, date } = this.getValues()

    if ( description.trim() === "" ||
        amount.trim() === "" ||
        date.trim() === "" ) {
          throw new Error("Please, fill all the fields")
        }
  },

  formatValues() {
    let { description, amount, date } = this.getValues()

    amount = Formatting.formatAmount(amount)

    date = Formatting.formatDate(date)

    return {
      description,
      amount,
      date
    }

  },

  clearField() {
    this.description.value = ""
    this.amount.value = ""
    this.date.value = ""
  },

  submit(event) {
    event.preventDefault()

    try {

      this.validation()

      const transaction = this.formatValues()
      Transactions.add(transaction)

      this.clearField()
      Modal.close()
      
    } catch (error) {
      alert(error.message)
    }

    
  }

  
}

/*APP.Initiation======================================*/
const BudgetApp = {
  start() {

    Transactions.all.forEach(CreateHTMLtags.addTableRowTransaction)
    
    /*
      Transactions.all.forEach((transaction, index) => {
      CreateHTMLtags.addTableRowTransaction(transaction, index)
    })
    */
    
    Transactions.updateTransactions()
    
    

  },
  reload() {

    CreateHTMLtags.clearTbody()

    BudgetApp.start()
    
  }
}

BudgetApp.start()

