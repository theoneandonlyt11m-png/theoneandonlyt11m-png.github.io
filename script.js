let pic = false;
let pic2 = false;
let pic3 = false;

function ViewProjects() {
    
    document.getElementById("desc-box").style.display = "none";
    document.getElementById("my-name").textContent = "";
    document.getElementById("a-lil-desc").textContent = "";
    document.getElementById("desc").textContent = "";

    
    document.getElementById("Skills").textContent = "";
    
    document.getElementById("html-box").style.display = 'none';
    document.getElementById("html").innerHTML = "";
    
    document.getElementById("css-box").style.display = 'none';
    document.getElementById("css").innerHTML = "";
    
    document.getElementById("js-box").style.display = 'none';
    document.getElementById("js").innerHTML = "";
    
    document.getElementById("python-box").style.display = 'none';
    document.getElementById("python").innerHTML = "";


    let existingImg = document.getElementById("my-profile-pic");
    if (existingImg) {
        existingImg.remove(); 
        pic = false;          
    }

    document.getElementById("project-one").textContent = "The Great Hallway Escape";
    document.getElementById("project-one-desc").textContent = "A text-based adventure game set in the new building of Arlington Tech. The player starts in the commons, where students are hanging out between classes. From there, the player can go to different areas of the school such as the main hallway, library, lockers, and Chris’ room. The goal is to find a way to leave the building through the escape door without getting caught.";
    document.getElementById("project-one-link").innerHTML = "<a href=\"https://theoneandonlyt11m-png.github.io/old%20stuff/projects/game/index.html\" target=\"_blank\" rel=\"noopener\">Open project</a>";
    document.getElementById("project-one-box").style.display = "block";

    document.getElementById("project-two").textContent = "Home Commute - 2D Car Game";
    document.getElementById("project-two-desc").textContent = "A simple 2D car game where the player drives increasingly faster while doging cars going at diffrent speeds. The score  increases as time goes on (like chrome dino game)";
    document.getElementById("project-two-link").innerHTML = "<a href=\"https://gracehoppercenter.github.io/ict/s26/courses/itd210/projects/game/Home_Commute/\" target=\"_blank\" rel=\"noopener\">Open project</a>";
    document.getElementById("project-two-box").style.display = "block";

    // insert project images to the left of each project (JS-only, non-invasive)
    if (pic2 === false) {
        const img1 = new Image();
        pic2 = true;
        img1.id = 'project-one-pic';
        img1.src = 'images/game1.png';
        img1.alt = 'Game 1';
        img1.style.width = '220px';
        img1.style.height = '160px';
        img1.style.objectFit = 'cover';
        img1.style.marginRight = '20px';
        img1.style.cssFloat = 'left';
        img1.style.borderRadius = '8px';
        const box1 = document.getElementById('project-one-box');
        if (box1) box1.insertBefore(img1, box1.firstChild);
    }

    if (pic3 === false) {
        const img2 = new Image();
        pic3 = true;
        img2.id = 'project-two-pic';
        img2.src = 'images/game2.png';
        img2.alt = 'Game 2';
        img2.style.width = '220px';
        img2.style.height = '160px';
        img2.style.objectFit = 'cover';
        img2.style.marginRight = '20px';
        img2.style.cssFloat = 'left';
        img2.style.borderRadius = '8px';
        const box2 = document.getElementById('project-two-box');
        if (box2) box2.insertBefore(img2, box2.firstChild);
    }

}

function ViewAbout() {
    document.getElementById("my-name").textContent = "Tymur Bondariev";
    document.getElementById("a-lil-desc").textContent = "10th Grade Student at Milpitas High School";
    document.getElementById("desc-box").style.display = "block";
    document.getElementById("desc").textContent = "I'm a 15 year old web developer with a passion for learning and creating new things. I mainly have experience in programming languages like HTML and JavaScript and I enjoy working on projects that challenge me to learn and grow.";

    if (pic === false) {
        const img = new Image(); 
        pic = true;
        
        img.id = 'my-profile-pic'; 
        
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

    document.getElementById("Skills").textContent = "Skills:";
    document.getElementById("html").innerHTML = "<span class='html-word'>HTML</span> - I have a strong understanding of HTML and have used it to create various web projects, including this portfolio website. Entry-Level Web Developer Certified by Edube";
    document.getElementById("html-box").style.display = 'block';
    document.getElementById("css").innerHTML = "<span class='css-word'>CSS</span> - I have experience with CSS and have used it to style and layout web pages, including this portfolio website. I am familiar with various CSS properties and techniques for creating nice designs.";
    document.getElementById("css-box").style.display = 'block';
    document.getElementById("js").innerHTML = "<span class='js-word'>JavaScript</span> - I have experience with JavaScript and have used it to create interactive web pages, including this portfolio website. I am familiar with various JavaScript properties and techniques for creating dynamic content. Entry-Level JavaScript Programmer Certified by Edube";
    document.getElementById("js-box").style.display = 'block';
    document.getElementById("python").innerHTML = "<span class='python-word'>Python</span> - I have a little experience with Python with only knowing the basics. but I am eager to learn more and expand my skills in this language.";
    document.getElementById("python-box").style.display = 'block';
}

ViewAbout();