const fs = require('fs');

// 回調函數 形式
// fs.readFile('./resource/content.txt',(err,data)=>{
//     // 如果出錯 則拋出錯誤
//     if(err) throw err;

//     console.log(data.toString())
// })

// Promise

let p = new Promise ((resolve,reject)=>{
    fs.readFile('./resource/content.txt',(err,data)=>{
        // 如果出錯
        if(err) reject(err)
        // 如果成功
        resolve(data)
    })
})

// 調用 then

p.then (value=>{
    console.log(value.toString())
},reason=>{
    console.log(reason)
})