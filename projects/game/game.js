let gameActive = true; //this variable is required. 
                       //to stop the game, set it to false.

//Declare your other global variables here
let currentLocation;
let inventory = [];
let hasKey = false;
let hasPassword = false;
let energy = 0;



//If you need, add any "helper" functions here


//Make one function for each location
function Commons() {
    clear();
    print("\nYou are in commons");
    print("\nWhere do you want to go next? Say one of these choices:" +
        "\n\tGo to the table and talk to Prithvi" +
        "\n\tMain Hallway");
    
    function processInput(input){
        if (input.toLowerCase() === "go to the table and talk to prithvi") {
            Prithvi();
        } else if (input.toLowerCase() === "main hallway") {
            mainHallway();
    } else {
            stayHere();
            waitThenCall(Commons);
        }
    }
    waitForInput(processInput);
}

function Prithvi() {
    clear();
    print("\nYou are talking to Prithvi!");
    print("\nWhat do you want to do? Say one of these choices:" +
        "\n\tAsk about the key" +
        "\n\tGet an energy drink" +
        "\n\tGo back to commons");

    function processInput(input){
        if (input.toLowerCase() == "ask about the key") {
            print("\nPrithvi says: uhh, ion know bro... maybe look around the building?");
        } else if (input.toLowerCase() == "get an energy drink") {
            if (energy == 0) {
                print("\nYou drink the energy drink and feel a surge of energy.");
                energy = 1;
            } else {
                print("\nYou already have an energy drink, you can't drink another one!");
            }
        } else if (input.toLowerCase() == "go back to commons") {
            Commons();
        } else {
            stayHere();
            waitThenCall(Prithvi);
        }
    }
    waitForInput(processInput);
}

function mainHallway() {
    clear();
    print("\nYou are in the main hallway!");
    print("\nWhere do you want to go next? Say one of these choices:" +
        "\n\tGot back to the commons" +
        "\n\tGo to the Library" +
        "\n\tGo to Chris's room");
    
    function processInput(input){
        if (input.toLowerCase() == "go back to the commons") {
            Commons();
        } else if (input.toLowerCase() == "go to the library") {
            Library();
        } else if (input.toLowerCase() == "go to chris's room") {
            ChrisRoom();
        } else {
            stayHere();
            waitThenCall(mainHallway);
        }
    }
    waitForInput(processInput);
}   
function Library() {
    clear();
    print("\nYou are in the library!");
    print("\nWhere do you want to go next? Say one of these choices:" +
        "\n\tGo back to the main hallway" +
        "\n\tSearch for the key");

function processInput(input){
    if (input.toLowerCase() == "go back to the main hallway") {
        mainHallway();
    } else if (input.toLowerCase() == "search for the key") {
        print("\nYou search the library but there is no key to be found.");
    } else {
        stayHere();
        waitThenCall(Library);

        }
    }
}

//finally, make sure you customize this to tell it what should happen at the
//very start. For this simple example, any input will bring you
//to locationA
function start(){
    print("Welcome to my game! Press any key to start");

    function processInput(input){
            Commons();
    }
    waitForInput(processInput);
}