let year = document.getElementById("year").value 
let currentYear = new Date().getFullYear()

const ResolveAge =()=> {
    let year = document.getElementById("year").value 
    let result = document.getElementById("result")
    let incorrect = document.getElementById("incorrect")
    
    year = parseInt(year)

    if(Number.isNaN(year)){
        incorrect.style.display = "block"
        incorrect.style.color = "red"
        result.style.display = "none"
    }
    else{
        incorrect.style.display = "none"
        let res = currentYear-year
        result.innerHTML= "YOUR AGE IS" + res
        result.style.display = "block"
        result.style.color = "green"
    }
}