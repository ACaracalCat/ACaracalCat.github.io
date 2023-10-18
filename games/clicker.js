var clicks = 0
var autoclicks = 0
var clicksperbtnclick = 1
var clicksperbtnclickprice = 50
var autoclickerprice = 30

function clickbutton() {
    clicks = clicks + clicksperbtnclick
    document.getElementById("ScoreCounter").innerText = "Clicks: " + clicks
}
function upgradeclicksperbtnclick() {
    if(clicks < clicksperbtnclickprice) {
        var clicksNeeded = clicksperbtnclickprice - clicks
        alert("You need " + clicksNeeded + " more clicks to buy this!")
    } else {
        clicksperbtnclick = clicksperbtnclick + 1
        clicks = clicks - clicksperbtnclickprice
        clicksperbtnclickprice = clicksperbtnclickprice * 2
        document.getElementById("ScoreCounter").innerText = "Clicks: " + clicks
        document.getElementById("UpgradeClicksPerBtnClickBtn").innerText = "+1 Click per button click (Cost: "+ clicksperbtnclickprice +" clicks)"
        alert("You bought this upgrade successfully!")
    }
}
function upgradeautoclicker() {
    if(clicks < autoclickerprice) {
        var clicksNeeded = autoclickerprice - clicks
        alert("You need " + clicksNeeded + " more clicks to buy this!")
    } else {
        autoclicks = autoclicks + 1
        clicks = clicks - autoclickerprice
        autoclickerprice = autoclickerprice * 2
        document.getElementById("ScoreCounter").innerText = "Clicks: " + clicks
        document.getElementById("UpgradeAutoClicker").innerText = "+1 Auto Clicker (Cost: "+ autoclickerprice +" clicks)"
        alert("You bought this upgrade successfully!")
    }
}

function autoclick() {
    clicks = clicks + autoclicks;
    document.getElementById("ScoreCounter").innerText = "Clicks: " + clicks;
}

setInterval(autoclick, 1000);
