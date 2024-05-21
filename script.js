const pass= document.querySelector("#pass")
const confirm= document.querySelector("#confPass")
const btn= document.querySelector("button")
const incorrect= document.querySelector(".incorrect")
btn.addEventListener("click", ()=>{
    if(pass.value !=confirm.value){
        incorrect.textContent= "*Passwords do not match"
        console.log(incorrect.textContent)
    }
    else if(pass.value==confirm.value){
        incorrect.textContent=""
        pass.setAttribute("style", "border: 1px solid rgb(12, 12, 255)" )
        confirm.setAttribute("style", "border: 1px solid rgb(12, 12, 255)" )
    }

})