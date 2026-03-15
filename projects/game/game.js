let gameActive = true; 
let hasKey = false;
let hasPass = false;
let energy = 0;
let classEnd = false;
let hasPaperclip = false;

function resetGame() {
    hasKey = false;
    hasPass = false;
    energy = 0;
    classEnd = false;
    hasPaperclip = false;
    start();
}

function Commons() {
    clear();
    print("\nYou are in the commons.");
    print("\nWhere do you want to go next? Say one of these choices:" +
        "\n\tGo to the table and talk to Prithvi" + 
        "\n\tMain Hallway" +
        "\n\tGo to the door");
    
    function processInput(input){
        let choice = input.toLowerCase();
        if (choice == "go to the table and talk to prithvi" && hasKey == false) {
            Prithvi();
        } else if (choice == "go to the table and talk to prithvi" && hasKey == true) {
            print("\nNevermind, he isn't there anymore.");
            waitThenCall(Commons);
        }
        if (choice == "main hallway") {
            mainHallway();
        } else if (choice == "go to the door" && hasKey == true) {
            print("\nYou use the key to open the door and escape! You win!");
            waitThenCall(resetGame);
        } else if (choice == "go to the door" && hasKey == false) {
            print("\nThe door is locked!");
            waitThenCall(Commons);
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
        "\n\tGo back to the commons");

    function processInput(input){
        let choice = input.toLowerCase();
        if (choice == "ask about the key") {
            print("\nPrithvi says: 'Uhh, ion know bro... maybe look around the building?'");
            waitThenCall(Prithvi);
        } else if (choice == "get an energy drink") {
            if (energy == 0) {
                print("\nYou drink the energy drink and feel a surge of energy.");
                energy = 1;
            } else {
                print("\nYou already have an energy drink, you can't drink another one!");
            }
            waitThenCall(Prithvi);
        } else if (choice == "go back to the commons") {
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
        "\n\tGo to the teachers' lounge" +
        "\n\tGo up to the vent");
    
    function processInput(input){
        let choice = input.toLowerCase();
        if (choice == "go to the library") {
            Library(); 
        } else if (choice == "go to chris's room") {
            ChrisRoom();
        } else if (choice == "go to the teachers' lounge") {
            if (hasPass) {
                TeachersLounge();
            } else {
                print("\nYou can't go there. You will get caught skipping!");
                waitThenCall(mainHallway);
            }
        } else if (choice == "go up to the vent") {
            Vent();
        } else if (choice == "go back to the commons") {
            if (hasKey) {
                Commons();
            } else {
                print("\nThere is no point in going back there, at least now...");
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
        if (choice == "go back to the main hallway") {
            mainHallway();
        } else if (choice == "search for the key") {
            print("\nYou search the library but there is no key to be found. You should hurry to your next class, Chris's room, before it starts!");
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
        "\n\tDo your work" + 
        "\n\tFinish the class");

    function processInput(input){
        let choice = input.toLowerCase();
        if (choice == "search for the key") {
            print("\nYou search Chris's room but there is no key to be found.");
            waitThenCall(ChrisRoom);
        } else if (choice == "do your work") {
            print("\nYou do your work. Chris comes back and gives you a hall pass! You remember that no one is in the teachers' lounge, you should perhaps go there to find the key!");
            hasPass = true;
            waitThenCall(mainHallway);
        } else if (choice == "finish the class") {
            if (classEnd) {
                print("\nYou finish the class and head back to the main hallway. On the way to the door, you see a giant paperclip on the ground. Could be useful...");
                hasPaperclip = true;
                waitThenCall(mainHallway);
            } else {
                print("\nClass isn't over yet!");
                waitThenCall(ChrisRoom);
            }
        } else {
            print("\nCan't do that!");
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
        "\n\tSearch for the key" +
        "\n\tText Prithvi for help");

    function processInput(input){
        let choice = input.toLowerCase();
        if (choice == "go back to the main hallway") {
            mainHallway();
        } else if (choice == "search for the key") {
            print("\nYou got caught searching the teachers' lounge! Game over.");
            waitThenCall(resetGame);
        } else if (choice == "text prithvi for help") {
            classEnd = true;
            print("\nYou text Prithvi for help. He tells you that he just heard that the keys were distributed in the security office, but that place is guarded. Is there a way to get there without going through the door? But you need to go back to class anyways.");
            waitThenCall(TeachersLounge);
        } else {
            stayHere();
            waitThenCall(TeachersLounge);
        }
    }
    waitForInput(processInput);
}

function Vent() {
    clear();
    print("\nYou went up to the vent!");
    print("\nWhere do you want to go next? Say one of these choices:" +
        "\n\tGo back to the main hallway" +
        "\n\tTry to open it and crawl through the vent");

    function processInput(input) {
        let choice = input.toLowerCase();
        if (choice == "go back to the main hallway") {
            mainHallway();
        } else if (choice == "try to open it and crawl through the vent") {
            if (hasPaperclip && energy == 1) {
                print("\nYou open the vent and crawl through it. You find yourself in the security office!");
                waitThenCall(SecurityOffice);
            } else if (hasPaperclip && energy == 0) {
                print("\nYou open the vent and crawl through it. However, you are too tired and you fall asleep... You were found the next day! Game over.");
                waitThenCall(resetGame);
            } else {
                print("\nYou try to open the vent, but you don't have anything to pry it open with!");
                waitThenCall(Vent);
            }
        } else {
            stayHere();
            waitThenCall(Vent);
        }
    }
    waitForInput(processInput);
}

function SecurityOffice() {
    clear();
    print("\nYou are in the security office!");
    print("\nWhere do you want to go next? Say one of these choices:" +
        "\n\tGo back to the vent" +
        "\n\tSearch for the key");

    function processInput(input){
        let choice = input.toLowerCase();
        if (choice == "go back to the vent") {
            Vent();
        } else if (choice == "search for the key") {
            print("\nYou search the security office and find the key! Now you can open the door!");
            hasKey = true;
            waitThenCall(SecurityOffice);
        } else {
            stayHere();
            waitThenCall(SecurityOffice);
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