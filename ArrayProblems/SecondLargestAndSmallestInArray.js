/*Program to find second largest and second smallest elements from 
an array without sorting that array.
Array contains ten rendom numbers from which we need to find the second
largest and second smallest elements. */
//declaring 10 variables where random values has been stored
let num1 = Math.floor(Math.random()*1000)+100;
let num2 = Math.floor(Math.random()*1000)+100;
let num3 = Math.floor(Math.random()*1000)+100;
let num4 = Math.floor(Math.random()*1000)+100;
let num5 = Math.floor(Math.random()*1000)+100;
let num6 = Math.floor(Math.random()*1000)+100;
let num7 = Math.floor(Math.random()*1000)+100;
let num8 = Math.floor(Math.random()*1000)+100;
let num9 = Math.floor(Math.random()*1000)+100;
let num10 = Math.floor(Math.random()*1000)+100;
//declaring an array and then storing those variables in it.
let array = [num1, num2, num3, num4, num5, num6, num6, num8, num9, num10];
console.log("Elements of array is: "+array);

let largest = 100;
let smallest = 999;
let secondLargest = 100;
let secondSmallest = 999;
//finding largest and smallest from array.
for(let i=0; i<array.length; i++){
    let element = array[i];
    if(element>largest){
        largest=element;
    }
    if(element<smallest){
        smallest = element;
    }
}
console.log("Largest is: "+largest);
console.log("Smallest is: "+smallest);
//finding second largest and second smallest from array.
for(i=0; i<array.length; i++){
    let element = array[i];
    if(element<largest && element>secondLargest){
        secondLargest = element;
    }
    if(element>smallest && element<secondSmallest){
        secondSmallest = element;
    }
}
console.log("Second largest is: "+secondLargest);
console.log("Second smallest is: "+secondSmallest);