const oddCircle = document.getElementsByClassName("oddCircle");
const evenCircle = document.getElementsByClassName("evenCircle");
function color_generator() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgcolor = "rgb("+x+","+y+","+z+")";
    console.log(bgcolor);
    var a = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var c = Math.floor(Math.random() * 256);
    var otherbgcolor = "rgb("+a+","+b+","+c+")";
    console.log(otherbgcolor);
    // document.body.style.backgroundCoslor = otherbgcolor;
    // circle[0].style.backgroundColor = bgcolor;
    for (let i = 0; i < oddCircle.length; i++) {
        oddCircle[i].style.backgroundColor = bgcolor;
        evenCircle[i].style.backgroundColor = otherbgcolor;
    }
    // evenCircle.style.backgroundColor = bgcolor;
    }
    document.addEventListener("scroll", () => {
    color_generator();
    });
