console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);

//Exercise 1

let randomNumber =  3; 

let userNumber = prompt('Please enter a number'); 

if ( userNumber < randomNumber ) {
    alert('too low'); 
} else if ( userNumber > randomNumber ) {
    alert( 'too high' ); 
} else {
    alert('Congratulations');
}


// Exercise 2

let birthMonth = prompt('What is your birth month?');

switch (birthMonth) {
    case "December":
    case "January":
    case "February":
      console.log('You were born in the Winter!');
      break;
    case "March":
    case "April":
    case "May":
      console.log('You were born in the Spring!');
      break;
    case "June": 
    case "July":
    case "August":
      console.log('You were born in the Summer!');
      break;
    case "September":
    case "October":
    case "November":
      break;
    default:
      console.log('Sorry, this month is not valid.');
}



//Exercise 3

let typeId = "01";
let colorId = "PU";
let sizeId = "L";

let type = "";
let color = "";
let size = "";

switch (typeId) {
  case '01':
    type = 'Tank top'; 
    break; 
  case '02':
    type = 'T-shirt'; 
    break; 
  case '03':
    type = 'Long Sleeve';
    break;  
  case '04':
    type = 'Sweat Shirt';
    break;  
  default:
    type = 'Other'; 
    break; 
}

switch (colorId) {
  case 'BK':
    color = "Black"; 
    break; 
  case 'BL':
    color = "Blue"; 
    break; 
  case 'RD':
    color = "Red";
    break;  
  case 'PU':
    color = "Purple";
    break;  
  default:
    color = "White";
    break; 

}

switch (sizeId) {
  case 'S': 
    size = 'Small'; 
    break; 
  case 'M': 
    size = 'Medium'; 
    break; 
  case 'L': 
    size = 'Large';
    break;  
  case 'XL': 
    size = 'Extra Large'; 
    break; 
  default: 
    size = 'One Size Fits All';
    break;  
}

console.log( `Product: ${size} ${color} ${type}` ); 


