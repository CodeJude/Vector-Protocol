import { vectorprotocol } from "../../declarations/vectorprotocol";

window.addEventListener("load", async function () {
    // console.log("Finished Loading");
    update();
});

document.querySelector("form").addEventListener("submit", async function (event) {
    event.preventDefault();
    // console.log("Submitted");

    //Naming constants to be used 
    const button = event.target.querySelector("#submit-btn")
    const inputAmount = parseFloat(document.getElementById("input-amount").value);
    const withdrawAmount = parseFloat(document.getElementById("withdrawal-amount").value);

    button.setAttribute("disabled", true);

    //Initializing the top up section
    if (document.getElementById("input-amount").value.length != 0) {

        await vectorprotocol.topUp(inputAmount);
    }

    //Initializing the withdraw section
    if (document.getElementById("withdrawal-amount").value.length != 0) {

        await vectorprotocol.withdraw(withdrawAmount);
    }

    await vectorprotocol.compound();

    update();

    document.getElementById("input-amount").value = "";
    document.getElementById("withdrawal-amount").value = "";

    button.removeAttribute("disabled")


});

async function update() {
    const currentAmount = await vectorprotocol.checkBalance();
    document.getElementById("value").innerText = Math.round((currentAmount + Number.EPSILON) * 100) / 100;
}