//check if the someNum is divisible by 3 or 5
function checkDivisible(someNum) {
  if(someNum % 3 === 0 || someNum % 5 === 0){
      // return true if one of the conditions in if statment is true.
      return true;  
  } else{
    //return false if both conidtions in if statments are false.
    return false;
  }
  }
  console.log(checkDivisible(7)); // false
  console.log(checkDivisible(11)); // false
  console.log(checkDivisible(15)); // true
  