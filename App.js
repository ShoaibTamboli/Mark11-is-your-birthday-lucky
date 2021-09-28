const dateOfBirth = document.querySelector("#DoB");
const luckyNumber = document.querySelector("#Luckynum");
const checkNumberButton = document.querySelector("#check");

checkNumberButton.addEventListener('click',function getValues(){
  console.log(dateOfBirth.value,luckyNumber.value);
})

  function calculateSum(dob) {
    dob= dob.replaceAll("-","");
    let sum =0;
    for(let index=0;index<dob.length;index++){
      sum = sum + Number(dob.charAt(index));
    }
    return sum;
  }

  function compareValues(sum,luckyNumber){
    if(sum%luckyNumber===0){
      outputBox.innerText="Your birthday is lucky 🚀";
    }else {
      outputBox.innerText="Your birthday is not lucky 🤒";
    }
  }
  
  function checkBirthDateIsLucky(){
    const dob =dateOfBirth.value;
    const sum = calculateSum(dob);
    if(sum&&dob)
    compareValues(sum,luckyNumber.value)
    else 
    outputBox.innerText="Please enter both the fields 😡";
  }
  
 
  checkNumberButton.addEventListener('click',checkBirthDateIsLucky)
  

  