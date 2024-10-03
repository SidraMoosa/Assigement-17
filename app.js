                    //Chapter 17 to 20 pdf
                        //ARRAYS AND LOOP

//q1.                        
var multiArray=[];

//q2.
var matrix=[[0,1,2,3],[1,0,1,2],[2,1,0,1]];
console.log(matrix);

//q3.
for(var i = 1; i<=10;i++){
    console.log(i);
}

//q4.
var table=parseInt (prompt("Enter any table"));
var length = parseInt(prompt("Enter table length", "15"));

document.write(` Multipication table of ${table}   <br>`);
 document.write(`Length ${length} <br>`);

for (var i =1; i<=15; i++){
    document.write(`${table}*${i}= ${table*i} <br>`)
}

//q5.
fruits = ["apple", "banana", "mango", "orange","strawberry"]
for(var i = 0; i< fruits.length; i++){
    console.log(fruits[i])
}
console.log(`Element at index 0 is ${fruits[0]}`);
console.log(`Element at index 1 is ${fruits[1]}`);
console.log(`Element at index 2 is ${fruits[2]}`);
console.log(`Element at index 3 is ${fruits[3]}`);
console.log(`Element at index 4 is ${fruits[4]}`);

//q7.
var bakeryItems= prompt("Wellcom to our bakery.What do you want to order sir/madam");
 var array  = ["cake", "apple pie", "cookie", "chips", "patties"];
if(bakeryItems=== array[0]){
    console.log(`${array[0]} is available at index 0 in our bakery`)
}
else if(bakeryItems=== array[1]){
    console.log(`${array[1]} is available at index 1 in our bakery`)
}
else if(bakeryItems=== array[2]){
    console.log(`${array[2]} is available at index 2 in our bakery`)
}
else if(bakeryItems=== array[3]){
    console.log(`${array[3]} is available at index 3 in our bakery`)
}
else if(bakeryItems=== array[4]){
    console.log(`${array[4]} is available at index 4 in our bakery`)
}
else{
console.log(`We are sorry ${bakeryItems} is not available in our bakery`)    
}

//q10.
for(var i =1; i<=100;i++){
    if(i % 5 ===0){
        document.write(i +"<br>")
    }
}

                   // Chapter 21 to 25 pdf
                   // STRING METHODS

//q1.     
var firstName=prompt("Enter your firstname");             
var lastName=prompt("Enter your lastname");
var fullName= firstName+lastName;
console.log(`Wellcome ${fullName}`);

//q2.
var mobileModel =prompt("Enter your favourite mobile model");
var length= mobileModel.length;
console.log(`My favourite phone is ${mobileModel} Length of string: ${length}`);

//q3.
var word= "Pakistani";
var index=word.indexOf("n");
document.write(`String:Pakistani <br> Index of 'n':${index}`);

//q4.
var word= "Hello World";
var index=word.lastIndexOf("l");
document.write(`String:Hello World <br> Last index of 'l':${index}`);

//q5.
var word= "Pakistani";
var index=word.charAt("3");
document.write(`String:Pakistani <br> character at index 3:${index}`);

//q7.
var city= "Hyderabad";
var replacementCity =city.replace("Hyderabad","Islamabad");
document.write(`City: ${city} <br> After replacement:${replacementCity} `)

//q8.
var message = "Ali and Sami are best friends. They play cricket and football together";
var replacement= message.replaceAll("and","&");
document.write(replacement);

//q9.
var string= "472";
var type1=(typeof string)
var num= (Number(string))
var type2=(typeof num)
console.log(`Value:${string}\n Type:${type1} \n Value ${num} \n Type:${type2}`)

//q10.
var userInput= prompt("Enter some text");
input=userInput.toUpperCase();
console.log(input);

//q11.
var userInput= prompt("Enter some text");
var firstChara= userInput.slice(0,1).toUpperCase();
var remainingChara= userInput.slice(1,).toLowerCase();
var updatedValue=firstChara+remainingChara;
console.log(updatedValue);

//q12.
var number=35.36;
var num=(number.toString().replace(".",""));
console.log(`Number:${number}\n Result:${num}`)

//q16.
var university = "University of Karachi";
var arr=university.split("");
console.log(arr);

//q17.
var userInput=prompt("Enter any text");
var lastChara =userInput.charAt(userInput.length-1);
console.log(`User input:${userInput}\n Last character of input: ${lastChara} `);



                     //       Chapter 26 to 30 pdf
                       //     MATH METHODS


//q1.
var number=3.45214;
 var num1= (Math.round(number));
var num2= (Math.floor(number));
var num3= (Math.ceil(number));
 
console.log(`number:${number} \n round off value: ${num1} \n floor value: ${num2} \n ceil value: ${num3}`);

//q2.
// Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

var number=prompt("Enter negative floating point");
num1= (Math.round(number));
num2= (Math.floor(number));
num3= (Math.ceil(number));
console.log(`number:${number} \n round off value: ${num1} \n floor value: ${num2} \n ceil value: ${num3}`);


//q5.
var headUser= prompt("Enter head username");
var tailUser= prompt("Enter tail username");
var toss= Math.floor(Math.random()*2);
if(toss= 0){
    alert(`Headuser ${headUser} win the toss`)
}
else{
    alert(`Tailuser ${tailUser} win the toss`)
}


//q6.
var num= (Math.random()*100);
var number=(num.toFixed(3));
document.write(`random number between 1 and 100: ${number}`);

//q7.
var weight=prompt("Enter your weight");
var input=parseFloat(weight);
var Flag=False;
var arr=[50,"50kgs","50.2kgs","50.2kilogram"];
for(var i= 0; i<arr.length; i++){
    if(weight===arr[i] || input=== arr[i])
        console.log(`The weight of user is ${weight}`);
    Flag=True;
       } 
if(Flag===False){
    console.log(`Invalid weight input ${weight}`)
}

//q8.
var secretNum= Math.floor(Math.random ()*10)
var userInput=parseInt(prompt("Enter a number between  1 to 10"));
if(secretNum=== userInput){
    alert("Congratulation user")
}
else{
    alert(`Invalid number The secret num is: ${secretNum}`)
}


