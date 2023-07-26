window.addEventListener("DOMContentLoaded", () => {

    const oddCircle = document.getElementsByClassName("oddCircle");
    const evenCircle = document.getElementsByClassName("evenCircle");
        function color_generator() {
        let x = Math.floor(Math.random() * 256);
        let y = Math.floor(Math.random() * 256);
        let z = Math.floor(Math.random() * 256);
        let bgcolor = "rgb("+x+","+y+","+z+")";
        let revertbgcolor = "rgb("+z+","+y+","+x+")";
        let anderebgcolor = "rgb("+y+","+y+","+y+")"
        let a = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        let c = Math.floor(Math.random() * 256);
        let otherbgcolor = "rgb("+a+","+b+","+c+")";
        let reverotherbgcolor = "rgb("+c+","+b+","+a+")";
        // console.log(otherbgcolor);
        // console.log(reverotherbgcolor);

        for (let i = 0; i < oddCircle.length; i+=2) {
            oddCircle[i].style.backgroundColor = bgcolor;
            evenCircle[i].style.backgroundColor = otherbgcolor;
        }
        for (let i = 1; i < evenCircle.length; i+=2) {
            oddCircle[i].style.backgroundColor = reverotherbgcolor;
            evenCircle[i].style.backgroundColor = revertbgcolor;
        }
        document.body.style.backgroundColor = anderebgcolor;
        }
        const container = document.querySelector(".container")
        for(let i  =0 ; i<100; i++){
            const parent = document.createElement("div")
            parent.classList.add("parent")
            const circle = document.createElement("div")
            const className = i % 2== 0 ? "evenCircle" : "oddCircle"
            circle.classList.add(className)
            parent.appendChild(circle)
            container.appendChild(parent)
        }
        document.addEventListener("scroll", () => {
        color_generator();
        });
        
        const oddCircleElement = document.querySelectorAll(".oddCircle")
        const evenCircleElement = document.querySelectorAll(".evenCircle")
        // console.log(oddCircleElement)
        // console.log(evenCircleElement)
        for(let i=0; i < oddCircleElement.length; i++){
            const oddElement = oddCircleElement[i]
            const evenElement = evenCircleElement[i]
            oddElement.addEventListener('mouseover', (e) => {
                
                e.currentTarget.classList.add("hidden")
                // console.log(e.target)
                // console.log(e.currentTarget)
            })
            evenElement.addEventListener("click", (e) => {
                e.currentTarget.classList.remove("resized")
                e.currentTarget.classList.toggle("compressed")
            })
            oddElement.addEventListener("mouseout", (e) => {
                e.currentTarget.classList.remove("hidden")
                e.currentTarget.classList.add("compressed")
            })
            for (let i = 0; i < evenCircleElement.length; i+=2){
                const evenFirstElement = evenCircleElement [i];
                const oddFirstElement = oddCircleElement [i];
                oddFirstElement.addEventListener('mouseout', (e) => {
                    e.currentTarget.classList.add("halfCompressed")
                })
                evenFirstElement.addEventListener('mouseover', (e) => {
                    e.currentTarget.classList.add("resized")
                })
            }
        }
})

// -------------------------------------------------------
function sigma (x,y) {
    for (let i = x + 1 ; i <= y ; i++) {
        x +=  i;
    }
    return x;
}

let start = 1
let end = 7

sigma (start, end)

// console.log(start);
    


function addElem (a) {
    let newArray = []
    for(let i = 0; i< a.length; i++){
        newArray.push(a[i])
    }
    newArray.push(11)
    return newArray
}

let myArray = [2,4,5]


addElem(myArray)

// console.log(myArray)
