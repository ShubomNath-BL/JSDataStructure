let map = new Map();
var date;
var month;
for(let i=0; i<25; i++){
    date = Math.floor(Math.random()*29)+1;
    month = Math.floor(Math.random()*12)+1;
    map.set(date,month);
    console.log(map);
}