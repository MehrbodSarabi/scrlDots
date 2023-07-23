const oddCircle = document.getElementsByClassName("oddCircle");
const evenCircle = document.getElementsByClassName("evenCircle");
function color_generator() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgcolor = "rgb("+x+","+y+","+z+")";
    var revertbgcolor = "rgb("+z+","+y+","+x+")";
    console.log(bgcolor);
    console.log(revertbgcolor);
    var a = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var c = Math.floor(Math.random() * 256);
    var otherbgcolor = "rgb("+a+","+b+","+c+")";
    var reverotherbgcolor = "rgb("+c+","+b+","+a+")";
    console.log(otherbgcolor);
    console.log(reverotherbgcolor);
    // document.body.style.backgroundCoslor = otherbgcolor;
    // circle[0].style.backgroundColor = bgcolor;
    for (let i = 0; i < oddCircle.length; i+=2) {
        oddCircle[i].style.backgroundColor = bgcolor;
        evenCircle[i].style.backgroundColor = otherbgcolor;
    }
    for (let i = 1; i < oddCircle.length; i+=2) {
        oddCircle[i].style.backgroundColor = reverotherbgcolor;
        evenCircle[i].style.backgroundColor = revertbgcolor;
    }
    }
    document.addEventListener("scroll", () => {
    color_generator();
    });
