const circle = document.getElementsByClassName("circle");
function color_generator() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgcolor = "rgb("+x+","+y+","+z+")";
    console.log(bgcolor);
    // document.body.style.backgroundCoslor = bgcolor;
    // circle[0].style.backgroundColor = bgcolor;
    for (let i = 0; i < circle.length; i++) {
        circle[i].style.backgroundColor = bgcolor;
    }
    }
    document.addEventListener("scroll", () => {
    color_generator();
    });
