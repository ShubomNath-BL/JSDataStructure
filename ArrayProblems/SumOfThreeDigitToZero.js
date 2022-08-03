let array = [2, 5, 8, -2, 7, -3];
for(let i=0; i<array.length-2; i++){
    console.log(array[i]);
    for(let j=i+1; j<array.length-1; j++){
        console.log(array[j]);
        for(let k=j+1; k<array.length; k++){
            let sum = array[i]+array[j]+array[k];
            if(sum == 0){
                console.log(array[i],array[j],array[k]);
                break;
            }
        }
    }
}