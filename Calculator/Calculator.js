//Navergation Bar--------------------------------------
function toggleBtn() {
  const navbarLinks = document.querySelector('.navbar-links')
  navbarLinks.classList.toggle('active')
}

//Calculator---------------------------------------------
let currentNumber = ""
let savedNumber = ""
let chosenAction = ""


function numberClick(ev) {
  let digit = ev.target.innerText
  viewtext(`${currentNumber}${digit}`)
}

function viewtext(digit) {
  const currentDisplay = document.querySelector('#current-display')
  currentNumber = digit
  currentDisplay.innerText = currentNumber
}
/*
function appendOperation(prevOperation) {
  const prevDisplay = document.getElementById('prev-diplay')
  let savedOperation = prevOperation
  prevDisplay.innerText = savedOperation
}
*/
function actionClick(ev) {
  let action = ev.target.innerText
  operator(action)
  
}

function operator(action) {
  if (action === "=") {
    let result 
    if (chosenAction === "+") {
      result = Number(savedNumber) + Number(currentNumber)
    } else if (chosenAction === "-") {
      result = Number(savedNumber) - Number(currentNumber)
    } else if (chosenAction === "*") {
      result = Number(savedNumber) * Number(currentNumber)
    } else if (chosenAction === "/") {
      result = Number(savedNumber) / Number(currentNumber)
    } else if (chosenAction === "%") {
      result = Number(currentNumber) / Number(100)
    } 
    viewtext(result)
  } else {
    savedNumber = currentNumber
    chosenAction = action
    viewtext("")
    //appendOperation(`${savedNumber}${chosenAction}`)
  }
}

function decimalBtn() {
  if(!currentNumber.includes('.')){
    viewtext(currentNumber += '.')
  }
}

function squaredBtn() {
  let squared = Number(currentNumber) * Number(currentNumber)
  viewtext(squared)
}

function clearBtn() {
  currentNumber = ""
  prevOperation = ""
  actionChosen = ""
  viewtext("")
}

function backBtn() { 
  let backSpace = currentNumber.length
  currentNumber = currentNumber.slice(0, backSpace -1)
  viewtext(currentNumber)
}



