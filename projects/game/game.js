let gameActive = true; 
let inventory = [];
let hasKey = false;
let hasPass = false;
let energy = 0;

function resetGame() {
    inventory = [];
    hasKey = false;
    hasPass = false;
    energy = 0;
    start();
}

function Commons() {
    clear();
    print("\nYou are in the commons.");
    print("\nWhere do you want to go next? Say one of these choices:" +
        "\n\tGo to the table and talk to Prithvi" + 
        "\n\tMain Hallway");
    
    function processInput(input){
        let choice = input.toLowerCase();
        if (choice === "go to the table and talk to prithvi") {
            Prithvi();
        } else if (choice === "main hallway") {
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
        let choice = input.toLowerCase();
        if (choice === "ask about the key") {
            print("\nPrithvi says: 'Uhh, ion know bro... maybe look around the building?'");
            waitThenCall(Prithvi);
        } else if (choice === "get an energy drink") {
            if (energy === 0) {
                print("\nYou drink the energy drink and feel a surge of energy.");
                energy = 1;
            } else {
                print("\nYou already have an energy drink, you can't drink another one!");
            }
            waitThenCall(Prithvi);
        } else if (choice === "go back to commons") {
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
        let choice = input.toLowerCase();
        if (choice === "go back to the commons") {
            Commons();
        } else if (choice === "go to the library") {
            Library(); 
        } else if (choice === "go to chris's room") {
            ChrisRoom();
        } else if (choice === "go to the teachers' lounge") {
            if (hasPass) {
                TeachersLounge();
            } else {
                print("\nYou can't go there. You will get caught skipping!");
                waitThenCall(mainHallway);
            }
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
        let choice = input.toLowerCase();
        if (choice === "go back to the main hallway") {
            mainHallway();
        } else if (choice === "search for the key") {
            print("\nYou search the library but there is no key to be found.");
            waitThenCall(Library);
        } else {
            stayHere();
            waitThenCall(Library);
        }
    }
    waitForInput(processInput);
}

function ChrisRoom() {
    clear();
    print("\nYou came to your first period class, but Chris is in the bathroom.");
    print("\nWhere do you want to go next? Say one of these choices:" +
        "\n\tSearch for the key" +
        "\n\tDo your work");

    function processInput(input){
        let choice = input.toLowerCase();
        if (choice === "search for the key") {
            print("\nYou search Chris's room but there is no key to be found.");
            waitThenCall(ChrisRoom);
        } else if (choice === "do your work") {
            print("\nYou do your work. Chris comes back and gives you a hall pass! You head back to the hall.");
            hasPass = true;
            waitThenCall(mainHallway);
        } else {
            stayHere();
            waitThenCall(ChrisRoom);
        }
    }
    waitForInput(processInput);
}

function TeachersLounge() {
    clear();
    print("\nYou are in the teachers' lounge!");
    print("\nWhere do you want to go next? Say one of these choices:" +
        "\n\tGo back to the main hallway" +
        "\n\tSearch for the key");

    function processInput(input){
        let choice = input.toLowerCase();
        if (choice === "go back to the main hallway") {
            mainHallway();
        } else if (choice === "search for the key") {
            print("\nYou got caught searching the teachers' lounge! Game over.");
            waitThenCall(resetGame);
        } else {
            stayHere();
            waitThenCall(TeachersLounge);
        }
    }
    waitForInput(processInput);
}

function start() {
    clear();
    print("Welcome to my game! Press any button to begin.");

    function processInput(input) {
        Commons(); 
    }
    waitForInput(processInput);
}

start();