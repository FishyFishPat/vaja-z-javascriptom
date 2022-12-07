let rgb = {
    r: 0,
    g: 0,
    b: 0,
    step: 0
};

rgb.r = parseInt(window.prompt("Vnesi vrednost R"));
rgb.g  = parseInt(window.prompt("Vnesi vrednost G"));
rgb.b  = parseInt(window.prompt("Vnesi vrednost B"));
rgb.step = parseInt(window.prompt("Vnesi korak"));

let izracun_padanja = (rgb) => {
    return {
        r: (rgb.r/(rgb.step-1)),
        g: (rgb.g/(rgb.step-1)),
        b: (rgb.b/(rgb.step-1))
    }
}

let barva = (rgb, i) => {
    return {
        r: rgb.r-i*izracun_padanja(rgb).r,
        g: rgb.g-i*izracun_padanja(rgb).g,
        b: rgb.b-i*izracun_padanja(rgb).b
    }
}

let odzadje = (rgb, i) => {
    return {
        r: i*izracun_padanja(rgb).r,
        g: i*izracun_padanja(rgb).g,
        b: i*izracun_padanja(rgb).b
    }
}

for (let i = 0; i < rgb.step; ++i) {
    console.log(i)
    document.write("<span style='background: rgb("+barva(rgb, i).r+", "+barva(rgb, i).g+", "+barva(rgb, i).b+"); color: rgb("+odzadje(rgb, i).r+", "+odzadje(rgb, i).g+", "+odzadje(rgb, i).b+")'>"+"rgb("+Math.round(barva(rgb, i).r)+", "+Math.round(barva(rgb, i).g)+", "+Math.round(barva(rgb, i).b)+")</span> <br>")
}

window.addEventListener("click",(e) =>  {
    if (document.getElementsByClassName("oznacen")) {
        for (let i = 0; i < document.getElementsByClassName("oznacen").length; ++i) {
            document.getElementsByClassName("oznacen")[i].classList.remove("oznacen");
        }
    }
    if (e.target.tagName === "SPAN") {
        e.target.className = "oznacen";
    }
})