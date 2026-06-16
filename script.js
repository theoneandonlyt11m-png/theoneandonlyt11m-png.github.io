let pic = false;

function ViewProjects() {

}

function ViewAbout() {
    document.getElementById("my-name").textContent = "Tymur Bondariev";
    document.getElementById("a-lil-desc").textContent = "10th Grade Student at Milpitas High School";
     document.getElementById("desc-box").style.display = "block";
    document.getElementById("desc").textContent = "I am an 15 year old developer with a passion for learning and creating new things. I mainly have experience in programming languages like HTML and JavaScript and I enjoy working on projects that challenge me to learn and grow.";

    if (pic == false) {
    const img = new Image(); 
    pic = true;
    img.src = 'images/mypic.png';
    img.alt = 'My Picture';
    img.style.width = '450px';
    img.style.height = '600px';
    img.style.marginTop = '300px';
    img.style.marginLeft = '300px';
    img.style.borderRadius = '10px';
    document.body.appendChild(img);
    } else {
        console.log("Picture already exists");
    }
} 