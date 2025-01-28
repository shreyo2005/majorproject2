document.addEventListener('DOMContentLoaded', function () {
    // Animating boxes using GSAP
    gsap.to("#box1", {
        x: 30,
        duration: 1,
        borderRadius: "50%",
    });

    gsap.to("#box2", {
        x: 30,
        duration: 1.5,
        delay: 1,
        borderRadius: "50%",
    });

    gsap.to("#box3", {
        x: 30,
        duration: 2,
        delay: 2,
        borderRadius: "50%",
    });

    // GSAP timeline for header animation
    var tl = gsap.timeline();
    tl.from("h1", {
        y: -30,
        opacity: 0,
        duration: 2,
    });

    tl.from("h2", {
        y: -30,
        opacity: 0,
        duration: 1,
        stagger: 0.35,
    });

    // Event listener for the first "View Details" button
    document.getElementById("myBtn1").addEventListener("click", function () {
        toggleVisibility("text1");
    });

    // Event listener for the second "View Details" button
    document.getElementById("myBtn2").addEventListener("click", function () {
        toggleVisibility("text2");
    });

    // Event listener for the third "View Details" button
    document.getElementById("myBtn3").addEventListener("click", function () {
        toggleVisibility("text3");
    });

    // Function to toggle visibility of text sections
    //function toggleVisibility(elementId) {
        //let textElement = document.getElementById(elementId);
        //if (textElement.style.display === "none" || textElement.style.display === "") {
            //textElement.style.display = "block"; // Show the section
        //} else {
            //textElement.style.display = "none"; // Hide the section
        //}
    //}

    // Event listeners for Close buttons
    document.getElementById("closeBtn1").addEventListener("click", function () {
        let text = document.getElementById("text1");
        text.style.display = "none"; // Close the section
    });

    document.getElementById("closeBtn2").addEventListener("click", function () {
        let text = document.getElementById("text2");
        text.style.display = "none"; // Close the section
    });

    document.getElementById("closeBtn3").addEventListener("click", function () {
        let text = document.getElementById("text3");
        text.style.display = "none"; // Close the section
    });

    // Breaking the header text into individual words with spans for animation
    function breaktext() {
        var h1 = document.querySelector("h1");
        var h1txt = h1.textContent;
        let splittedtxt = h1txt.split(/\s+/); // Split by spaces
        var anything = "";
        splittedtxt.forEach(function (elem) {
            anything += `<span>${elem}</span> `;
        });
        h1.innerHTML = anything;
    }

    breaktext();

    // GSAP animation for breaking text
    gsap.from("h1 span", {
        y: 100,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        stagger: -0.7,
    });
});
document.getElementById("hideandshowbutton")
//document.addEventListener('click',function () {
    document.querySelectorAll('.hideandshowbutton').forEach(button => {
        button.addEventListener('click', function () {
            let targetId = this.getAttribute('data-target');
            let targetElement = document.getElementById(targetId);
            if (targetElement.style.display === "none"|| targetElement.style.display === "") {
                targetElement.style.display = "block";
                this.textContent = "CLOSE";
            } else {
                targetElement.style.display = "none";
                this.textContent = "VIEW DETAILS";
            }
        });
    });
//});
function showAlert(){
    alert("Signed Up successfully");
}