let generateBtn = document.getElementById("generate")

function generateTileSequence() {
    
}

function setTiles() {
    let tileSequence = generateTileSequence()
    for(let tile in tileSequence) {

    }   
}

function clearTiles() {
    
}

generateBtn.addEventListener("click", function () {
    generateBtn.innerText = "Generating..."
    
    clearTiles()
    
    setTimeout(() => {
        setTiles()
        generateBtn.innerText = "Generate"
    },1000);
})

