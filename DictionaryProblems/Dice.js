let map1 = new Map();
let map2 = new Map();
let map3 = new Map();
let map4 = new Map();
let map5 = new Map();
let map6 = new Map();
var counter1=0, counter2=0, counter3=0, counter4=0, counter5=0, counter6=0, counter=0;
while(counter<10){
    let dice = Math.floor(Math.random()*6)+1;
    switch(dice){
        case 1: counter1++;
        if(counter<counter1){
            counter=counter1;
        }
        break;
        case 2: counter2++;
        if(counter<counter2){
            counter=counter2;
        }
        break;
        case 3: counter3++;
        if(counter<counter3){
            counter=counter3;
        }
        break;
        case 4: counter4++;
        if(counter<counter4){
            counter=counter4;
        }
        break;
        case 5: counter5++;
        if(counter<counter5){
            counter=counter5;
        }
        break;
        case 6: counter6++;
        if(counter<counter6){
            counter=counter6;
        }
        break;
    }
}
map1.set(1,counter1);
map2.set(2,counter2);
map3.set(3,counter3);
map4.set(4,counter4);
map5.set(5,counter5);
map6.set(6,counter6);
console.log(map1, map2, map3, map4, map5, map6);
