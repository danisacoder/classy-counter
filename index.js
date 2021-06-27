let tally = 0
let tallyTotal = 0
let tallyObject = {}
let tallyEl = document.getElementById("tally-el")
let totalEl = document.getElementById("total-el")
let addBtn = document.getElementById("add-btn")
let subBtn = document.getElementById("subtract-btn")
let saveBtn = document.getElementById("save-btn")
let deleteBtn = document.getElementById("delete-btn")
let recordEl = document.getElementById("record-el")


// puts any saved array from localStorage into the page again
function checkStorage() {
  if (localStorage.getItem("tallyObject")) {
    tallyObject = JSON.parse(localStorage.getItem("tallyObject"))
    console.log("butts")
    renderObject()
    // console.log(JSON.parse(localStorage.getItem("tallyObject")))
    // recordEl.innerHTML = tallyObject
  }
}

// this is just for generating the timestamp
function getTimeStamp() {
  // const options = {
  //   hour12: true
  // }
  let currentDate = new Date()
  let formattedDate = currentDate.toLocaleString(navigator.language, {hour: '2-digit', minute: '2-digit'})
  let time = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds()
  return formattedDate
}

// displays the current tally prior to save
function renderTally() {
  tallyEl.textContent = tally
}

// adds an an array of count and timestamp into the tallyObject
function addToObject() {
  let arrayNum = `array${(Object.keys(tallyObject)).length++}`
  let array = [tally, getTimeStamp()]
  tallyObject[arrayNum] = array
  console.log(tallyObject)
}

// increments the tally by 1
addBtn.addEventListener("click", function() {
  tally += 1
  renderTally()
})

// decrements the tally by 1
subBtn.addEventListener("click", function() {
  if (tally > 0) {
    tally -= 1
  }
  renderTally()
})

// deletes tally, tallyObject, and localStorage contents
deleteBtn.addEventListener("click", function() {
  tally = 0
  localStorage.removeItem("tallyObject")
  tallyObject = {}
  renderTally()
  renderTotal()
  renderObject()
})

// displays tallyObject in recordEl (aka shows it on the page)
function renderObject() {
  recordEl.innerHTML = ""
  const values = Object.values(tallyObject)
  values.forEach(val => recordEl.innerHTML += (`<li>${val[0]} - ${val[1]}</li>`))
}

// pushes tallyObject to localStorage
function saveToStorage() {
    localStorage.setItem("tallyObject", JSON.stringify(tallyObject))
}

// adds up all of the entries for the "day"
function renderTotal() {
  const entries = Object.entries(tallyObject)
  tallyTotal = 0
  entries.forEach(val => tallyTotal += val[1][0])
  totalEl.textContent = tallyTotal
}

renderTally()
checkStorage()
renderTotal()

saveBtn.addEventListener("click", function() {
  if (tally > 0) {
    addToObject()
    renderObject()
    tally = 0
    renderTally()
    saveToStorage()
    renderTotal()
  }
})
