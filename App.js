const dateOfBirth = document.querySelector("#DoB");
const luckyNumber = document.querySelector("#Luckynum");
const checkNumberButton = document.querySelector("#check");

checkNumberButton.addEventListener('click',function getValues(){
  console.log(dateOfBirth.value,luckyNumber.value);
})