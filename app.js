// chapter 01:
//Alerts

// 1. Write a script to greet your website visitor using JS alert box.
//Answer$$ alert("Welcome Rehan");

// 2.	Write a script to display following message on your web page:
//Answer$$ alert("Error! Please Enter A Valid Password.");

// 3.Write a script to display following message on your web page: (Hint : Use line break)
//Answer$$ alert("Hello World \nkese ho bhai ");

// 4.Write a script to display following messages in sequence:
//Answer$$ alert("Hello World \nkese ho bhai1 ");
// alert("Hello World \nkese ho bhai2 ");

// 7.Practice placement of <script></script> element in following sections of your project in exercise 6:
// a.Head
// b.Body(before your page’ s HTML)
// c.Body(inside your page’ s HTML)
// d.Body(after your page’ s HTML)

//Answer$$ b




// chapter 02:
//Variables For Strings

// 1. Declare a variable called username.
//Answer$$ var username;

// 2. Declare a variable called myName & assign to it a string that represents your Full Name.
//Answer$$ var myName="Rehan Siddiqui";

// 3. Write a script to
// a.declare a JS variable, titled message
// b.assign“ Hello World” to the variable message
// c.display the message in alert box

//Answer$$ a

// 4. Write a script to save student’s bio data in JS variables and show the data in alert boxes.Example:
//Answer$$ var stName = "Rehan Siddiqui"
// var stAge = "22 Years Old"
// var stClass = "Ssuit"
// var stWork = "Mobile & cloud computing"

// alert(stName)
// alert(stAge)
// alert(stClass)
// alert(stWork)

// 5. Write a script to display the following alert using one JS variable:
//Answer$$ var a = "PIZZA \n";
// var b = "PIZZ \n";
// var c = "PIZ \n";
// var d = "PI \n";
// var e = "P \n";
// var g = a + b + c + d + e;
// alert(g)



// chapter 03:
//Variables For Numbers

// 1. Declare a variable called age & assign to it your age. Show your age in an alert box.
//Answer$$ var age = 22
// alert(age)

// 2. Declare & initialize a variable to keep track of how many
// times a visitor has visited a web page.Show his / her
// number of visits on your web page.For example: “You
// have visited this site N times”

//Answer$$ var totalPageLoads;
// var localItem = localStorage.getItem("pagevisits");
// if (localItem) totalPageLoads = localItem;
// else totalPageLoads = 0;
// ++totalPageLoads;
// localStorage.setItem("pagevisits", totalPageLoads);
// alert("You Have Visited" + totalPageLoads + "Times")

// 3. Declare a variable called birthYear & assign to it your birth year.Show the following message in your browser:
//Answer$$ var birthYear = 2000
// alert("My Birth Year Is " + birthYear + "\nData Type Of My Declare Variable Is Number")

//4. A visitor visits an online clothing store
// www.xyzClothing.com.Write a script to store in variables
// the following information:
// a.Visitor’ s name
// b.Product title
// c.Quantity i.e.how many products a visitor wants to
// order
// Show the following message in your browser: “John
// Doe ordered 5 T - shirt(s) on XYZ Clothing store”.

//Answer$$ var a = "John Doe "
// var b = "ordered 5 "
// var c = "T-shirt(s) on XYZ Clothing store"
// alert(a + b + c)






// chapter 04:
//VARIABLE NAMES:	LEGAL	&	ILLEGAL

// 1. Declare 3 variables in one statement.

//Answer$$ var fullName = "Rehan Siddiqui",userName = "Rehan123", age = 22;




// 2. Declare 5 legal & 5 illegal variable names.

//Answer$$
// // legal variables
// var camelCase="ASDAS";
// var dinner2Go ="ASDAS";
// var I_AM_HUNGRY="ASDAS";
// var _Hello="ASDAS";
// var $_$="ASDAS";

// // illegal variables
// var 2camelCase="ASDAS";
// var Name%="ASDAS";
// var 2name2="ASDAS";
// var function="ASDAS";
// var class="ASDAS";




// 3. Display this in your browser
// a. A heading stating “Rules for naming JS variables”
// b. Variable names can only contain ______, ______,
// ______ and ______.
// For example $my_1stVariable
// c. Variables must begin with a ______, ______ or
// _____. For example $name, _name or name
// d. Variable names are case _________
// e. Variable names should not be JS _________


//Answer$$
// document.write('a. A heading stating “Rules for naming JS variables”'+"<br>")
// document.write('b. Variable names can only contain ______, ______,<br>______ and ______.'+"<br>")
// document.write('For example $my_1stVariable'+"<br>")
// document.write('c. Variables must begin with a ______, ______ or<br>_____. For example $name, _name or name'+"<br>")
// document.write('d. Variable names are case _________'+"<br>")
// document.write('e. Variable names should not be JS _________'+"<br>")




// chapter 5-7:
//MATH	EXPRESSIONS


// 1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.

//Answer$$
// var a = 13

// var b = 9

// var sum = a + b;

// alert("Sum Of 13 And 9 is "+ sum)



//2. Repeat task1 for subtraction, multiplication, division & modulus. E.g.

//Answer$$
// var a = 13

// var b = 9

// var sum = a - b;

// alert("Result of subtracting 9 from 13 is "+ sum)



// var a = 13

// var b = 9

// var sum = a * b;

// alert("Result of Multiplying 9 from 13 is "+ sum)



// var a = 13

// var b = 9

// var sum = a / b;

// alert("Result of Division 9 from 13 is "+ sum)


// var a = 13

// var b = 9

// var sum = a % b;

// alert("Remainder Of Dividing 13 by 9 is "+ sum)



// 3. Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value
// after variable declaration is: ??”.
// MATH	EXPRESSIONS |	JAVASCRIPT
// Page	3 of	11
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial
// value: 3”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value
// after increment is: 4”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value
// after addition is: 11”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value
// after decrement is: 10”.
// k. Show the remainder after dividing the variable’s value by
// 3. Output : “The remainder is : 1”


//Answer$$ 

// a
// var a=23

// b
// alert("variable declaration is: "+a)

// c
// var a,b=10;

// d
// var ini=3

// alert("Initial Value:"+ ini)

// e
// var a = ++5;


// f

// var a = 3;

// alert("value after increment "+ ++a)

// g

// var a = 4

// alert(a+7)

// h

// var a = 4
// var b= 7
// var sum = 4+7;

// alert("value After addition is "+ sum)

// i

// var a = --5;

// j

// var a = 5;

// alert('Value after decrement is: '+ --a)


// k

// var a = 4

// var b = 3

// var c = a % b

// alert("The remainder is "+ c)



// 4. Cost of one movie ticket is 600 PKR. Write a script to store
// ticket price in a variable & calculate the cost of buying 5 tickets
// to a movie. Example output:

//Answer$$
// var a= 600
// var purchaseNum = 5

// document.write("Total Cost To Buy 5 Tickets to a movie is "+a*purchaseNum+"PKR")




//5. Write a script to display multiplication table of any number in your browser. E.g.

//Answer$$
// const number = parseInt(4);
// var i=1
// for(var i=1; i<=10; i++){
//     const result = i * number;
//     document.write(`${number} * ${i} = ${result}`+"<br>");
// }



// chapter 8-11:
//User Input & Conditional Statements




// 1. Write a program that takes input a name from user & greet the
// user like this:


//Answer$$

// var a=prompt("please enter your name")

// alert("Hi "+a )



// 2. Write a program to take input a number from user & display
// it’s multiplication table on your browser. If user does not enter
// a new number, multiplication table of 5 should be displayed by
// default.

//Answer$$

// var number = parseInt( prompt("Enter your value"));

// if(!number){
//     number=5
// }


// var i=1



// for(var i=1; i<=10; i++){
//     var result = i * number;
//     document.write(`${number} * ${i} = ${result}`+"<br>");
// }


// 3. Write a program to take “city” name as input from user. If user
// enters “Karachi”, welcome the user like this: “Welcome to city
// of lights”

//Answer$$

// var city = prompt("enter your city")

// switch (city){
// case(city="karachi"):
//     alert("Welcome to "+"city of lights")
// break;
// case(city="lahore"):
// alert("Welcome to "+"lahore lahore hai karachi iska shohar hai")
// break;
// case(city="islamabad"):
// alert("Welcome to "+"islamabad is a capital")
// break;
// case (city="queeta"):
//     alert("Welcome to "+"queeta queeta hai ")
// break;
// case (city="peshawar"):
//     alert("Welcome to "+"pathano ka sheher")
// break;
// case (city="multan"):
//     alert("Welcome to "+"multani halwa")
// break;
// case (city="faislabad"):
//     alert("Welcome to "+"faislabad faislabad hai")
// break;

// default:
//     alert("Enter The valid City")
// }



// 4. Run this script, & check whether alert message would be
// displayed or not. Record the outputs.

//Answer$$

// var a = 4;
// if (++a === 5){
//  alert("given condition for variable a is true");
// }
// var b = 82;
// if (b++ === 83){
//  alert("given condition for variable b is true");
// }
// var c = 12;
// if (c++ === 13){
//  alert("condition 1 is true");
// }
// if (c === 13){
//  alert("condition 2 is true");
// }
// if (++c < 14){
//  alert("condition 3 is true");
// }
// if(c === 14){
//  alert("condition 4 is true");
// }


// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
//  alert("The cost equals");
// }
// e. if (true);{
//  alert("True");
// }
// if (false){
//  alert("False");
// }
// f. if("car" < "cat");{
//  alert("car is smaller than cat");
// }

// // record output

// //error Uncaught SyntaxError: Unexpected token '{' 
// // ; semi colom was missing

// // condition given condition for variable a is true, 
// // condition 2 or 4 is true and The cost equals is true


// // condition 1 is not true, condition 3 is not true and given condition for variable b is not true and car,cat and e value is not define




// 5.Write a program that checks whether the given input is an even number or an odd number.

//Answer$$

// var number = prompt("Enter a number: ");


// if(number % 2 == 0) {
//     alert("The number is even.");
// }

// else {
//     alert("The number is odd.");
// }



// chapter 12-13:
//IF…ELSE & ELSE IF STATEMENTS,	TESTING	SET	OF CONDITIONS & SWITCH	STATEMENTS


// 1. Write a program to check whether the given input number is
// divisible by 3 or else show a message “Number is not divisible
// by 3”.


//Answer$$

// var number = prompt("Enter a number: ");


// if(number%3 ==0) {
//     alert("divided by 3 ");
// }

// else {
//     alert("not divided by 3.");
// }


// 2. Write a program that checks whether the given input is an even
// number or an odd number.

//Answer$$


// var number = prompt("Enter a number: ");


// if(number % 2 == 0) {
//     alert("The number is even.");
// }

// else {
//     alert("The number is odd.");
// }



// 3. Write an if/else statement with the following condition:
// If the variable age is greater than 18, output "Old enough",
// otherwise output "Too young".


//Answer$$

// var a=prompt("enter the age")
// if (a>18){
//     document.write("Old enough")
// }else{
//     document.write("Too young")
// }




// 4. Write a program to check whether the given input number is
// divisible by 3 or not by using Switch Case statements. Show a
// message “Number is not divisible by 3” or “Number is divisible
// by 3”.


//Answer$$

// var number=prompt("enter your value");

// switch(number % 3 ){
//     case 0:
//         alert("divided by 3")
//         break;

//     default:
//         alert("is Not divided by 3")
// }



// 5. Write a program that takes input a number from user & state
// whether the number is positive, negative or zero.


//Answer$$

// var number = prompt("Enter a number: ");


// if(number >0) {
//     alert("The number is positive.");
// }

// else if(number ==0){
//     alert("The number is zero.");
// }
// else{
//     alert("The number is Negative.");
// }




// chapter 14_17:

//ARRAYS


// 1. Declare and initialize a strings array.

//Answer$$

// var arr = new Array ('1', '2', '3', '4', '5');
// document.write(arr);


// 2. Declare and initialize a numbers array


//Answer$$

// var arr = new Array (1, 2, 3, 4, 5);
// document.write(arr);


// 3. Declare and initialize a boolean array.

//Answer$$

// var arr1 = ['a','b','cake','d'];
//    if (arr1.includes('cake')){
//     document.write(true);
//    }else{
//     document.write(false);
//    }



// 4. Declare and initialize a mixed array.

//Answer$$

// var arr = new Array (1, "rehan", 3, 4, "noman");
// document.write(arr);


// 5. Declare and Initialize an array and store available mobile networks in Pakistan.

//Answer$$

// var arr = new Array ("Zong", "Telenor", "Ufone", "jazz");
// document.write(arr);




// chapter 18-20:

//FOR	LOOPS



// 1. Write a program to display the message “Hello World” 5 times
// in your browser using for loop.


//Answer$$

// for(var i=1; i<=5; i++){
//     document.write("Hello World <br>")
// }



// 2. Write a program to print numeric counting from 1 to 10.

//Answer$$

// for(var i=1; i<=10; i++){
//     document.write(i+"<br>")
// }


// 3. Write a program to print multiplication table of any number
// using for loop. Table number & length should be taken as an
// input from user.

//Answer$$

// var j = +prompt("Enter The Value")

// for(var i=1; i<=15; i++){
//     document.write(j+"X"+i+"="+j*i+"<br>")
// }



// 4. You have an array
// A = [“Nokia”, “Samsung”, “Apple”, “Sony”, “Huawei”]
// Write each element on new line with the help of for loop.


//Answer$$

// var arr1 = ['Nokia','Samsung','Apple','Sony','Huawei'];

// for (var i=0; i<=4; i++){
//     document.write(arr1[i] +"<br>")
// }


//5. Write a program to print items of the following array using for loop: fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”]

//Answer$$

// var arr1 = ["apple","banana","mango","orange","strawberry"];


// for (var i=0; i<=4; i++){
//     document.write(arr1[i]+"<br>")
// }
// document.write("<br>")

//     document.write("Element at index in 0 is "+arr1[0]+"<br>")
//     document.write("Element at index in 1 is "+arr1[1]+"<br>")
//     document.write("Element at index in 2 is "+arr1[2]+"<br>")
//     document.write("Element at index in 3 is "+arr1[3]+"<br>")
//     document.write("Element at index in 4 is "+arr1[4]+"<br>")


// chapter 20-25:

// String Methods:


// 1. Write a program that takes two user inputs for first and last
// name using prompt and merge them in a new variable titled
// fullName. Greet the user using his full name.


//Answer$$

// var firstName = prompt("Enter Your First Name ")
// var lastName = prompt("Enter Your Last Name")

// var fullName = firstName+" "+lastName

// window.alert("Hello Welcome "+fullName)


// 2. Write a program to take a user input about his favorite mobile
// phone model. Find and display the length of user input in your
// browser.


//Answer$$

// var favPhone = prompt("Enter Your Favourite Phone")

// var lenGth = favPhone.length

// document.write("My Favourite Phone Is: "+favPhone+"<br>Length of string: "+lenGth)



// 3. Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser.


//Answer$$


// var a = "Pakistani"

// var b= a.indexOf("n")

// document.write("String: "+a+"ٰ<br>Index Of 'n': "+b);




// 4. Write a program to find the last index of letter “l” in the word
// “Hello World” and display the result in your browser.


//Answer$$

// var a = "Hello World"

// var b= a.lastIndexOf("l")

// document.write("String: "+a+"ٰ<br>Index Of 'l': "+b);



// 5. Write a program to find the character at 3rd index in the word
// “Pakistani” and display the result in your browser.


//Answer$$


// var a = "Pakistani"

// var b= a.charAt(3)

// document.write("String: "+a+"ٰ<br>Character At Index 3: "+b);



// 6. Repeat Q1 using string concat() method.


//Answer$$


// var a = " What is "

// var b= "physics <br>"

// var Q1 = a.concat(b);

// document.write(Q1.repeat(2))




// chapter 26-34:

// Math And Date Methods


// 1. Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number 


//Answer$$

// a. number

// var numBer = parseInt(prompt("Enter Your Number"))

// document.write("number: "+numBer)



// b. round off value of the number


// var a = prompt("Enter Your Number")

// document.write("round of value is: "+Math.round(a))



// c. floor value of the number


// var a = prompt("Enter Your Number")

// document.write("floor value is: "+Math.floor(a))



// d. ceil value of the number 


// var a = prompt("Enter Your Number")

// document.write("ceil value is: "+Math.ceil(a))



// 2. Write a program that takes a negative integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number 


//Answer$$

// a. number

// let num = prompt("Enter a negative integer:");


// if (num >= 0 || !Number.isInteger(+num)) {
//   document.write("Invalid input! Please enter a negative integer.");
// } else {

//   document.write("The negative value is " + num + "<br>");
  
// }

// b. round off value of the number


// let num = prompt("Enter a negative integer or a negative decimal number:");

// if (num >= 0 || isNaN(num)) {
//   document.write("Invalid input! Please enter a negative integer or decimal number.");
// } else {

  
//   let rounded = Math.round(num);
//   document.write("The rounded value is "+ rounded + "<br>");
  

// }


// c. floor value of the number

// let num = prompt("Enter a negative integer or a negative decimal number:");

// if (num >= 0 || isNaN(num)) {
//   document.write("Invalid input! Please enter a negative integer or decimal number.");
// } else {

  
//   let rounded = Math.floor(num);
//   document.write("The floor value is "+ rounded + "<br>");
  

// }



// d. ceil value of the number 


// let num = prompt("Enter a negative integer or a negative decimal number:");

// if (num >= 0 || isNaN(num)) {
//   document.write("Invalid input! Please enter a negative integer or decimal number.");
// } else {

  
//   let rounded = Math.ceil(num);
//   document.write("The ceil value is "+ rounded + "<br>");
  

// }



// 3. Write a program that takes a positive floating point number
// from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number


//Answer$$


// a. number


// let num = prompt("Enter a positive floating point number:");

// // Check if the input is a positive number
// if (num < 0 || isNaN(num)) {
//   document.write("Invalid input! Please enter a positive floating point number.");
// } 
// else {

// //   let numDigits = num.parsefloat();
//   let numDigits = num.toString().split('.')[1];
//   if(numDigits){
//     document.write(num);
//   }else{
//     document.write("The number is not a valid Floating number");
//   }
// }


// b. round off value of the number

// let num = prompt("Enter a positive floating point number:");


// if (num < 0 || isNaN(num)) {
//   document.write("Invalid input! Please enter a positive floating point number.");
// } 
// else {

//   let numDigits = num.toString().split('.')[1];
//   if(numDigits){
//     document.write(Math.round(num));
//   }else{
//     document.write("The number is not a valid Floating number");
//   }
// }


// c. floor value of the number

// let num = prompt("Enter a positive floating point number:");


// if (num < 0 || isNaN(num)) {
//   document.write("Invalid input! Please enter a positive floating point number.");
// } 
// else {

//   let numDigits = num.toString().split('.')[1];
//   if(numDigits){
//     document.write(Math.floor(num));
//   }else{
//     document.write("The number is not a valid Floating number");
//   }
// }


// d. ceil value of the number


// let num = prompt("Enter a positive floating point number:");


// if (num < 0 || isNaN(num)) {
//   document.write("Invalid input! Please enter a positive floating point number.");
// } 
// else {

//   let numDigits = num.toString().split('.')[1];
//   if(numDigits){
//     document.write(Math.ceil(num));
//   }else{
//     document.write("The number is not a valid Floating number");
//   }
// }


// 4. Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number


//Answer$$


// a. number


// let num = prompt("Enter a positive floating point number:");

// // Check if the input is a positive number
// if (num > 0 || isNaN(num)) {
//   document.write("Invalid input! Please enter a negative floating point number.");
// } 
// else {

// //   let numDigits = num.parsefloat();
//   let numDigits = num.toString().split('.')[1];
//   if(numDigits){
//     document.write(num);
//   }else{
//     document.write("The number is not a valid Floating number");
//   }
// }


// b. round off value of the number

// let num = prompt("Enter a positive floating point number:");


// if (num > 0 || isNaN(num)) {
//   document.write("Invalid input! Please enter a negative floating point number.");
// } 
// else {

//   let numDigits = num.toString().split('.')[1];
//   if(numDigits){
//     document.write(Math.round(num));
//   }else{
//     document.write("The number is not a valid Floating number");
//   }
// }


// c. floor value of the number

// let num = prompt("Enter a positive floating point number:");


// if (num > 0 || isNaN(num)) {
//   document.write("Invalid input! Please enter a negative floating point number.");
// } 
// else {

//   let numDigits = num.toString().split('.')[1];
//   if(numDigits){
//     document.write(Math.floor(num));
//   }else{
//     document.write("The number is not a valid Floating number");
//   }
// }


// d. ceil value of the number


// let num = prompt("Enter a positive floating point number:");


// if (num > 0 || isNaN(num)) {
//   document.write("Invalid input! Please enter a negative floating point number.");
// } 
// else {

//   let numDigits = num.toString().split('.')[1];
//   if(numDigits){
//     document.write(Math.ceil(num));
//   }else{
//     document.write("The number is not a valid Floating number");
//   }
// }




// 5. Write a program that displays the absolute value of a number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5 


//Answer$$

// var a = -4

// var b = 5

// document.write("The Absolute value Of -4 Is "+Math.abs(a)+"<br>")

// document.write("The Absolute value Of 5 Is "+Math.abs(b))


