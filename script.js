const numbersBtn = document.querySelectorAll(".number"),
  operatorBtn = document.querySelectorAll(".operators"),
  decimalBtn = document.querySelector(".decimal"),
  clearBtn = document.querySelectorAll(".clear"),
  display = document.querySelector(".display");
let memoryCurrentNumber=0,
memoryNewNumber = false,
memoryPendingOperation = '';
// console.log(numbersBtn)
// console.log(operatorBtn)
// console.log(decimalBtn)
// console.log(resultBtn)
// console.log(clearBtn)
 console.log(display)
function numberPress(number) {
  if (memoryNewNumber===true){
    display.value = number;
    memoryNewNumber = false;

  }else{
  if (display.value == "0") {
    display.value = number;

  } else {
    display.value += number;
  }
}
}
numbersBtn.forEach((number) => { //добавляем прослушиватель событий
  number.addEventListener("click", (event) => {
    numberPress(event.target.textContent);
  });
});

function operations(op){
let localOperationMemory = display.value;
if(memoryNewNumber&& memoryPendingOperation !=='='){
  display.value = memoryCurrentNumber;
} else {
  memoryNewNumber = true;

if (memoryPendingOperation==='+'){
  memoryCurrentNumber+= +localOperationMemory;
}else if (memoryPendingOperation==='-'){
  memoryCurrentNumber-= +localOperationMemory;
}else if (memoryPendingOperation==='*'){
  memoryCurrentNumber*= +localOperationMemory;
}
else if (memoryPendingOperation==='/'){
  memoryCurrentNumber/= +localOperationMemory;
}else{
  memoryCurrentNumber= +localOperationMemory;
}
display.value=memoryCurrentNumber;
memoryPendingOperation =op;
}
}
operatorBtn.forEach((symb)=>{
  symb.addEventListener("click", (event) => {
    operations(event.target.textContent);
  })
 
})
function clearDisplay(op){
  if(op=='C'){
    display.value = 0;
    memoryNewNumber = true;
  }else{
    display.value = 0;
    memoryNewNumber = true;
    memoryCurrentNumber = 0;
    memoryPendingOperation = 0;
  }
}
clearBtn.forEach((op)=>{
  op.addEventListener('click',(event)=>{
    clearDisplay(event.target.textContent)
  })
})
function decimal(){
  let localDecimalMemory= display.value;
  if(memoryNewNumber){
    localDecimalMemory = '0.'
    memoryNewNumber = false;
  }else{
    if(localDecimalMemory.indexOf('.')===-1){
      localDecimalMemory+=".";
    }
  }
  display.value = localDecimalMemory;
}
decimalBtn.addEventListener('click',(ev)=>{
  decimal(event.target.textContent);
});