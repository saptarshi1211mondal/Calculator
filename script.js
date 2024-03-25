let input=document.querySelector(".input");
let plus=document.getElementById("plus");
let minus=document.getElementById("minus");
let multiply=document.getElementById("multiply");
let del=document.getElementById("delete");
let divide=document.getElementById("divide");
let percentage=document.getElementById("percentage");
let result=document.getElementById("result");
let allClear= document.getElementById("allClear");

let body=document.body;


let currentTheme = "light";
const theme = document.getElementById("theme");

theme.addEventListener("click", () => {
    if (currentTheme === "light") {
        console.log("Switching to dark theme");
        theme.innerHTML = '<i class="fa-solid fa-sun"></i>';
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        currentTheme = "dark";
    } else {
        console.log("Switching to light theme");
        theme.innerHTML = '<i class="fa-solid fa-moon"></i>';
        currentTheme = "light";
        body.classList.add('light-mode');
        body.classList.remove('dark-mode');
    }
});





let expression="";



let digitBtn=document.querySelectorAll(".leftPanel .numbers")
for(let i=0;i<4;i++){
    for(let j=0;j<3;j++){
        let btn=digitBtn[i].querySelectorAll("div")[j]
        btn.addEventListener("click", ()=>{
            expression+=btn.innerText;
            input.innerText=expression;
        })
    }
    

}

allClear.addEventListener("click", ()=>{
    input.innerText="";
    expression=""
    
})

plus.addEventListener("click", ()=>{
    let lastChar = expression.charAt(expression.length - 1);
    let isDigit = !isNaN(parseInt(lastChar));

    if (isDigit){
        expression+="+"
        input.innerText=expression;
    }
    
})


minus.addEventListener("click", ()=>{
    let lastChar = expression.charAt(expression.length - 1);
    let isDigit = !isNaN(parseInt(lastChar));

    if (isDigit){
        expression+="-"
        input.innerText=expression;
    }
    
})
multiply.addEventListener("click", ()=>{
    let lastChar = expression.charAt(expression.length - 1);
    let isDigit = !isNaN(parseInt(lastChar));

    if (isDigit){
        expression+="*"
        input.innerText=expression;
    }
    
})

divide.addEventListener("click", ()=>{
    let lastChar = expression.charAt(expression.length - 1);
    let isDigit = !isNaN(parseInt(lastChar));

    if (isDigit){
        expression+="/"
        input.innerText=expression;
    }
})

del.addEventListener("click", ()=>{
    expression=expression.slice(0, -1);
    input.innerText=expression;
})



result.addEventListener("click", ()=>{
    let lastChar = expression.charAt(expression.length - 1);

    if (expression.length === 0){
        input.innerText = "";
    }
    else if (lastChar === "+" || lastChar === "-" || lastChar === "*" || lastChar === "/") {
        input.innerText = "INVALID";
    } 
    else {
        let result = eval(expression);
        if (result.toString().split('.')[1]?.length > 10) {
            input.innerText = result.toFixed(10); 
        } else {
            input.innerText = result.toString(); 
        }
        expression=""
    }
})









