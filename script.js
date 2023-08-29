let buttons = document.querySelectorAll("button")
let currentValue = document.querySelector('.currentValue')
let previousValue = document.querySelector('.previousValue')
let currentSign = ''
let negative = false

buttons.forEach((button)=>{
button.addEventListener("click",()=>{
    if(!isNaN(button.innerText)||button.innerText=='.'){
        currentValue.innerText+=button.innerText
        }
  
      
        if(previousValue.innerText==''&&isNaN(button.innerText)&&button.innerText!=='.'&&button.innerText!=='⌫'&&button.innerText!=='c'&&button.innerText!=='+/-'){
            currentSign=button.innerText
            console.log(currentSign)
            previousValue.innerText=currentValue.innerText
            currentValue.innerText=''
            
        } else if(currentSign=='+'&&isNaN(button.innerText)&&button.innerText!=='.'&&button.innerText!=='⌫'&&button.innerText!=='c'&&button.innerText!=='+/-'){
            previousValue.innerText=Number(currentValue.innerText)+Number(previousValue.innerText)
            currentValue.innerText=''
            currentSign=button.innerText
            if(button.innerText=='='){
                currentValue.innerText=previousValue.innerText
                previousValue.innerText=''
            }
        }
        
        else if(currentSign=='-'&&isNaN(button.innerText)&&button.innerText!=='.'&&button.innerText!=='⌫'&&button.innerText!=='c'&&button.innerText!=='+/-'){
            previousValue.innerText=Number(previousValue.innerText)-Number(currentValue.innerText)
            currentValue.innerText=''
            currentSign=button.innerText
            if(button.innerText=='='){
                currentValue.innerText=previousValue.innerText
                previousValue.innerText=''
            }
            
        }
        
        else if(currentSign=='/'&&isNaN(button.innerText)&&button.innerText!=='.'&&button.innerText!=='⌫'&&button.innerText!=='c'&&button.innerText!=='+/-'){
            previousValue.innerText=Number(previousValue.innerText)/Number(currentValue.innerText)
            currentValue.innerText=''
            currentSign=button.innerText
         
            if(button.innerText=='='){
                currentValue.innerText=previousValue.innerText
                previousValue.innerText=''
            }
           
        }
        
        else if(currentSign=='*'&&isNaN(button.innerText)&&button.innerText!=='.'&&button.innerText!=='⌫'&&button.innerText!=='c'&&button.innerText!=='+/-'){
            previousValue.innerText=Number(previousValue.innerText)*Number(currentValue.innerText)
            currentValue.innerText=''
            currentSign=button.innerText
            if(button.innerText=='='){
                currentValue.innerText=previousValue.innerText
                previousValue.innerText=''
            }
        }
        if(currentValue.innerText==='0'&&currentSign=='/'){alert('Nice try')
        currentValue.innerText=''
        previousValue.innerText=''
    }   if(button.innerText=='cc'){
        currentValue.innerText=''
        previousValue.innerText=''
    }if(button.innerText=='c'){
        currentValue.innerText=''
        
    }if(button.innerText==='⌫'){
        
        currentValue.innerText = currentValue.innerText.slice(0, -1)
        
    }
    if(button.innerText==='+/-'&&negative==false){
        
        currentValue.innerText = '-'+currentValue.innerText
        negative = true
        
    }else if (button.innerText==='+/-'&&negative==true){
        currentValue.innerText = currentValue.innerText.slice(1)
        negative=false
        console.log(negative)
    }
    
           
    
           



})
})