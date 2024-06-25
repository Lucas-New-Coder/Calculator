const buttons = document.querySelectorAll(`button`)
let buttonValue = ``
let currentValue = document.querySelector('.currentValue')
let previousValue = document.querySelector('.previousValue')
let symbol = ``
let operators = ``
let negative = false
let dot = false

getButtonValue = () => {
    buttons.forEach((button) => {
        button.addEventListener(`click`, () => {
            buttonValue = button.innerText
            operate()
            getNumber()
            getSymbol()
            getDot()
console.log(operators)

        })
    })
}



getNumber = () => {

    if (previousValue.innerText === `` && !isNaN(buttonValue)  ) {
        currentValue.innerText += buttonValue

    }
     if (previousValue.innerText !== `` && !isNaN(buttonValue) ) {
        currentValue.innerText += buttonValue
        symbol = ``

    }



}
 
getDot = () =>{
    
    if (buttonValue === `.` && dot === false){
        currentValue.innerText = currentValue.innerText+`.`
    }
}

getSymbol = () => {


     if (isNaN(buttonValue) && buttonValue!== `.`) {
        symbol = buttonValue
        operators = symbol
        if (symbol === `⌫`) {
            currentValue.innerText = currentValue.innerText.slice(0, -1)
        } else if (negative === false && symbol === `+/-`) {
            currentValue.innerText = '-' + currentValue.innerText
            negative = true

        } else if (negative === true) {
            currentValue.innerText = currentValue.innerText.slice(1)
            negative = false
        } else if ( buttonValue === `c`){
            currentValue.innerText = ``
        } 
         else if (previousValue.innerText === ``){
            previousValue.innerText = currentValue.innerText
            currentValue.innerText = ``
        }
    }

    if (buttonValue === `cc`) {
        currentValue.innerText = ''
        previousValue.innerText = ''
    }

   

  

}


operate = () => {

    if (symbol === `` && isNaN(buttonValue) && operators !== `` && buttonValue !==`.`) {

        switch (operators) {
            case `+`:
                previousValue.innerText = Number(currentValue.innerText) + Number(previousValue.innerText)
                currentValue.innerText = ``
                break;

            case `-`:
                previousValue.innerText = Number(previousValue.innerText) - Number(currentValue.innerText)
                currentValue.innerText = ``
                break;
            case `*`:
                previousValue.innerText = Number(currentValue.innerText) * Number(previousValue.innerText)
                currentValue.innerText = ``
                break;

            case `/`:

                if (currentValue.innerText === `0`) {
                    currentValue.innerText = ``;
                    previousValue.innerText = ``;
                    alert(`Can´t divide by 0`)

                }
                previousValue.innerText = Number(previousValue.innerText) / Number(currentValue.innerText)
                currentValue.innerText = ``
                break;

        }
    }

    if (symbol === `` && buttonValue === `=`) {
        currentValue.innerText = `${Number(previousValue.innerText)} `
        previousValue.innerText = `${Number(previousValue.innerText)}`
    }


}







getButtonValue()