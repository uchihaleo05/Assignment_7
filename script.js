

//    //    Program_1

// var number1 =+ prompt('Enter Number1')
// var number2 =+ prompt('Enter Number2')
// if(number1 > number2){
//     alert(`"${number1}" is greater then "${number2}"`);
   
// }else if(number1 < number2){
//    alert(`"${number2}" is greater then "${number1}"`);
   
// }
// else if(number1 == number2){
//    alert(`"${number1}" is Equal to "${number2}"`);
   
// }
// else{
//     alert("Enter a valid value!");
// }




//    //    Program_2

// var num1 =+ prompt('Enter Number1')
// var num2 =+ prompt('Enter Number2')
// var num3 =+ prompt('Enter Number3')
// if(num2 > num1 && num2 > num3){
//    alert(`"${num2}" is greater then"${num1}" and "${num3}"`)
// }
// else if(num1 > num2 && num1 > num3){
//    alert(`"${num1}" is greater then"${num2}" and "${num3}"`)
   
// }
// else if(num3 > num1 && num3 > num2){
//    alert(`"${num3}" is greater then"${num2}" and "${num1}"`)
   
// }
// else if(num1 == num2 && num1 == num3 && num2 == num1 && num2 == num3 && num3 == num1 && num3 == num2){
//    alert(`"${num1}" , "${num2}" and "${num3}" are equal "`)
   
// }
// else{
//     alert("Enter a valid value! Please try again only with Numbers")
// }




//     //    Program_3

// var weather =+ prompt('Enter the Temperature')
// if(weather <= 3){
//   alert(`Your Temperature is  '${weather}⁰C' weather is very cold`);
// }
//  else if(weather <= 10){
//   alert(`Your Temperature is  '${weather}⁰C' weather is cold`);
// }
//  else if(weather <= 25){
//   alert(`Your Temperature is  '${weather}⁰C' weather is Normal`);
// }
//  else if(weather <= 40){
//   alert(`Your Temperature is  '${weather}⁰C' weather is Hot`);
// }
//  else if(weather > 40){
//   alert(`Your Temperature is  '${weather}⁰C' weather is very Hot`);
// }
// else{
//    alert("Enter Valid Value! Please Enter the Temperature again in Numbers");
// }






//     //    Program_4

// var userNumber =+ prompt('Enter the number')
// if(userNumber%5 == 0){
//    alert(` "${userNumber}"  is Divisible by 5`);
// }
//  else if(userNumber%11 == 0){
//    alert(` "${userNumber}" is Divisible by 11`);
// }
// else{
//   alert(` "${userNumber}"  is Not Divisible by 5 OR 11`);
// }





//     //    Program_5

// var userNumber =+ prompt('Enter the number')
// if(userNumber%2==0){
//    alert(` ${userNumber} is Even Number`)
// }
// else{
//   alert(` ${userNumber} is Odd Number`)
// }





//     //    Program_6

//  var userInput =+ prompt('Enter the Year To Check if It is Leap OR NOT')
//  if(userInput%4==0){
//    alert(` ${userInput} is a Leap Year`);
//  }
//  else{
//   alert(` ${userInput} is Not a Leap Year`);
//  }





//     //    Program_7

// var userInput = prompt('Enter character to check if it is alphabet or not ')
// if(userInput >= 'a' && userInput <= 'z' || userInput >= 'A' && userInput <= 'Z'){
//  alert(`"${userInput}" is an Alphabet`);
// }else{
//   alert(`"${userInput}" is not an alphabet`);
// }





//     //    Program_8

// function vowelOrConsonant(alphabet){
//   var result = alphabet 
//  if(result == 'a' || result == 'e' || result == 'i' || result == 'o' || result == 'u'){
//     alert(`"${result}" is a Vowel`);
//  }
//  else{
//    alert(`${result} is a Consonant`);
//  }
// }
// var checkVowelOrConsonant = prompt('Enter An Alphabet to Check if it is Vowel OR Consonant')
// vowelOrConsonant(checkVowelOrConsonant)





 //    Program_9

//  function checkAlphabetDigitORSymbol(character){

//   var result = character
//   if(result >= 'a' && result <='z' || result >= 'A' && result <='Z'){
//     alert(`"${result}" is a Alphabet`)
//   }
//   else if(result >= -100){
//      alert(`"${result}" is a Number`)
//   }else{
//     alert(`"${result}" is a special character`)
//   }


//  }

//  var userCharacter = prompt('Enter a character to Check it is Alphabet, Number or Symbol')
//  checkAlphabetDigitORSymbol(userCharacter)






//     //    Program_10

// function checkUpperOrLowerCase(character){
//   var result = character
//   if(result >= 'a' && result <= 'z'){
//      alert(`"${result}" is a Lowercase Character`)
//   }
//    else if(result >= 'A' && result <= 'Z'){
//      alert(`"${result}" is a Uppercase Character`)
//   }
//   else{
//     alert('Enter a Valid Value!')
//   }
// }

// var userData = prompt('Enter Alphabet to Check it is Upper OR LowerCase')
// checkUpperOrLowerCase(userData)






//     //    Program_11

//   function weekNumber(weeekDay){

//     var result = weeekDay
//     if(result == 1){
//        alert(`${result} is a Monday`)
//     }
//     else if(result == 2){
//        alert(`${result} is a Tuesday`)
//     }
//     else if(result == 3){
//        alert(`${result} is a Wednesday`)
//     }
//     else if(result == 4){
//        alert(`${result} is a Thursday`)
//     }
//     else if(result == 5){
//        alert(`${result} is a Friday`)
//     }
//     else if(result == 6){
//        alert(`${result} is a Saturday`)
//     }
//     else if(result == 7){
//        alert(`${result} is a Sunday`)
//     }
//     else{
//         alert('PLease Enter Valid Number 1 To 7 Only! ')
//     }

//   }
   
//   var getWeekNumber =+ prompt('Enter Number to see Name of the day, Enter 1 to 7')
//   weekNumber(getWeekNumber)







//     //    Program_12
    
// function monthName(month){

//     var result = month
    
//     if(result == "january" || result == "January"){
//        alert(`${result} have 31 Days`)
//     }
//     else if(result == "february" || result == "February"){
//        alert(`${result} have 28 Days`)
//     }
//     else if(result == "march" || result == "March"){
//        alert(`${result} have 31 Days`)
//     }
//     else if(result == "april" || result == "April"){
//        alert(`${result} have 30 Days`)
//     }
//     else if(result == "may" || result == "May"){
//        alert(`${result} have 31 Days`)
//     }
//     else if(result == "june" || result == "June"){
//        alert(`${result} have 30 Days`)
//     }
//     else if(result == "july" || result == "July"){
//        alert(`${result} have 31 Days`)
//     }
//     else if(result == "august" || result == "August"){
//        alert(`${result} have 30 Days`)
//     }
//     else if(result == "september" || result == "September"){
//        alert(`${result} have 31 Days`)
//     }
//     else if(result == "october" || result == "October"){
//        alert(`${result} have 30 Days`)
//     }
//     else if(result == "november" || result == "November"){
//        alert(`${result} have 31 Days`)
//     }
//     else if(result == "december" || result == "December"){
//        alert(`${result} have 30 Days`)
//     }
//     else{
//         alert('Please Enter Correctly! ')
//     }

// }

// var getMonthName = prompt('Enter Any Month name to See Number of Days!')
// monthName(getMonthName)








//     //    Program_13

//  function totalNotes(amount){
//     var result = amount
//     var resultNotes = parseInt( result/10)
//     // alert(resultNotes)
//     if(resultNotes){
//         alert(`${result}Rs have ${resultNotes} notes`)
//     }
//     else{
//         alert('Enter a Valid Value!')
//         // consolegit comm
//     }
//  }
// var userAmount =+ prompt('Enter Your Amount to Get Numbers of 10Rs Notes')
// totalNotes(userAmount)







//     //    Program_14

// const angle1 = parseInt(prompt("Enter the first angle:"));
// const angle2 = parseInt(prompt("Enter the second angle:"));
// const angle3 = parseInt(prompt("Enter the third angle:"));

// const sum = angle1 + angle2 + angle3;

// if (sum === 180 && angle1 > 0 && angle2 > 0 && angle3 > 0) {
//   alert("The triangle is valid.");
// } else {
//   alert("The triangle is invalid.");
// }










//    Program_15

// function makeTriangle(leftSide, rightSide, base){

//     var left = leftSide
//     var right = rightSide
//     var baseValue = base
//     if(left + right + baseValue == 180 ){
//         alert('LeftSide= ', left)
//         alert('RightSide= ', right)
//         alert('Base= ', baseValue)
//         alert(`It is a Valid Triangle because ${left} + ${right} + ${baseValue} = 180`)
//     }
//     else{
//         alert(`It is a Invalid Triangle ${left} + ${right} + ${baseValue} is not equal to 180  `)
//     }



//  }
// var UserValues1 =+ prompt('ENTER Left side angle')
// var UserValues2 =+ prompt('ENTER Right side angle')
// var UserValues3 =+ prompt('ENTER base')
// makeTriangle(UserValues1,UserValues2,UserValues3)









    //  Program_16

//  function makeTriangle(leftSide, rightSide, base){

//     var left = leftSide
//     var right = rightSide
//     var baseValue = base
//     if(left == right && left == baseValue && right == left && right == baseValue && baseValue == left && baseValue == right ){
//         alert('LeftSide= ', left)
//         alert('RightSide= ', right)
//         alert('Base= ', baseValue)
//         alert("A triangle with all sides of equal length is called an 'equilateral triangle'")
//     }
//     else if(left== 90 || right == 90){
//         alert("LeftSide= ", left)
//         alert("RightSide= ", right)
//         alert("base= ", baseValue)
//         alert('A triangle with one angle measuring 90 degrees is called a "right-angled triangle"')
//     }else{
//         alert('Please Enter Same Values to Create "equilateral triangle"')
//         alert('Please Enter one side 90  to Create "right-angled triangle"')
//     }



//  }
// var UserValues1 =+ prompt('ENTER Left side angle')
// var UserValues2 =+ prompt('ENTER Right side angle')
// var UserValues3 =+ prompt('ENTER base')
// makeTriangle(UserValues1,UserValues2,UserValues3)








//  //    Program_17

//  const a = parseFloat =+ prompt("Enter the value of coefficient a:");
//  const b = parseFloat =+ prompt("Enter the value of coefficient b:");
//  const c = parseFloat =+ prompt("Enter the value of coefficient c:");
 
//  const discriminant = b * b - 4 * a * c;
 
//  if (discriminant > 0) {
//    const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
//    const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
//    alert(`The roots are ${root1} and ${root2}.`);
//  } else if (discriminant === 0) {
//    const root = -b / (2 * a);
//    alert(`The root is ${root}.`);
//  } else {
//    alert("The quadratic equation has no real roots.");
//  }







 //    Program_18

// function profitOrLoss(userbuyPrice, usersalePrice){

// var user = userbuyPrice
// var sale = usersalePrice
// var result = sale - user
// if(result >= 0){
//         alert("Market Price = ", user )
//         alert("Sale Price = ", sale )
//         alert("Your Profit = ", result , " Rupees")
// }else{
//     alert("Market Price = ", user )
//     alert("Sale Price = ", sale )
//     alert("Your Loss = ", result , " Rupees")
// }

// }
// var markedPrice =+ prompt('Enter Marked Price in Rupees')
// var salePrice =+ prompt('Enter sale price in Rupees')
// profitOrLoss(markedPrice, salePrice)








//     //    Program_19

// // Percentage >= 90% : Grade A
// // Percentage >= 80% : Grade B
// // Percentage >= 70% : Grade C
// // Percentage >= 60% : Grade D
// // Percentage >= 40% : Grade E
// // Percentage < 40% : Grade F

// function gradeAndPercentege(phy,chem,bio,math,comp){

//     var physicsMarks = phy
//     var ChemMarks = chem
//     var bioMarks = bio
//     var mathMarks = math
//     var compMarks = comp
//     var ObtainedMarks = physicsMarks + ChemMarks + bioMarks + mathMarks + compMarks
//     var getPercentege = (physicsMarks + ChemMarks + bioMarks + mathMarks + compMarks) /500 * 100
//     // alert(TotalMarks)
//     if(ObtainedMarks > 500){
//        alert('Please Enter valid Values Total Marks of Every subject is 100 ')
//     }
//     else if(getPercentege >= 90){
//         alert(`Obtained Marks = ${ObtainedMarks}`)
//         alert(`Total Marks = 500`)
//         alert(`Your Percentege = ${getPercentege}%`)
//         alert(`Your Grade = A`)
//     }
//     else if(getPercentege >= 80){
//         alert(`Obtained Marks = ${ObtainedMarks}`)
//         alert(`Total Marks = 500`)
//         alert(`Your Percentege = ${getPercentege}%`)
//         alert(`Your Grade = B`)
//     }
//     else if(getPercentege >= 70){
//         alert(`Obtained Marks = ${ObtainedMarks}`)
//         alert(`Total Marks = 500`)
//         alert(`Your Percentege = ${getPercentege}%`)
//         alert(`Your Grade = C`)
//     }
//     else if(getPercentege >= 60){
//         alert(`Obtained Marks = ${ObtainedMarks}`)
//         alert(`Total Marks = 500`)
//         alert(`Your Percentege = ${getPercentege}%`)
//         alert(`Your Grade = D`)
//     }
//     else if(getPercentege >= 50){
//         alert(`Obtained Marks = ${ObtainedMarks}`)
//         alert(`Total Marks = 500`)
//         alert(`Your Percentege = ${getPercentege}%`)
//         alert(`Your Grade = E`)
//     }
//     else if(getPercentege <= 40){
//         alert(`Obtained Marks = ${ObtainedMarks}`)
//         alert(`Total Marks = 500`)
//         alert(`Your Percentege = ${getPercentege}%`)
//         alert(`Your Grade = F`)
//     }
//     else{
//         alert('Enter a valid value!')
//     }

// }

// var Physics =+ prompt('Your Physics Marks?')
// var Chemistry =+ prompt('Your Chemistry Marks?')
// var Biology =+ prompt('Your Biology Marks?')
// var Math =+ prompt('Your Math Marks?')
// var Computer =+ prompt('Your Computer Marks?')
// gradeAndPercentege(Physics,Chemistry,Biology,Math,Computer)







    //    Program_20

// Basic Salary <= 10000 : HRA = 20%, DA = 80%
// Basic Salary <= 20000 : HRA = 25%, DA = 90%
// Basic Salary > 20000 : HRA = 30%, DA = 95%

// function employeeSalary(salary){

//     var result = salary
//     var calculate  = result 

// }
// var userData =+ prompt('Enter Your Salary')
// employeeSalary(userData)








//     //    Program_21

// // For first 50 units Rs. 0.50/unit
// // For next 100 units Rs. 0.75/unit
// // For next 100 units Rs. 1.20/unit
// // For unit above 250 Rs. 1.50/unit
// // An additional surcharge of 20% is added to the bill

// function countBill(units){

//     var result = units 
    
//     if(result < 50  ){
//         var unitsCount = result * 0.50 
//         var totalBill = 20/100 + unitsCount
//         // alert(tex)
//         // alert(unitsCount)
//       alert(`Price of One Unit = 0.50`)
//       alert(`Your Used Units = ${result}`)
//       alert(`additional surcharge = 20%`)
//       alert(`Your Bill = ${totalBill} Rs`)
//     }
//     else if(result < 100  ){
//         var unitsCount = result * 0.70 
//         var totalBill = 20/100 + unitsCount
//         // alert(tex)
//         // alert(unitsCount)
//       alert(`Price of One Unit = 0.70`)
//       alert(`Your Used Units = ${result}`)
//       alert(`additional surcharge = 20%`)
//       alert(`Your Bill = ${totalBill} Rs`)
//     }
//     else if(result < 200  ){
//         var unitsCount = result * 1.20 
//         var totalBill = 20/100 + unitsCount
//         // alert(tex)
//         // alert(unitsCount)
//       alert(`Price of One Unit = 1.20`)
//       alert(`Your Used Units = ${result}`)
//       alert(`additional surcharge = 20%`)
//       alert(`Your Bill = ${totalBill} Rs`)
//     }
//     else if(result > 200  ){
//         var unitsCount = result * 1.50 
//         var totalBill = 20/100 + unitsCount
//         // alert(tex)
//         // alert(unitsCount)
//       alert(`Price of One Unit = 1.50`)
//       alert(`Your Used Units = ${result}`)
//       alert(`additional surcharge = 20%`)
//       alert(`Your Bill = ${totalBill} Rs`)
//     }
//  else{
//     alert('Enter a valid value')
//  }



// }
// var units =+ prompt('Enter Units To generate Bill')
// countBill(units)
