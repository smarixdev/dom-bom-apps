

function createDiv() {
    let parent = document.querySelector(".container")
    let btn = document.getElementById("bu")

    let newDiv = document.createElement("div")
    newDiv.style.width = "50px"
    newDiv.style.height = "50px"
    newDiv.style.backgroundColor = "black"
    newDiv.style.margin = "10px"
    
    if( parent.children.length < 19 ) {
        parent.append( newDiv )
    }
    else if( parent.children.length === 19 ) {
        parent.append( newDiv )
        btn.innerHTML = "Done"
        btn.style.backgroundColor = "green"
        btn.style.color = "white"
    }
}






