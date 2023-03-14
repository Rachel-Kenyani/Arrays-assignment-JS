//Question1
let arr1=[3,7,34,90,12];
let last= arr1[arr1.length - 1];
console.log(last);

let arr2=[true,"green","where",12,56];
let last2= arr2[arr2.length - 1];
console.log(last2);

// Question2
let myPets=["Cow","Bird","Snake","Dog"];
let pets = myPets.join();
console.log(pets)

//Question3
var arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];
let sorted=arr3.sort((a,b)=> a -b);
console.log(arr3);

//Question4
var arr = ["apple", "mango", "apple", "orange", "mango", "mango"];
function result(arr) {return arr.filter((item, index) => arr.indexOf(item) === index);}
console.log(result(arr));

//Question5

let arr5 = ["the", "way", "x", 4];
let check=arr5.includes("we");
console.log(check)


//Question6
function ReverseString(str) {
    return str.split('').reverse().join('')
    }
      
    let word = "sevink";
    console.log(ReverseString(word))







 



