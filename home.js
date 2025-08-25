const validpin=1234
const transactionData=[]



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
// funtion to toggle
function togglehandle(id){
    const forms = document.getElementsByClassName("form")
     for(const form of forms ){
     form.style.display = "none"
 }
    document.getElementById(id).style.display = "block"
}
function buttonhandletoggle(id){
    const formBtns = document.getElementsByClassName("form-btn")
    for(const btn of formBtns){
       btn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]")
       btn.classList.add("border-gray-300")
      
    }
    document.getElementById(id).classList.remove("border-gray-300")
    document.getElementById(id).classList.add("border-[#0874f2]", "bg-[#0874f20d]")
}
// add money feature
document.getElementById("add-money").addEventListener("click",function(e){
e.preventDefault()

const bank = getInput("bank")
const accountnumber = getInput("accnumber")
const amount = getInputValue("addamount")
if(amount<=0 ){
    alert("please enter valid amount")
    return;
}
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
const data ={
    name : "Add Money",
    date:new Date().toLocaleTimeString()
}
transactionData.push(data)

})


// cashout feature
document.getElementById("withdraw-btn").addEventListener("click",function(e){
    e.preventDefault()
    
    const agent_number = getInput("agentnumber")
    const amount = getInputValue("withdraw-amount")
   const availablebalance = getInnerText("availablebalance")

if(amount<=0 || amount>availablebalance){
    alert("please enter valid amount")
    return;
}

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
  const data ={
    name : "Cash Out",
    date:new Date().toLocaleTimeString()
}
transactionData.push(data)


})
// transfer money feature

// 
document.getElementById("transaction-button").addEventListener("click",function(){
   
    const transactionContainer = document.getElementById("transaction-container")
    transactionContainer.innerText=""
    for(const data of transactionData){
        const  div=document.createElement("div")
        div.innerHTML=`
        <div class="p-3 bg-white rounded-xl flex justify-between items-center mt-3">
            <div class="flex items-center">
                <div class="p-3 rounded-full bg-[#f4f5f7]">
                    <img src="./assets/wallet1.png" alt="">
                </div>
                <div class="ml-3">
                    <h1>${data.name}</h1>
                    <p>
                       ${data.date}
                    </p>
                </div>
            </div>
            <i class="fa-solid fa-ellipsis-vertical"></i>
        </div>
        `;
        transactionContainer.appendChild(div)
    }
})
// toggle
document.getElementById("add-button").addEventListener("click",function(){
    
    togglehandle("add-money-parent")
    buttonhandletoggle("add-button")
})
document.getElementById("cash-out-button").addEventListener("click",function(){

    togglehandle("cash-out-parent ")
     buttonhandletoggle("cash-out-button")
})
document.getElementById("Transfer-button").addEventListener("click",function(){

    togglehandle("transfer-money-parent")
        buttonhandletoggle("Transfer-button")
})
document.getElementById("get-bonus-button").addEventListener("click",function(){

    togglehandle("get-bonus-parent")
        buttonhandletoggle("get-bonus-button")
})
document.getElementById("bill-button").addEventListener("click",function(){

    togglehandle("bill-parent")
        buttonhandletoggle("bill-button")
})
document.getElementById("transaction-button").addEventListener("click",function(){

    togglehandle("transaction-parent")
        buttonhandletoggle("transaction-button")
})



