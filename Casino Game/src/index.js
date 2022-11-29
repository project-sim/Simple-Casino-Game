const form = document.querySelector(".numForm"),
    range = document.querySelector(".rangeInput"),
    inputNum = form.querySelector(".inputNum"),
    Compare = document.querySelector(".Compare"),
    Result = document.querySelector(".Result");

function result(myNum, randNum){
    Compare.innerText=`You chose: ${myNum}, the machine chose ${randNum}`;
    myNum = parseInt(myNum);
    if (myNum === randNum){ 
        Result.innerText=`You won!`;
    }
    else{
        Result.innerText=`You lose!`;
    }
}

function makeRandNum(e){
    e.preventDefault();
    const myNum = inputNum.value;
    const maxValue = range.value;
    const randNum = Math.ceil(Math.random() * maxValue);

   result(myNum, randNum);
}

form.addEventListener("submit", makeRandNum);