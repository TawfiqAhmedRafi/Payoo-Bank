const validpin=1234
// functions to get input values
function getInputValue(id){
    const Inputfield = document.getElementById(id)
    const Inputvalue = Inputfield.value
    const Inputvalueconverted = parseInt(Inputvalue)
    return Inputvalueconverted
}

function getInput(id){
    const Inputfield = document.getElementById(id)
    const Inputvalue = Inputfield.value
    return Inputvalue
}
//  function to get inner text
function getInnerText(id){
    const element = document.getElementById(id)
    const text = element.innerText
    const textconverted = parseInt(text)
    return textconverted
}
// set inner text
function setInnerText(value){
    const availablebalanceelement = document.getElementById("availablebalance")
    availablebalanceelement.innerText=value
}



// add money feature
document.getElementById("add-money").addEventListener("click",function(e){
e.preventDefault()

const bank = getInput("bank")
const accountnumber = getInput("accnumber")
const amount = getInputValue("addamount")
const pin= getInputValue("addpin")
const availablebalance = getInnerText("availablebalance")

if(accountnumber.length<11 || accountnumber.length>11){
    alert("please enter valid account number")
    return;
}
if(pin!==validpin){
    alert("please enter valid pin")
    return;
}


const newbalance = availablebalance + amount


setInnerText(newbalance)

})


// cashout feature
document.getElementById("withdraw-btn").addEventListener("click",function(e){
    e.preventDefault()
    
    const agent_number = getInput("agentnumber")
    const amount = getInputValue("withdraw-amount")
   const availablebalance = getInnerText("availablebalance")
    const pin = getInputValue("cashout-pin")
    if(agent_number.length<11 || agent_number.length>11){
    alert("please enter valid account number")
    return;
}
    if(pin!==validpin){
    alert("please enter valid pin")
    return;
}
 const newbalance = availablebalance - amount
  setInnerText(newbalance)

})

// toggle
document.getElementById("add-button").addEventListener("click",function(){
    document.getElementById("cash-out-parent ").style.display = "none"
    document.getElementById("add-money-parent").style.display = "block"
})
document.getElementById("cash-out-button").addEventListener("click",function(){
    document.getElementById("add-money-parent").style.display = "none"
    document.getElementById("cash-out-parent ").style.display = "block"
})


