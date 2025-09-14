// Call Section

let coins = 100;
const coinDisplay = document.getElementById("coin");
const callButtons = document.querySelectorAll(".btn-call");

for (let button of callButtons) {
  button.addEventListener("click", function () {
    if (coins >= 20) {
      coins -= 20;
      coinDisplay.textContent = coins;

      const card = button.closest(".card");
      const serviceName = card.querySelector(".service-name").textContent;
      const serviceNumber = card.querySelector(".service-number").textContent;

      alert(`Calling... ${serviceName} ${serviceNumber}`);
    }
    else{
      alert("You do not have sufficient coins ❌ ! You need at least 20 coins to call !");
    }
  });
}
