
    //    If-Else Conditional Statements
     num=parseInt(prompt("Enter a Number"))
     if(num>=1){
        console.log(`${num} is a Postive Number`)
     }
     else if(num<0){
        console.log(`${num} is a negative Number`)
     }
        else
        console.log(`${num} is zero`)
      
    //   Switch-Case Statements
    day=(prompt("Enter a Day"))
    switch (day) {
        case "monday":
            console.log("This is:",day)
            break;
        case "tuesday":
            console.log("This is:",day)
            break;
        case "wednesday":
            console.log("This is:",day)
            break;
        case "thursday":
            console.log("This is:",day)
            break;
        case "friday":
            console.log("This is:",day)
            break;
        case "saturday":
            console.log("This is:",day)
            break;
        case "sunday":
            console.log("This is:",day)
            break;
    
        default:
        console.log("Arigatho")
            break;
    }
// Ternary Operator
 let age=parseInt(prompt("Enter your Age"))
       age1=(age>=18) ? "Adult" : "Minor"
        console.log(age1)
// For Loop
for(i=1; i<=10; i++){
    console.log(i)
}

// For Loop
for(i=10; i>=10; i--){
    console.log(i)
}
  