//items
var K1 = false;
var K2 = false;
var K3 = false;
var H = false;
var I = false;

//rooms visited
var storageV = false;
var diningV = false;
var diningRightV = false;
var kitchenV = false;
var freezerV = false;

//other conditions
var lightsOn = false;
var storageSearched = false;
var kitchenSearched = false;
var freezerSearched = false;
var possumGone = false;

//then arrays
var rooms = ["start", "storage", "dining", "diningRight", "kitchen", "freezer"] //will be set as div id
var items = ["Key #1", "Key #2", "Key #3", "Hammer", "Iceburgs"];
var options = ["choose an option...", 
                "move forward", 
                "move backward", 
                "use an item", 
                "search the room", 
                "try the back door", 
                "move right", 
                "move left", 
                "attack", 
                "examine", 
                "let's go", 
                "close the door", 
                "leave it open"];

var currentRm = rooms[0];

//the only div
var newDiv = document.createElement("div");
newDiv.id = currentRm;
document.getElementById("js-version").appendChild(newDiv);
var title = document.createElement("h3");
title.textContent = "hello";
document.getElementById("start").appendChild(title);
var flavText = document.createTextNode("Welcome to the Choose Your Own Adventure game! When you're ready to start, select 'let's go' and hit the Go button.");
newDiv.appendChild(flavText);  
var s = document.createElement("select");
s.id = "choices";
newDiv.appendChild(s); 
var goBtn = document.createElement("button");
goBtn.textContent = "Go";
newDiv.appendChild(goBtn);  

//section that only appears with text when items are obtained. otherwise empty
var itemSec = document.createElement("section");
itemSec.id = "itemSec";
document.getElementById("start").appendChild(itemSec); 
var itemTitle = document.createElement("h4");
itemTitle.textContent = " ";
document.getElementById("itemSec").appendChild(itemTitle);
var itemText = document.createElement("p");
itemText.textContent = " ";
document.getElementById("itemSec").appendChild(itemText);

//All options exist but are not appended to select until applicable
var opt0 = document.createElement("option");
opt0.textContent = options[0];
document.getElementById("choices").appendChild(opt0);//this one always applicable ("choose an option...")
var opt1 = document.createElement("option");
opt1.textContent = options[1];
var opt2 = document.createElement("option");
opt2.textContent = options[2];
var opt3 = document.createElement("option");
opt3.textContent = options[3];
var opt4 = document.createElement("option");
opt4.textContent = options[4];
var opt5 = document.createElement("option");
opt5.textContent = options[5];
var opt6 = document.createElement("option");
opt6.textContent = options[6];
var opt7 = document.createElement("option");
opt7.textContent = options[7];
var opt8 = document.createElement("option");
opt8.textContent = options[8];
var opt9 = document.createElement("option");
opt9.textContent = options[9];
var opt10 = document.createElement("option");
opt10.textContent = options[10];
document.getElementById("choices").appendChild(opt10); //"let's go" appended to start game
var opt11 = document.createElement("option");
opt11.textContent = options[11];
var opt12 = document.createElement("option"); 
opt12.textContent = options[12];

//options for useItem screen
var key1 = document.createElement("option");
key1.textContent = items[0];
var key2 = document.createElement("option");
key2.textContent = items[1];
var key3 = document.createElement("option");
key3.textContent = items[2];
var hammer = document.createElement("option");
H.textContent = items[3];
var iceBurgs = document.createElement("option");
iceBurgs.textContent = items[4];

//function to clear the options from select box except first "choose an option..."
function clearDiv() {
    while (s.options.length > 1) {
        s.remove(1);
    }
    itemTitle.textContent = " ";
    itemText.textContent = " ";
}

//functions attached to options 
function start() {
    currentRm = rooms[1];
    newDiv.id = "storage";
    title.textContent = "Start"; 
    flavText.textContent = "You are in a room. No doubt you achieved something, maybe not to get here but at some point in your life, so congratulations are in order. The lights, however, seem to be out of order. You can't see a thing.";
    document.getElementById("choices").appendChild(opt1); 
    document.getElementById("choices").appendChild(opt2);
    document.getElementById("choices").appendChild(opt4);
}

function moveF() {
    if (currentRm === rooms[1]) {
        currentRm = rooms[2];
        newDiv.id = currentRm; 
        document.getElementById("choices").appendChild(opt6);
        document.getElementById("choices").appendChild(opt7);
        document.getElementById("choices").appendChild(opt2);
        if (!lightsOn) {
            title.textContent = "You enter the next room.";
            flavText.textContent = "It's hard to tell, but this room feels larger than the one you were in before. With your hand on the left wall, you know there is a doorway there. To your right is dark empty space.";                     
        }
        else {            
            title.textContent = "Dining Room";
            flavText.textContent = "You enter a larger room. There is a doorway to your left, and more space off to the right.";
            opt1.textContent = "do something different";
        }      
    }
    //add the conditionals for when diningV === true
    if (currentRm === rooms[4]) {
        currentRm = rooms[5];
        newDiv.id = currentRm; 
        if (!lightsOn) {
            title.textContent = "Freezer Dark.";
            flavText.textContent = "Freezer DarkPath flavor text.";
            //grant Iceburgs automatically
        }
        else  {
            title.textContent = "Freezer Light";
            flavText.textContent = "Freezer LightPath flavor text.";
        }     
    }
}

function moveB() {
    if (currentRm === rooms[5]) {
        currentRm = rooms[4];
        newDiv.id = currentRm; 
        document.getElementById("choices").appendChild(opt2);
        if (!lightsOn) {
            title.textContent = "Kitchen Dark."
            flavText.textContent = "Kitchen Darkpath flavor text."
        }
        else {
            title.textContent = "Kitchen Light";
            flavText.textContent = "Kitchen LightPath flavor text.";
        }
    }
    else if (currentRm === rooms[4]) {
        currentRm = rooms[2];
        newDiv.id = currentRm; 
        document.getElementById("choices").appendChild(opt2);
        document.getElementById("choices").appendChild(opt6);
        document.getElementById("choices").appendChild(opt7);
        if (!lightsOn) {
            title.textContent = "Dining Dark."
            flavText.textContent = "Dining Darkpath flavor text."
        }
        else {
            title.textContent = "Dining Light";
            flavText.textContent = "Dining LightPath flavor text.";
        }
    }

    else if (currentRm === rooms[3]) {
        currentRm = rooms[2];
        newDiv.id = currentRm; 
        document.getElementById("choices").appendChild(opt2);
        document.getElementById("choices").appendChild(opt6);
        document.getElementById("choices").appendChild(opt7);
        if (!lightsOn) {
            title.textContent = "Dining Dark."
            flavText.textContent = "Dining Darkpath flavor text."
        }
        else {
            title.textContent = "Dining Light";
            flavText.textContent = "Dining LightPath flavor text.";
        }
    }
    else if (currentRm === rooms[2]) {
        currentRm = rooms[1];
        newDiv.id = currentRm; 
        document.getElementById("choices").appendChild(opt1);
        if (!lightsOn) {
            title.textContent = "Storage Dark."
            flavText.textContent = "Storage Darkpath flavor text."
        }
        else {
            title.textContent = "Storage Light";
            flavText.textContent = "storage LightPath flavor text.";
            document.getElementById("choices").appendChild(opt5);
        }
        if (!storageSearched) {
            document.getElementById("choices").appendChild(opt4);
        }
    }
    
    else if (currentRm === rooms[1]) {
        if (!lightsOn) {
            title.textContent = "Storage Dark."
            flavText.textContent = "Storage Darkpath flavor text."
        }
        else {
            title.textContent = "Storage Light";
            flavText.textContent = "storage LightPath flavor text.";
            document.getElementById("choices").appendChild(opt5);
        }
        if (!storageSearched) {
            document.getElementById("choices").appendChild(opt4);
        }
    }
    else {
        console.log("else text");
    }
}

function useItem() {
    if(K1) {
         document.getElementById("choices").appendChild(key1);
    }
    if(K2) {
        document.getElementById("choices").appendChild(key2);
    }
    if(K3) {
        document.getElementById("choices").appendChild(key3);
    }
    if(H) {
        document.getElementById("choices").appendChild(hammer);
    }
    if(I) {
        document.getElementById("choices").appendChild(iceBurgs);
    }
}

function search() {
    if (currentRm === rooms[1]) {
        title.textContent = "You search the room.";
        flavText.textContent = "You feel around blindly until you find a wall. Searching along it reveals a switch. You throw the switch and the lights flick on, revealing a small storage room. There is a door in front of you and a door behind. There is also a key on the floor, which you pick up.";
        K1 = true;
        storageSearched = true;
        lightsOn = true;
        console.log("First key: " + K1)
        //fill secret div with item infotext
        itemTitle.textContent = "Item Discovered: Key 1"
        itemText.textContent = "A small key with a fob. It has three buttons."
        document.getElementById("choices").appendChild(opt1);
        document.getElementById("choices").appendChild(opt5);
    }
    if (currentRm === rooms[4]) {
        title.textContent = "kitchen searched";
        flavText.textContent = "kitchen searched flavor text.";
        K2 = true;
        H = true;
        kitchenSearched = true;
        //fill secret div with item infotext
    }
    if (currentRm === rooms[5]) {
        title.textContent = "freezer searched";
        flavText.textContent = "freezer searched flavor text.";
        K3 = true;
        storageSearched = true;
        //fill secret div with item infotext
    }
}

function backDr() {
    title.textContent = "storage backdoor";
    flavText.textContent = "The back door is locked.";
    if (K1 === true || K2 === true || K3 === true) {
        //give option to useItem
        document.getElementById("choices").appendChild(opt3);
        document.getElementById("choices").appendChild(opt5);
    }
    else {
        //only option is to leave the room "Go forward"
        document.getElementById("choices").appendChild(opt5);
    }
}

function moveR() {
    currentRm = rooms[3];
    newDiv.id = currentRm; 
    document.getElementById("choices").appendChild(opt8);
    document.getElementById("choices").appendChild(opt2);
    if (!lightsOn) {
        title.textContent = "DiningRight Dark";
        flavText.textContent = "DiningRight Dark flavor text.";
    }
    else {
        title.textContent = "DiningRight Light";
        flavText.textContent = "DiningRight light flavor text.";
    }

}

function moveL() { 
    if (currentRm === rooms[2]) {
        currentRm = rooms[4];
        newDiv.id = currentRm;
        document.getElementById("choices").appendChild(opt2);
        document.getElementById("choices").appendChild(opt7); 
        if (!lightsOn) {
            title.textContent = "kitchen Dark";
            flavText.textContent = "kitchen dark flavor text.";
        }
        else {
            title.textContent = "Kitchen Light";
            flavText.textContent = "Kitchen light flavor text.";
            document.getElementById("choices").appendChild(opt4);
        }//add check for kitchenV boolean   
    }
    else if (currentRm === rooms[4]) {
        currentRm = rooms[5];
        newDiv.id = currentRm; 
        document.getElementById("choices").appendChild(opt2);
        document.getElementById("choices").appendChild(opt11);
        document.getElementById("choices").appendChild(opt12);        
        if (!lightsOn) {
            title.textContent = "freezer Dark";
            flavText.textContent = "freezer dark flavor text.";
            //add options for leave door open or closed
        }
        else {
            title.textContent = "freezer Light";
            flavText.textContent = "freezer light flavor text.";
            document.getElementById("choices").appendChild(opt4);
        }//add check for kitchenV boolean   
    }
    else {
        currentRm = rooms[2];
        newDiv.id = currentRm; 
        document.getElementById("choices").appendChild(opt6);
        document.getElementById("choices").appendChild(opt2);
        if (!lightsOn) {
            title.textContent = "Dining Dark";
            flavText.textContent = "Dining dark flavor text.";
        }
        else {
            title.textContent = "Dining Light";
            flavText.textContent = "Dining light flavor text.";
        }//add check for kitchenV boolean   
    }
}

function attack() {
    if (currentRm === "kitchen") {
        possumGone = true;
        title.textContent = "You fight the possum.";
        flavText.textContent = "Possum fight description.";
    }
    if (currentRm === "diningRight") {
        title.textContent = "You attack the window with your bare hands."
        flavText.textContent = "This hurts your hands. The window seems unaffected."
        document.getElementById("choices").appendChild(opt2);
        if (K1 || K2 || K3 || H || I) {
            document.getElementById("choices").appendChild(opt3);
        }
        // add win condition text
    }
}

function examine() {
    //thing
    if (!possumGone) {
        title.textContent = "Uh oh.";
        flavText.textContent = "You've attracted its attention."; 
        //give option to move forward, back, or use item
    }
}

function useK1() {
    title.textContent = "You try the first key.";
    flavText.textContent = "It has no effect.";
//add room conditionals
    document.getElementById("choices").appendChild(opt2);
}

function useK2() {
    if (currentRm === "storage") {
        title.textContent = "You try the second key.";
        flavText.textContent = "It has no effect.";
    }
    if (currentRm === "kitchen") {
        title.textContent = "You try the second key.";
        flavText.textContent = "It slots into the padlock on the soda machine. Turning it pops the lock open. The soda machine can now be opened.";
    }
}

function useK3() {
    if (currentRm === "storage") {
        title.textContent = "You try the third key.";
        flavText.textContent = "It slots into the lock, and the handle turns. You step through and find yourself outside.";
        //add some win text
    }
    if (currentRm === "kitchen") {
        title.textContent = "You try the third key.";
        flavText.textContent = "It has no effect.";
    }
}

function useH() {
    if (currentRm === "storage") {
        title.textContent = ".";
        flavText.textContent = ".";
    }
    if (currentRm === "kitchen") {
        title.textContent = ".";
        flavText.textContent = ".";
    }
}

function useI() {
    if (currentRm === "diningRight") {
        title.textContent = "You swing the Iced Bergs at the window.";
        flavText.textContent = ".";
    }
    else {
        title.textContent = "You swing the Iced Bergs around.";
        flavText.textContent = "It doesn't seem to help anything. At least you tried.";
        document.getElementById("choices").appendChild(opt2);
    }
}
// else {
//     title.textContent = "You attack the window with the Hammer.";
//     flavText.textContent = "WindowBreak.";
// }
function closeDoor() {
    title.textContent = "BANG!";
    flavText.textContent = "LockedIn Ending. Game Over. Select Let's Go to restart.";
    document.getElementById("choices").appendChild(opt10);
}

function doorOpen() {
    title.textContent = "You leave the door open.";
    flavText.textContent = "Some of the cold gets out, but otherwise nothing happens.";
    document.getElementById("choices").appendChild(opt2);
    if(lightsOn) {
        document.getElementById("choices").appendChild(opt4);
    }
}
//the Go button's destinations 
goBtn.addEventListener("click", () => {
    if (s.value === options[1]) {
        clearDiv();
        moveF();
        console.log("I moved forward");
    }
    if (s.value === options[2]) {
        clearDiv();
        moveB();
        console.log("I moved back");
    }
    if (s.value === options[3]) {
        useItem();
        //no ClearDiv here
        console.log("Let's use an item, shall we?");
    }
    if (s.value === options[4]) {
        clearDiv();
        search();
        console.log("I cased the place");
    }
    if (s.value === options[5]) {
        clearDiv();
        backDr();
        console.log("I'm checking in the back");
    }
    if (s.value === options[6]) {
        clearDiv();
        moveR();
        console.log("I moved right");
    }
    if (s.value === options[7]) {
        clearDiv();
        moveL();
        console.log("I moved left");
    }
    if (s.value === options[8]) {
        clearDiv();
        attack();
        console.log("ATTACK");
    }
    if (s.value === options[9]) {
        clearDiv();
        examine();
        console.log("I got a closer look");
    }
    if (s.value === options[10]) {
        clearDiv();
        start();
        console.log("I ran the start function");
    }
    if (s.value === options[11]) {
        clearDiv();
        closeDoor();
        console.log("I made a mistake");
    }
    if (s.value === options[12]) {
        clearDiv();
        doorOpen();
        console.log("I like the breeze");
    }
    if (s.value === items[0]) {
        clearDiv();
        useK1();
        console.log("I tried the first key");
    }
    if (s.value === items[1]) {
        clearDiv();
        useK2();
        console.log("I tried the second key");
    }
    if (s.value === items[2]) {
        clearDiv();
        useK3();
        console.log("I tried the third key");
    }
    console.log(currentRm);
});