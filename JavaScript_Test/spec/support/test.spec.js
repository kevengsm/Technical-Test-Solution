
function checkDivisibl(someNum){
    if(someNum % 3 === 0 || someNum % 5 === 0){
        // return true if one of the conditions in if statment is true.
        return true;  
    } else{
      //return false if both conidtions in if statments are false.
      return false;
    }

}



describe('CheckDivisible test \n',function(){

    it('Test to check if number 7 is divisible by 3 or 5\n',function(){
        //first test case to check if 7 is divisiable by 3 or 5
        result = checkDivisibl(7);

        if (result !== true){
            console.log("Number " + 7 + " is not divisable by 3 or 5");
        }else{
            console.log("Number " + 7 + " is divisable by 3 or 5");
        }
        
    });

    it('Test to check if number 11 is divisible by 3 or 5\n',function(){
        //first test case to check if 11 is divisiable by 3 or 5
        result = checkDivisibl(11);

        if (result !== true){
            console.log("Number " + 11 + " is not divisable by 3 or 5");
        }else{
            console.log("Number " + 11 + " is divisable by 3 or 5");
        }
        
    });

    it('Test to check if number 15 is divisible by 3 or 5\n',function(){
        //first test case to check if 15 is divisiable by 3 or 5
        result = checkDivisibl(15);

        if (result !== true){
            console.log("Number " + 15 + " is not divisable by 3 or 5");
        }else{
            console.log("Number " + 15 + " is divisable by 3 or 5");
        }
        
    });
});