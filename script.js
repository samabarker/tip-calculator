// Tip calculation
const tip = (bill_total, percentage) => {
    let tip_total = bill_total * (percentage / 100);
    let new_total = bill_total + tip_total;
    return [new_total, tip_total];
}

/*
This is the hello function
*/
const hello = () => {
    alert("Calculating Tip");
    console.log("Secret Message");
    
    let amount = Number(document.getElementById("amount").value);
    let tip_val = Number(document.getElementById("tip").value);
    let extra_message = "";

    if (amount === 0) {
        document.getElementById("new_text").innerHTML = "You must enter an amount!";
        return
    }

    if (tip_val === 0) {
        tip_val = 15;
        extra_message = "(Assumed tip of 15%)"
    }

    document.getElementById("new_text").innerHTML = "Your total bill, with tip, is &#163;" + tip(amount, tip_val)[0].toFixed(2) + ". The tip amount is &#163;" + tip(amount, tip_val)[1].toFixed(2) + ".<br>" + extra_message;
}
