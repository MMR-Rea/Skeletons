
//constants, values that will not change
const candyBtn = document.getElementById("candy-btn")

const upgclick = document.getElementById("upgclick")

const removethis = document.getElementById("remove")

//variables. we're also going to 
let totalCandy = 0;

const TotalCandyDisplay = document.getElementById("TotalCandies")

let candyPerClick = 1
const CandyPerClickDisplay = document.getElementById("CandyPerClick")

let clickUpgrade1Cost = 25;


canUserIncreaseClick()

//when candy button is clicked, increase candy by candy/click number
/**first we add an event listener, which waits for a specifc thing to happen to an element
 and runs a function**/
candyBtn.addEventListener("click", addCandy)
candyBtn.addEventListener("click", canUserIncreaseClick)

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
if (totalCandy >= 1000000) {
        document.body.innerHTML = "You finally paid off your debt to the Candy Mafia, and your family can now live happily ever after! For now..."
        }
    if (totalCandy >= clickUpgrade1Cost) {
        upgclick.classList.remove("too-broke")
        upgclick.classList.add("not-broke")
    } else {
        upgclick.classList.remove("not-broke")
        upgclick.classList.add("too-broke")
    }
}



//buy a click upgrade if we have enough coins. also used Math.trunc to remove pesky decimals
function buyClickUpgrade(){
    if (totalCandy >= clickUpgrade1Cost) {
        totalCandy -= clickUpgrade1Cost
        if (totalCandy===1) {
    TotalCandyDisplay.innerHTML= 1 + " Candy"
    } else {
    TotalCandyDisplay.innerHTML= totalCandy + " Candies"}
    candyPerClick = 2
    CandyPerClickDisplay.innerHTML = "Candies/Click:" + candyPerClick
    clickUpgrade1Cost = Math.round(clickUpgrade1Cost *=1.8)
    upgclick.innerHTML = "Get 2 more candies/click for " + clickUpgrade1Cost + "candies"
    }
    canUserIncreaseClick()
}
