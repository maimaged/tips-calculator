function calTip(){
var billAmount = document.getElementById("paid").value,
    numberOfPeople = document.getElementById("people2").value, // this was so big mistake that i make this id was duplicated yup
     qualityService = document.getElementById("rate").value;
var total = (billAmount * qualityService) / numberOfPeople;
document.getElementById("output").innerHTML = "tips is "+total+"$ for each one";
}

document.getElementById("cal").onclick=function(){ //here we call the function by event on click by pushing the button
    calTip();
  };
 // i am happy by my first project completation 21/3/2021 :)