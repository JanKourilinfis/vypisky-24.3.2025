/*"var" je globální proměnná*/
/*"let" je pouze pro určitý blok*/
/*"const" je neměná(nebude se měnit)*/
var isBlue = false
const element =document.getElementById("color")


/*function oznameni(){
    alert("tlačítko bylo zmáčknuto")
}*/
document.getElementById("tlacitko").addEventListener("click", ()=>{
    if(isBlue){
    element.style.backgroundColor = "red"
        isBlue = false
    }
    else{
        element.style.backgroundColor = "blue"
        isBlue = true
    }
})