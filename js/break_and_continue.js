console.log("BREAKS!");

while (true){
    // Asks a question
    var number = prompt ("Give me an odd number between 1 and 50 ");
    number = parseINT(number);
    if( (number >= 1 && number ,+ 50) && number % 2==1 ){
        console.log("Found the 1 i was looking for");
        break;}
}