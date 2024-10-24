//var est scope fonction
function exampleVar(){
    var x=5;
    if (true) {
        var x=10;
        console.log("la valeur a l'intérieur"+x);
        
    }
    console.log("la valeur a l'exterieur"+x);
   
}
exampleVar();

//
function exemplet(){
    let x=5;
    if (true) {
        let x=10;
        console.log("la valeur a l'intérieur"+x);
        
    }
    console.log("la valeur a l'exterieur"+x);
    

}
exemplet()
//
function exempleConst(){

}