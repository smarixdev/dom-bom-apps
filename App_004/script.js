


function showNhide() {
    let btn = document.getElementById("bu")
    let x = document.getElementById("x")
    if( btn.innerHTML === "show" ) {
        btn.innerHTML = "hide"
        btn.style.backgroundColor = "lightgreen"
        x.style.display = "block"
    }
    else {
        btn.innerHTML = "show"
        btn.style.backgroundColor = "pink"
        x.style.display = "none"
    }
}




