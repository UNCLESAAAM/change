/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
let hdLen = document.getElementById("hd-len")
let hdMass = document.getElementById("hd-mass")
let hdVol = document.getElementById("hd-vol")
let numInput = document.getElementById("num-input")
let btnConvert = document.getElementById("btn-convert")


btnConvert.addEventListener("click",function(){

   decvalue= parseFloat(numInput.value)
   var lenb =  (decvalue * 3.281).toFixed(3)
   var lenc =  (decvalue * 0.304).toFixed(3)
   
   var volb =  (decvalue * 0.264).toFixed(3)
   var volc =  (decvalue * 3.787).toFixed(3)   

   var masb =  (decvalue * 2.204).toFixed(3)
   var masc =  (decvalue * 0.453).toFixed(3)  
   

  hdLen.innerHTML = ` ${decvalue} meter =  ${lenb} feet | ${decvalue} feet =  ${lenc} meter`
  hdVol.innerHTML = ` ${decvalue} liter =  ${volb} gallons | ${decvalue} gallons =  ${volc} liter`
  hdMass.innerHTML = `${decvalue} kilos =  ${masb} pounds | ${decvalue} pounds =  ${masc} kilos`
})