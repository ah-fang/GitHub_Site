//items for the array. Set to false until they are picked up
// var K1 = false;
// var K2 = false;
// var K3 = false;
// var H = false;
// var I = false;

// //room booleans. True if they have been visited before
// var storage = false;
// var dining = false;
// var diningRight = false;
// var kitchen = false;
// var freezer = false;

// //actions tracker
// var lightsOn = false;
// var storageSearched = false;
// var kitchenSearched = false;
// var freezerSearched = false;
// var possumGone = false;

class Item {
    constructor(nam) {
        this.name = nam;
    }
};

var Items = [
    Key1 = new Item,
    Key2 = new Item,
    Key3 = new Item,
    Hammer = new Item,
    Iceburgs = new Item
]; 
//array of room names.
var room = ["start", "storage", "dining", "diningRight", "kitchen", "freezer"];

//array of room flavor text
//note: flavor text is stored in this order: darkUnvisited, darkVisited, lightUnvisited, lightVisited.
var starText = "You are in a room. No doubt you achieved something, maybe not to get here but at some point in your life, so congratulations are in order. The lights, however, seem to be out of order. You can't see a thing.";
//exception for storage room: there is no unvisited dark option, since you start the game here.
var stowText = ["Back in the first room. Hmm. Still dark.",
                "You are in a small storage room. There is a door in front of you and one behind.",
                "Back in the storage room. Hey, is that mop new? No, never mind, that was there before."];
var dineText = [ "It's hard to tell, but this room feels larger than the one you were in before. With your hand on the left wall, you know there is a doorway there. To your right is dark empty space.", 
                "You are in what looks like the dining area of a quick-service restaurant. You can see out through the windows that it is dark outside.",
                "Back in the main dining area."];
var dinRText = ["You stub your toe on a chair on the way over. Don't worry, that's very rarely fatal. Anyway, you're now at the edge of the room. Stretching out your hands, you feel cold glass. One of the panes is ridged and uneven.",
                "On the right side, you find more tables and chairs. Nice!\nAlso, you notice one of the windows has a crack in it. It is poorly patched with duct tape.",
                "You return triumphantly to this part of the room. A round of applause does not follow, but you're welcome to imagine it does.\nRecap: Some tables and chairs. Window. Crack."];
var kitText = ["You can't see anything, but you can certainly smell this room. It's vaguely like a room that's been continuously coated in french fry grease for several years. There is a faint shuffling noise deeper into the room.",
                "Back in the stinky room. You can go back or left.",
                "You enter what looks like a kitchen. THere ",
                "l"];
var frezText = [];

//for(var i=0; i<options.length; i++) {
    // if(options[i].innerHTML == 'optionName' || options[i].innerHTML == 'optionName') {
    //     theSelect.removeChild(options[i]);
    //     i--; // options have now less element, then decrease i
    // }
    
//location tracker
var currentRm = room[0];

var options = ["choose an option...", 
                "move forward", 
                "move back", 
                "use an item", 
                "search the room", 
                "try the back door", 
                "go right", 
                "go left", 
                "attack", 
                "examine"];

Key1.description = "A silver key with a fob attached to it. There are three buttons: lock, unlock, and alarm."
Key2.description = "An ordinary bronze key."
Key3.description = "A small silver key, as though for a padlock." 
Hammer.description = "A blocky hammer, flat on one side and spiked on the other. You think it's for tenderizing meat."
Iceburgs.description = "A stack of hamburger patties, frozer into a solid cylinder of beef."

var container = document.createElement("div");
container.id = room[0];
var title = document.createElement("h3");
title.textContent = "Ready to start?";
document.getElementById("start").appendChild(title);
var flavText = document.createElement("p");
flavText.textContent = "Click the button to begin.";
document.getElementById("start").appendChild(flavText);
var s = document.createElement("select");
s.id = "choices";
var select = document.getElementsByClassName("choices");
document.getElementById("start").appendChild(s);


function start() {
    currentRm = "storage"
    title.textContent = "We begin."
    flavText.textContent = "You are in a room. No doubt you achieved something, maybe not to get here but at some point in your life, so congratulations are in order. The lights, however, seem to be out of order. You can't see a thing.";
    //first set of choices
    var opt1 = document.createElement("option");
    opt1.textContent = options[0];
    document.getElementById("choices").appendChild(opt1);
    var opt2 = document.createElement("option");
    opt2.textContent = options[1];
    document.getElementById("choices").appendChild(opt2); //go to dining
    var opt3 = document.createElement("option");
    opt3.textContent = options[2];
    document.getElementById("choices").appendChild(opt3);
    var opt5 = document.createElement("option");
    opt5.textContent = options[4];
    document.getElementById("choices").appendChild(opt5);
}

function moveF() {
    if (currentRm === "storage") {
        currentRm = "dining"; 
        if(dining === false) {
            title.textContent = "We begin."
            flavText.textContent = "flavorTextDF.";
            //error: title and flavor text is not changing. Creating and appending new elements works. 
            console.log(currentRm);       
        } 
        else {
            title.textContent = "Back to dining.";
            flavText.textContent = "flavorTextDT.";
        }   
        //where to go from here...   
            var opt2 = document.createElement("option");
            opt2.textContent = options[6]; //to diningRight
            document.getElementById("choices").appendChild(opt2);
            var opt3 = document.createElement("option");
            opt3.textContent = options[7]; //to kitchen
            document.getElementById("choices").appendChild(opt3);   
    }
    if (currentRm === "kitchen") {
        currentRm = "freezer";
        //description of freezer
        if (freezer === false) {
            title.textContent = "Title.";
            flavText.textContent = "flavorTextFF.";
            freezer = true;
        }
        else {
            title.textContent = "ReturnTitle.";
            flavText.textContent = "flavorTextFT.";
        }
        //options from freezer
        var opt1 = document.createElement("option");
        opt1.textContent = options[0];
        document.getElementById("choices").appendChild(opt1);    
        var opt2 = document.createElement("option");
        opt2.textContent = options[2]; //to kitchen
        document.getElementById("choices").appendChild(opt2);
        if (freezerSearched === false) {
            var opt3 = document.createElement("option");
            opt3.textContent = options[4]; 
            document.getElementById("choices").appendChild(opt3); 
        }                    
    }
}

function moveB() {
    //things
}

function useItem() {
    title.textContent = "Use an Item!"; 
    document.getElementById("storage").appendChild(title);
    flavText.textContent = "What item will you use?";
    document.getElementById("storage").appendChild(flavText);
    if (currentRm === "storage") {
        if (K1 === true) {
            var opt1 = document.createElement("option");
            opt1.textContent = Items[0];        
            document.getElementById("choices").appendChild(opt1);   
        }
        if (K2 === true) {
            var opt2 = document.createElement("option");
            opt2.textContent = Items[1];
            document.getElementById("choices").appendChild(opt2);
        }
        if (K3 === true) {
            var opt3 = document.createElement("option");
            opt3.textContent = Items[2];
            document.getElementById("choices").appendChild(opt3);  
        }   
    }
    if (currentRm === "kitchen") {
        if (K1 === true) {
            var opt1 = document.createElement("option");
            opt1.textContent = Items[0];        
            document.getElementById("choices").appendChild(opt1);   
        }
        if (K2 === true) {
            var opt2 = document.createElement("option");
            opt2.textContent = Items[1];
            document.getElementById("choices").appendChild(opt2);
        }
        if (K3 === true) {
            var opt3 = document.createElement("option");
            opt3.textContent = Items[2];
            document.getElementById("choices").appendChild(opt3);  
        } 
        if (H === true) {
            var opt4 = document.createElement("option");
            opt4.textContent = Items[3];
            document.getElementById("choices").appendChild(opt4);  
        }
    }
}

// ITEM FUNCTIONS
function useKey1() {
    //use key 1
}
function useKey2() {
    //use key 2
}
function useKey3() {
    //use key 3
}
function useH() {
    //use hammer
}
function useI() {
    //use iceburgs
}

function search() {
    if (currentRm === "storage") {
        K1 = true;
        lightsOn = true;
        storageSearched = true;
        // document.getElementsByTagName("h3").textContent = "You search the room.";
        flavText.textContent = "You stumble around until you find a wall. Feeling along it, you discover and flip a switch. The lights click on, revealing a storage room. You also notice a key on the floor and pick it up.";
        var gotItem = document.createElement("p");
        gotItem.textContent = "Acquired Item: Key1";
        document.getElementById("storage").appendChild(gotItem); //was treated as a local variable when changed without initializing here
        console.log(K1);
    }
    if (currentRm === "kitchen") {
        K2 = true;
        H = true;
        kitchenSearched = true;
        title.textContent = "You search the kitchen.";
        flavText.textContent = "You hunt around the room. On one counter, you pick up a hammer-like object. Seems like it could come in handy. You also see a small bronze key on the counter and snap it up.";
        var gotItem = document.createElement("p");
        gotItem.textContent = "Acquired Item: Hammer";
        document.getElementById("storage").appendChild(gotItem); 
        var gotItem2 = document.createElement("p");
        gotItem.textContent = "Acquired Item: Key2";
        document.getElementById("storage").appendChild(gotItem2); 
    }
    if (currentRm === "freezer") {
        K3 = true;
        freezerSearched = true;
        title.textContent = "You sniff around the frozen room.";
        flavText.textContent = "It's mostly stacks of frozen meat and bags of french fries. As you turn to leave, you notice something hanging on a hook by the door: a key!.";
        var gotItem = document.createElement("p");
        gotItem.textContent = "Acquired Item: KEY 3";
        document.getElementById("freezer").appendChild(gotItem); 
    }
}

function backDr() {
    if (K1 === true || K2 === true || K3 === true) {
        // any keys = useitem or do other storage options
    }
    //check for any keys
    // no keys = locked, no other actions
    
    //use K1 or K2 = does not work
    //if K3 used, direct to win condition
}

function moveR() {
    //go to diningRight
}

function moveL() {
    //go to kitchen
}

function attack() {
    //2 weapons: H or I, each exclusive to Light or Dark path
    //if in diningRight and use either, direct to win condition
    //if in kitchen, use against possum (Light Path only)
}

function examine() {
    //change description to soda machine
    //if any keys = true, prompt useItem
    //if key 2 is used, prompt win condition "secretending"
}

////////////////////////////////////////////////////////////////////////////

console.log(currentRm);
//the button
var b = document.createElement("button");
b.class = "go-btn";
b.textContent = "Go";
document.getElementById("start").appendChild(b)
b.addEventListener("click", () => {
    //takes option selected and runs function
    if (s.value === "move forward") {
        moveF();
    }   
    if (s.value === "move back") {
        moveB();
    }
    if (s.value === "use an item") {
        useItem();
    }
    if (s.value === "use Key1") {
        useKey1();
    }
    if (s.value === "use Key2") {
        useKey2();
    }
    if (s.value === "use Key3") {
        useKey3();
    }
    if (s.value === "use Hammer") {
        useH();
    }
    if (s.value === "use Iceburgs") {
        useI();
    }
    if (s.value === "search the room"){
        search();
    }
    if (s.value === "try the back door") {
        backDr();
    }
    if (s.value === "go right") {
        moveR();
    }
    if (s.value === "go left") {
        moveL();
    }
    if (s.value === "attack") {
        attack();
    }
    if (s.value === "examine") {
        examine();
    }
    else {
        start();
    }
    console.log("You have clicked the button");   
    });






/////////////////////////////////////////////////////////////////





if (currentRm === "storage") {
    if(storage === false) {
        title.textContent = "We begin...";
        document.getElementById("storage").appendChild(title);
        flavText.textContent = "You are in a room. No doubt you achieved something, maybe not to get here but at some point in your life, so congratulations are in order. The lights, however, seem to be out of order. You can't see a thing.";
        document.getElementById("storage").appendChild(flavText);
            } 
    else {
        title.textContent = "Back at the start.";
        document.getElementById("storage").appendChild(title);
        flavText.textContent = "You're in the first room again. Home sweet home. You should put up a cross-stitch.";
        document.getElementById("storage").appendChild(flavText);
    }   
    //where to go from here...
    if (K1 === true || K2 === true || K3 === true) {
        var opt1 = document.createElement("option");
        opt1.textContent = options[0];
        document.getElementById("choices").appendChild(opt1);
        var opt2 = document.createElement("option");
        opt2.textContent = options[1];
        document.getElementById("choices").appendChild(opt2);
        var opt3 = document.createElement("option");
        opt3.textContent = options[2];
        document.getElementById("choices").appendChild(opt3);
        var opt4 = document.createElement("option");
        opt4.textContent = options[3];
        document.getElementById("choices").appendChild(opt4);
        if (storageSearched === false){
        var opt5 = document.createElement("option");
        opt5.textContent = options[4];
        document.getElementById("choices").appendChild(opt5);
    }
        var opt6 = document.createElement("option");
        opt6.textContent = options[5];
        document.getElementById("choices").appendChild(opt6);       
    }
    else {
        var opt1 = document.createElement("option");
        opt1.textContent = options[0];
        document.getElementById("choices").appendChild(opt1);
        var opt2 = document.createElement("option");
        opt2.textContent = options[1];
        document.getElementById("choices").appendChild(opt2); //go to dining
        if (storageSearched === false){
            var opt5 = document.createElement("option");
            opt5.textContent = options[4];
            document.getElementById("choices").appendChild(opt5); //search the room
        }
    }
}

if (currentRm === "dining") {
    if(dining === false) {
        title.textContent = "Title.";
        document.getElementById("dining").appendChild(title);
        flavText.textContent = "flavorTextDF.";
        document.getElementById("dining").appendChild(flavText);
            } 
    else {
        title.textContent = "Back to dining.";
        document.getElementById("storage").appendChild(title);
        flavText.textContent = "flavorTextDT.";
        document.getElementById("storage").appendChild(flavText);
    }   
    //where to go from here...
        var opt1 = document.createElement("option");
        opt1.textContent = options[0];
        document.getElementById("choices").appendChild(opt1);    
        var opt2 = document.createElement("option");
        opt2.textContent = options[6]; //to diningRight
        document.getElementById("choices").appendChild(opt2);
        var opt3 = document.createElement("option");
        opt3.textContent = options[7]; //to kitchen
        document.getElementById("choices").appendChild(opt3);        
}

if (currentRm === "diningRight") {
    if (lightsOn === false) {
        title.textContent = "DarkRouteDining.";
        document.getElementById("diningRight").appendChild(title);
        flavText.textContent = "flavorTextDRDR."; 
        document.getElementById("diningRight").appendChild(flavText);
        if (I === true) {
            var opt1 = document.createElement("option");
            opt1.textContent = options[0];
            document.getElementById("choices").appendChild(opt1);    
            var opt2 = document.createElement("option");
            opt2.textContent = options[2]; //back to dining
            document.getElementById("choices").appendChild(opt2);
            var opt3 = document.createElement("option");
            opt3.textContent = options[8]; //more flavortext
            document.getElementById("choices").appendChild(opt3);
        }
        else {
            var opt1 = document.createElement("option");
            opt1.textContent = options[0];
            document.getElementById("choices").appendChild(opt1);    
            var opt2 = document.createElement("option");
            opt2.textContent = options[2]; //back to dining
            document.getElementById("choices").appendChild(opt2);
            var opt3 = document.createElement("option");
        }
    }
    if(diningRight === false) {
        title.textContent = "Title.";
        document.getElementById("diningRight").appendChild(title);
        flavText.textContent = "flavorTextDRF.";
        document.getElementById("diningRight").appendChild(flavText);
            } 
    else {
        title.textContent = "Title.";
        document.getElementById("storage").appendChild(title);
        flavText.textContent = "flavorTextDT.";
        document.getElementById("storage").appendChild(flavText);
    }   
    //where to go from here...
        var opt1 = document.createElement("option");
        opt1.textContent = options[0];
        document.getElementById("choices").appendChild(opt1);    
        var opt2 = document.createElement("option");
        opt2.textContent = options[8]; //more flavortext + check for H
        document.getElementById("choices").appendChild(opt2);
        var opt3 = document.createElement("option");
        opt3.textContent = options[2]; //back to dining
        document.getElementById("choices").appendChild(opt3);        
}

if (currentRm === "kitchen") {
    if(kitchen === false) {
        title.textContent = "Title.";
        document.getElementById("kitchen").appendChild(title);
        flavText.textContent = "flavTextK";
        document.getElementById("kitchen").appendChild(flavText);
        } 
    else {
        title.textContent = "Kitchen again.";
        document.getElementById("kitchen").appendChild(title);
        flavText.textContent = "The prodigal fry returns.";
        document.getElementById("kitchen").appendChild(flavText);
    }   
    //where to go from here...        
    if (kitchenSearched === false){
        var opt1 = document.createElement("option");
        opt1.textContent = options[0];
        document.getElementById("choices").appendChild(opt1);
        var opt2 = document.createElement("option");
        opt2.textContent = options[1];
        document.getElementById("choices").appendChild(opt2);
        var opt3 = document.createElement("option");
        opt3.textContent = options[2];
        document.getElementById("choices").appendChild(opt3);
        var opt4 = document.createElement("option");
        opt4.textContent = options[3];
        document.getElementById("choices").appendChild(opt4);
        var opt5 = document.createElement("option");
        opt5.textContent = options[4];
        document.getElementById("choices").appendChild(opt5);
        }
    else {
        var opt1 = document.createElement("option");
        opt1.textContent = options[0];
        document.getElementById("choices").appendChild(opt1);
        var opt2 = document.createElement("option");
        opt2.textContent = options[1];
        document.getElementById("choices").appendChild(opt2);
        var opt3 = document.createElement("option");
        opt3.textContent = options[2];
        document.getElementById("choices").appendChild(opt3);
        var opt4 = document.createElement("option");
        opt4.textContent = options[3];
        document.getElementById("choices").appendChild(opt4);    
    }
    
}

if (currentRm === "freezer") {
    if(freezer === false) {
        title.textContent = "Title.";
        document.getElementById("freezer").appendChild(title);
        flavText.textContent = "flavTextF";
        document.getElementById("freezer").appendChild(flavText);
            } 
    else {
        title.textContent = "Brr.";
        document.getElementById("freezer").appendChild(title);
        flavText.textContent = "Back in the Arctic.";
        document.getElementById("freezer").appendChild(flavText);
    }   
    //where to go from here...        
        if (freezerSearched === false){
            var opt1 = document.createElement("option");
            opt1.textContent = options[0];
            document.getElementById("choices").appendChild(opt1);
            var opt2 = document.createElement("option");
            opt2.textContent = options[2]; //back to kitchen
            document.getElementById("choices").appendChild(opt2);
            var opt3 = document.createElement("option");
            opt3.textContent = options[4]; //will get Key3
            document.getElementById("choices").appendChild(opt3);
        }
        else {
            var opt1 = document.createElement("option");
            opt1.textContent = options[0];
            document.getElementById("choices").appendChild(opt1);
            var opt2 = document.createElement("option");
            opt2.textContent = options[2];
            document.getElementById("choices").appendChild(opt2);        
    }
    
}

////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////    
//~some choices~
//when you choose to search the storage room
if (currentRm === "storage" && storageSearched === false) {
    K1 = true;
    lightsOn = true;
    storageSearched = true;
    //necessary? If storageSearched === true, you won't get the option to "search the room"
}
//when you choose to search the kitchen
if (currentRm === "kitchen" && kitchenSearched === false) {
    H = true;
    K2 = true;
    kitchenSearched = true;
}
//when you choose to search the freezer
if (currentRm === "freezer" && freezerSearched === false) {
    K3 = true;
    freezerSearched = true;
}
//finding the Iceburgs on the Dark route
if (currentRm === "freezer" && lightsOn === false) {
    I = true; 
}