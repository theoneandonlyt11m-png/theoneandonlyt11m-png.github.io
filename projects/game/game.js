let gameActive = true; //this variable is required. 
                       //to stop the game, set it to false.

//Declare your other global variables here
let currentLocation;
let inventory = [];
let hasKey = false;
let hasPass = false;
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
        if (input.toLowerCase() == "go to the table and talk to prithvi") {
            Prithvi();
        } else if (input.toLowerCase() == "main hallway") {
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
        "\n\tGo back to the commons" +
        "\n\tGo to the Library" +
        "\n\tGo to Chris's room" +
        "\n\tGo to the teachers' lounge");
    
    function processInput(input){
        if (input.toLowerCase() == "go back to the commons") {
            Commons();
        } else if (input.toLowerCase() == "go to the library" && hasPass== false) {
            Library(); 
        } else if (input.toLowerCase() == "go to chris's room") {
            ChrisRoom();
        } else if (input.toLowerCase() == "go to the teachers' lounge" && hasPass == true) {
            TeachersLounge();
        } else {
            print("\nYou can't go there. You will get caught skipping!");
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
        }
    }
}
function ChrisRoom() {
    clear();
    print("\nYou came to your first period class, but Chris is in the bathroom");
    print("\nWhere do you want to go next? Say one of these choices:" +
        "\n\tSearch for the key" +
        "\n\tDo your work");

function processInput(input){
    if (input.toLowerCase() == "search for the key") {
        print("\nYou search Chris's room but there is no key to be found.");
    } else if (input.toLowerCase() == "do your work") {
        print("\nYou do your work, Chris comes back to the classroom and gives he you a hall pass. You leave the class.");
        hasPass = true;
        mainHallway();
    } else {
        stayHere();
        }
    }
}

function TeachersLauge() {
    clear();
    print("\nYou are in the teachers' lounge!");
    print("\nWhere do you want to go next? Say one of these choices:" +
        "\n\tGo back to the main hallway" +
        "\n\tSearch for the key");

function processInput(input){
    if (input.toLowerCase() == "go back to the main hallway") {
        mainHallway();
    } else if (input.toLowerCase() == "search for the key") {
        print("\nYou got caught searching the teachers' lounge! Game over.");
        start();
        energy = 0;
        hasPass = false;
        hasKey = false;
    } else {
        stayHere();
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
}