//constants, values that will not change
const candyBtn = document.getElementById("candy-btn")

const upgclick = document.getElementById("upgclick")

const removethis = document.getElementById("remove")

//variables. we're also going to 
let totalCandy = 0;

const TotalCandyDisplay = document.getElementById("TotalCandies")

let candyPerClick = 1
const CandyPerClickDisplay = document.getElementById("CandyPerClick")

let clickUpgradeCost = 25;




//when candy button is clicked, increase candy by candy/click number
/**first we add an event listener, which waits for a specifc thing to happen to an element
 and runs a function**/
candyBtn.addEventListener("click", addCandy)

//we add event listeners after variables but before main code. add another to run a function when 
// the upgrade button is clicked*/
upgclick.addEventListener("click", buyClickUpgrade)

//function that adds candy to our total based on candy/click number, so long as we have less than 5000 candies
function addCandy(){
totalCandy += candyPerClick
if (totalCandy===1) {
    TotalCandyDisplay.innerHTML= 1 + " Candy"
    
} else {
    TotalCandyDisplay.innerHTML= totalCandy + " Candies"
    
}
if (totalCandy>=1)
removethis.innerHTML= ""    
}

//check to see if we can buy an upgrade, so we can grey out or brighten purchase button. adds or removes special css classes
function canUserIncreaseClick(){
}


//buy a click upgrade if we have enough coins. also used Math.trunc to remove pesky decimals
function buyClickUpgrade(){
    if (totalCandy >= clickUpgradeCost) {
        totalCandy -= clickUpgradeCost
        if (totalCandy===1) {
    TotalCandyDisplay.innerHTML= 1 + " Candy"
    } else {
    TotalCandyDisplay.innerHTML= totalCandy + " Candies"}
    candyPerClick += 2
    CandyPerClickDisplay.innerHTML = "Candies/Click:" + candyPerClick
    clickUpgradeCost = Math.round(clickUpgradeCost *=1.8)
    upgclick.innerHTML = "Get 5 more candies/click for " + clickUpgradeCost + "candies"
    
    }
}
