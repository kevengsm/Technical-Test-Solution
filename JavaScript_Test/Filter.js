function filter(array, predicate) {
    //new_list used to create the intended list with 0 elemets.
    var new_list = [];
    // for loop to go through the passed list in filter function parameter.
    for (var i=0; i < array.length; i++){
        //if statment is to check each element in array if the element is equal to 0. 
        if (predicate(array[i])){  
          //console.log("test"+new_list);
          new_list.push(array[i]);
        } 
    }
  return new_list;
}
// example usage #1
const numbers = [0, 1, 2, 0, 0, 3, 4];
console.log(filter(numbers, function(num) { return num !== 0; })); // [1, 2, 3, 4]
// example usage #2
const phrases = ["soccer is lame", "viva o benfica!"];
console.log(filter(phrases, function(phrase) { return phrase !== "soccer is lame";})); // ["viva o benfica!"]