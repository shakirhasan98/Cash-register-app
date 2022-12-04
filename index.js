const billAmount= document.querySelector("#bill-amt");
const cashGiven= document.querySelector("#cash-given");
const checkbtn= document.querySelector("#check-btn");
const msg= document.querySelector("#error-msg");
const numberOfnotes= document.querySelectorAll(".noofnotes");
const availableNotes= [2000,500,100,20,10,5,1];

checkbtn.addEventListener("click", function(validateBillAndCashAmt){
    hideMessage();
    if (billAmount.value > 0){
        if(billAmount.value <= cashGiven.value ){
            const amountToBeReturned= cashGiven.value-billAmount.value;
            calculateChange(amountToBeReturned);
        }
        else{
            showMessage("Do you wanna wash plates");
        }
    }else{
        showMessage("Invalid Bill Amount. Value should be in numbers");
    }
})

function calculateChange(amountToBeReturned){
    for(i=0;i < availableNotes.length;i++){
        const noOfNotes= Math.trunc(amountToBeReturned / availableNotes[i]
        );
        amountToBeReturned = amountToBeReturned%availableNotes[i];
        numberOfnotes[i].innerText=noOfNotes;
    }

}

function showMessage(message){
    msg.style.display = "block";
    msg.innerText = message;
}

function hideMessage(){
    msg.style.display="none";
}   