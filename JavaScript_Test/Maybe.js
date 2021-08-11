class Maybe{
       
    constructor(innerValue){
        this.innerValue = innerValue;
    }
    
    map(func) {
        if (this.innerValue !== null && this.innerValue !== undefined ){
            this.innerValue = func(this.innerValue);
            //console.log("test "+this.innerValue);
        }
        return this;
    }

 getOrElse(defaultt) {
        if (this.innerValue !== null && this.innerValue !== undefined){
            return this.innerValue;
        }
        else{
            return defaultt;
        }
    }

}
// example usage #1
const maybeNum = new Maybe(41); // Maybe(41)
const maybeNumMapped = maybeNum.map(function(a) { return a + 1; }); // Maybe(42);
maybeNumMapped.getOrElse(0); // 42
// example usage #2
const empty = new Maybe(undefined); // Maybe(undefined)
const emptyMapped = empty.map(function(a) { return a + 1; }); // Maybe
(undefined)
emptyMapped.getOrElse(0); // 0
// example usage #3
//new Maybe("hello").map(function(a) { return a + " world!"; }).getOrElse("oops"); // "hello world!"
