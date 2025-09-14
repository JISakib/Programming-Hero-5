// Call Section

let coins = 100;
const coinDisplay = document.getElementById("coin");
const callButtons = document.querySelectorAll(".btn-call");

for (let button of callButtons) {
  button.addEventListener("click", function(){
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


//History
const historyDiv = document.getElementById("call-history-list");

for (const btn of callButtons) {
  btn.addEventListener("click", function() {
    if (coins < 20) return;
    
    const card = btn.closest(".card");
    const serviceName = card.querySelector(".service-name").textContent;
    const serviceNumber = card.querySelector(".service-number").textContent;
    const time = new Date().toLocaleTimeString();
    const div = document.createElement('div');
    div.innerHTML =
      `
      <div class="flex items-center justify-between gap-5 mb-3 p-3 bg-[rgba(242,242,242,1)] rounded-[10px]">
        <div>
          <h1 class="font-bold">${serviceName}</h1>
          <p class="text-gray-500">${serviceNumber}</p>
        </div>
        <div>
          <p class="text-xs text-gray-500">${time}</p>
        </div>
      </div>
      ` 
      historyDiv.appendChild(div);
  });
}


