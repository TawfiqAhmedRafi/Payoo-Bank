// login button functionality
document.getElementById("loginbutton").addEventListener("click",function(e){
    e.preventDefault()
    const mobileNumber=12345678910
    const pinNumber=1234
    const mobilenumbervalue = document.getElementById("mobile-number").value
    const mobilenumbervalueconverted = parseInt(mobilenumbervalue)
    const pinnumbervalue = document.getElementById("pin-number").value
    const pinnumbervalueconverted = parseInt(pinnumbervalue)
    if(mobilenumbervalueconverted===mobileNumber && pinnumbervalueconverted===pinNumber){
       window.location.href="./home.html"
    }
    else{
        alert("Invalid Credentials")
    }
})