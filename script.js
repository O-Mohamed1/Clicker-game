let totalClicks = 0;
let autoClicks = 0;
let autoClickersList=[];
const totalClicksElement = document.getElementById("totalClicks");
const cpsElement = document.getElementById("cps");
const autoclickersElement = document.getElementById("autoclickers");


function refreshUI() {
  totalClicksElement.innerHTML = `Clicks: ${totalClicks}`;
  cpsElement.innerHTML = `Currently autoclicking at ${autoClicks} clicks per second`;
}
function clicks() {
  totalClicks += 1;
  refreshUI();
}

class Autoclickers {
  constructor(name, cost, cps) {
    this.name = name;
    this.cost = cost;
    this.cps = cps;
    autoClickersList.push(this);
  }
  newAutoclicker(autoClickersList) {
    let autoButton=document.createElement("button");
    let autoButtonText=document.createTextNode(`${this.name} clicker, costs ${this.cost} clicks`)
    autoButton.appendChild(autoButtonText)
    autoButton.classList.add("btn","btn-secondary","d-flex", "col")
    autoclickersElement.appendChild(autoButton)

    autoButton.addEventListener("click",()=>{
      if(totalClicks>=this.cost){
        autoClicks+=this.cps;
        totalClicks-=this.cost;
        refreshUI();
      };
    });
  };
}
let upgrade1 = new Autoclickers("slow", 10, 1);
let upgrade2 = new Autoclickers("decent", 25, 5)
let upgrade3 = new Autoclickers("alright", 100, 10)
let upgrade4 = new Autoclickers("speedy", 500, 25)
let upgrade5 = new Autoclickers("fast", 2000, 150)
let upgrade6 = new Autoclickers("sonic", 10000, 400)
let upgrade7 = new Autoclickers("hyper", 30000, 1000)
let upgrade8 = new Autoclickers("lightspeed", 100000, 5000)
let upgrade9 = new Autoclickers("ultimate", 2000000, 123456)
let upgrade10 = new Autoclickers("transcendent", 999999999, 987654321)

setInterval(() => {totalClicks+=autoClicks;refreshUI()}, 1000);
autoClickersList.forEach(function(item) {item.newAutoclicker(autoClickersList)})
