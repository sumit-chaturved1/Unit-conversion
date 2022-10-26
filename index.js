/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const lengthOut = document.getElementById("length-out")
const volumeOut = document.getElementById("volume-out")
const massOut = document.getElementById("mass-out")
const inputEl = document.getElementById("input-box")
let inptValue=inputEl.value=0
const convertBtn = document.getElementById("convert-btn")
let meters=0
let feet=0
let liters=0
let gallons=0
let kilos=0
let pounds=0
render()
function render(){
	lengthOut.textContent=`${meters} meters = ${feet.toFixed(3)} feet | ${meters} feet = ${(meters/3.28084).toFixed(3)} meters`
	volumeOut.textContent=`${liters} liters = ${gallons.toFixed(3)} gallons | ${liters} gallons = ${(liters/0.264172).toFixed(3)} liters`
	massOut.textContent=`${kilos} kilos = ${pounds.toFixed(3)} pounds | ${kilos} pounds = ${(kilos/2.20462).toFixed(3)} kilos`
}
convertBtn.addEventListener("click",function(){
	inptValue = inputEl.value
	meters = liters = kilos = inptValue
	feet = 3.28084 * meters
	gallons = 0.264172*liters
	pounds = 2.20462 * kilos
	render()
})


