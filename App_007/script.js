

function showPass() {
    let input = document.getElementById("inp")
    let btn = document.getElementById("bu")
    let type = input.getAttribute("type")
    if( type === "password" ) {
        input.setAttribute("type", "text")
        btn.innerHTML = "hide"
    }
    else {
        input.setAttribute("type", "password")
        btn.innerHTML = "show"
    }
}






