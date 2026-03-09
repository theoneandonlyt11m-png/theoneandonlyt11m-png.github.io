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
        if (input.toLowerCase() === "ask about the key") {
            if (hasKey) {
                print("\nPrithvi says: Ehh, I don't know anything about it... maybe search the building?");
            } 
        } else if (input.toLowerCase() === "get an energy drink") {
            energy += 10;
            print("\nYou feel more energetic!");
        } else if (input.toLowerCase() === "go back to commons") {
            Commons();
        }
    }
    waitForInput(processInput);
}
               
    waitForInput(processInput);

function mainHallway() {
    clear();
    print("\nYou are in the main hallway!");
    print("\nWhere do you want to go next? Say one of these choices:" +
        "\n\tlocationA");
    
    function processInput(input){
        if (input.toLowerCase() === "locationa") {
            locationA();
        } else {
            stayHere();
            waitThenCall(locationB);
        }
    }
    waitForInput(processInput);
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