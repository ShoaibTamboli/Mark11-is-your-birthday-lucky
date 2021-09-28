const dateOfBirth = document.querySelector("#DoB");
const luckyNumber = document.querySelector("#Luckynum");
const checkNumberButton = document.querySelector("#check");

checkNumberButton.addEventListener('click',function getValues(){
  console.log(dateOfBirth.value,luckyNumber.value);
})
function checkBirthDateIsLucky(){
    const dob =dateOfBirth.value;
    const sum = calculateSum(dob);
    console.log(sum);
  }
  
  function calculateSum(dob) {
    dob= dob.replaceAll("-","");
    let sum =0;
    for(let index=0;index<dob.length;index++){
      sum = sum + Number(dob.charAt(index));
    }
    return sum;
  }
  
  checkNumberButton.addEventListener('click',checkBirthDateIsLucky)
  