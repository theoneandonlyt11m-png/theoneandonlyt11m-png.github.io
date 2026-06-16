let pic = false;

function ViewProjects() {

}

function ViewAbout() {
    document.getElementById("my-name").textContent = "Tymur Bondariev";
    document.getElementById("a-lil-desc").textContent = "10th Grade Student at Milpitas High School";
     document.getElementById("desc-box").style.display = "block";
    document.getElementById("desc").textContent = "I'm a 15 year old web developer with a passion for learning and creating new things. I mainly have experience in programming languages like HTML and JavaScript and I enjoy working on projects that challenge me to learn and grow.";

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