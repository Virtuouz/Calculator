function operate(num1, oper,num2){
    num1=parseFloat(num1)
    num2=parseFloat(num2)
    resetFlag=true;
    operateReady=false
    switch(oper){
        case "/":output.innerText=(num1/num2).toString()
            break;
        case "*":output.innerText=(num1*num2).toString()
            break;
        case "+":output.innerText=(num1+num2).toString()
            break;
        case "-":output.innerText=(num1-num2).toString()
            break;
        
    }
}

function reset(){
    prevScreenVal=0;
    operator=null;
    operateReady=false
    resetFlag=false
    output.innerText=0;

}

function display(button){
    console.log(button.innerText)
    if(resetFlag){
        reset()
    }
    if(operator!==null && operateReady===false){
        output.innerText=button.innerText
        operateReady=true
        return
    }
    if(output.innerText.includes(".") && button.innerText.includes("."))
    {
        return
    }else if(output.innerText==="0" && !button.innerText.includes(".")){
        output.innerText=button.innerText
        return
    }
    
    output.innerText+=button.innerText
}


function capture(button){
    if(operateReady===true){
        operate(prevScreenVal,operator,output.innerText)
        operateReady=false;
        return
    }

    prevScreenVal=output.innerText
    operator=button.innerText
    console.log(operator)
    resetFlag=false
}

function util(button){
    switch(button.innerText){
        case "CA":reset();
            break;
        case "⌫":
            output.innerText=output.innerText.substring(0,output.innerText.length-1)
            if(output.innerText.length==0)
                output.innerText="0"
            break;
        case "+/-":output.innerText.includes("-")? output.innerText=output.innerText.substring(1,output.innerText.length) : output.innerText="-"+output.innerText
            break;
    }
}


prevScreenVal=0;
operator=null;
operateReady=false;
resetFlag=false

const output = document.querySelector('#output')
const numbers = document.querySelectorAll('.num')
const operators= document.querySelectorAll('.oper')
const utilBtns = document.querySelectorAll('.util')
const equals = document.querySelector('#equals')

numbers.forEach(button => button.addEventListener('click', ()=>{display(button)}))
operators.forEach(button =>button.addEventListener('click',()=>{capture(button)}))
utilBtns.forEach(button=>button.addEventListener('click',()=>{util(button)}))
equals.addEventListener('click',()=>{if(operateReady)operate(prevScreenVal,operator,output.innerText)})



