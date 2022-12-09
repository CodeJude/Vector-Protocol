import {vectorprotocol} from "../../declarations/vectorprotocol";

window.addEventListener("load", async function(){
    // console.log("Finished Loading");
    const currentAmount = await vectorprotocol.checkBalance();
    document.getElementById("value").innerText = Math.round((currentAmount + Number.EPSILON) * 100) / 100
});

document.querySelector("form").addEventListener("submit", async function(event){
    event.preventDefault();
    // console.log("Submitted");

    const button = event.target.querySelector("#submit-btn")

    const inputAmount = parseFloat(document.getElementById("input-amount").value);
    const withdrawAmount = parseFloat(document.getElementById("withdrawal-amount").value);

    button.setAttribute("disabled", true);



    await vectorprotocol.topUp(inputAmount);

    const currentAmount = await vectorprotocol.checkBalance();
    document.getElementById("value").innerText = Math.round((currentAmount + Number.EPSILON) * 100) / 100

    document.getElementById("input-amount").value = "";
    button.removeAttribute("disabled")
    
});