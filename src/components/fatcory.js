const fs = require('fs');

// let ls =[];
// let tmp = 3278.36;
// for (let  i = 0 ; i < 100;i++){
//     let j = Math.round(Math.random());
//     if (j === 1) {tmp+=Math.round(Math.random()*100)/100+1};
//     if( j === 0){tmp-=Math.round(Math.random()*100)/100}
//     ls.push(tmp);
// }
// let data = JSON.stringify(ls)
// fs.writeFile('创业板指.json', data, (err) => {
//     if (err) {
//         throw err;
//     }
//     console.log("JSON data is saved.");
// });
let ls = [];
let now = new Date(2021,10,31,9,30);
for (let i = 0 ; i < 100 ;i++){
    ls.push([now.getHours(),now.getMinutes()].join(":"))
    now = new Date(+now + 60*1000)
}
let data = JSON.stringify(ls)
fs.writeFile('时间.json', data, (err) => {
    if (err) {
        throw err;
    }
    console.log("JSON data is saved.");
});