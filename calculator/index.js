equation = ""

operations = ["+", "-", "*", "/"]
document.querySelectorAll(".button").forEach(button => {
    button.addEventListener("click", (ev)=>{
        let value = button.innerHTML;
        value = value=="÷" ? "/" : value;
        value = value=="×" ? "*" : value;
        if (value == "=") {
            try {
                equation = eval(equation)
            } catch (error) {
                equation = equation.slice(0, -1)
                equation = eval(equation)
            }
        }
        else if (operations.includes(value)) {
            if(operations.includes((equation[equation.length - 1]))){
                equation = equation.slice(0, -1)
            }
            equation += value
        }
        else if(value == "C"){
            equation = ""
        }
        else {
            equation += value
        }
        document.querySelector(".output-screen").innerHTML = equation;
    })
})