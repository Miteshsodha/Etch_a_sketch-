alert("OPEN IN DESKTOP OTHERWISE WEBSITE WILL BREAK!!")

let container = document.querySelector("#container");
let btn = document.querySelector("#btn");
let Rndbtn = document.querySelector("#Rnd-btn");
let overlep = document.querySelector("#overlep");
let dark = document.querySelector("#dark");
let erase = document.querySelector("#erase");
let clear = document.querySelector("#clear");
let clr = document.querySelector("#chooseClr");
let body = document.querySelector("body");

let x = 16;
let y = 16;





addgrid(x, y);

btn.addEventListener("click", () => {
    removegrid(x, y);
    let prmpt = prompt("How much Squars do you went in Grid? \n Ex. if went 16x16 type 16");
    if (prmpt >= 100) {
        alert("please enter value less then 100");
        prmpt = prompt("How much Squars do you went in Grid? \n Ex. if went 16x16 type 16");
    }
    x = prmpt;
    y = prmpt;
    addgrid(x, y);
})




function addgrid(x, y) {


    let k1 = 0;

    for (let i = 0; i < x; i++) {

        for (let j = 0; j < y; j++) {

            let child = document.createElement("div");
            child.style.height = `${100 / x}%`;
            child.style.width = `${100 / y}%`;
            child.setAttribute("id", "sqr");
            container.appendChild(child);
            child.addEventListener("mouseenter", () => {
                child.setAttribute("class", "sqr");
            })


            Rndbtn.addEventListener("click", () => {
                child.addEventListener("mouseenter", () => {
                    child.style.backgroundColor = `rgba(${(Math.random()) * 255}, ${(Math.random()) * 255}, ${(Math.random()) * 255}, ${(Math.random())})`;
                })
            })

            overlep.addEventListener("click", () => {
                let k = 0.01;
                child.addEventListener("mouseenter", () => {

                    child.style.backgroundColor = `rgba(255, 0, 0,${k})`;
                    if (k == 1) {
                        k = 0.01;
                    } else {
                        k = k + 0.01;
                    }
                })
            })

            dark.addEventListener("click", () => {
                child.addEventListener("mouseenter", () => {


                    child.style.backgroundColor = `rgba(255, 0, 0,${k1})`;

                    if (k1 < 1) {
                        k1 = k1 + 0.1;
                    }

                })


            })



            erase.addEventListener("click", () => {
                child.addEventListener("mouseenter", () => {
                    child.style.backgroundColor = "white";
                })
            })







        }



    }


}

function removegrid(x, y) {
    for (let i = 0; i < x; i++) {
        for (let j = 0; j < y; j++) {
            let removechild = container.querySelector("#sqr");
            container.removeChild(removechild);
        }
    }
}


clear.addEventListener("click", () => {

    window.location.href = "index.html"

})


clr.addEventListener("click", () => {

    let popup = document.createElement("div");
    let inp = document.createElement("input");
    let lbl = document.createElement("label");
    let br = document.createElement("br");
    let p = document.createElement("p");
    let ok = document.createElement("button");
    let X = document.createElement("button");
    ok.textContent = "OK";
    X.textContent = "X";

    lbl.textContent = "Choose The Color";
    inp.type = "color";
    popup.appendChild(lbl);
    popup.appendChild(X);
    popup.appendChild(br);
    popup.appendChild(p);
    popup.appendChild(inp);
    popup.appendChild(br);
    popup.appendChild(ok);
    popup.style.position = "fixed";
    popup.style.top = "50%"
    popup.style.left = "50%";
    popup.style.transform = "translate(-50%,-50%)";
    popup.style.zIndex = "9999";
    popup.style.display = "block";
    popup.style.boxShadow = "0 0 10px rgba(0,0,0,0.5)";
    popup.style.padding = "100px";
    popup.style.paddingTop = "15px";
    popup.style.paddingBottom = "15px";
    popup.style.paddingRight = "15px";
    p.style.marginBottom = "75px";
    inp.style.marginLeft = "30px";
    lbl.style.fontWeight = "bold";
    popup.style.backdropFilter = "blur(25px)";
    popup.style.borderRadius = "25px";
    ok.style.marginTop = "75px";
    ok.style.marginLeft = "30px";
    ok.setAttribute("id", "ok");
    X.style.marginLeft = "45px";
    X.setAttribute("id", "X");
    body.appendChild(popup);



    ok.addEventListener("click", () => {
        let p1 = inp.value;

        let children = container.children;

        for (let i = 0; i < children.length; i++) {
            children[i].addEventListener("mouseenter", () => {
                children[i].style.backgroundColor = `${p1}`;
            })
        }


        popup.style.display = "none";
    })

    X.addEventListener("click", () => {
        popup.style.display = "none";
    })



})