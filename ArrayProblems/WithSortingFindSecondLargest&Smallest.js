/*Program to find second largest and second smallest elements from 
an array without sorting that array.
Array contains ten rendom numbers from which we need to find the second
largest and second smallest elements. */
let array = new Array();
for(let i=0; i<10; i++){
    let num = Math.floor(Math.random()*899)+100;
    array.push(num);
}
console.log("Before sorting the array: ");
console.log(array);
console.log("After sorting the array: ");
array = array.sort();
console.log(array);
console.log("Second smallest: "+array[1]);
console.log("Second largest: "+array[8]);