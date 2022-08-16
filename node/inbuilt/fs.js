let fs = require('fs');

fs.writeFile('mycode.txt','My first node app',(err)=>{
        if(err) throw err;
        console.log('Task Done')
    });

    // create the new file and append the text
// fs.appendFile('mytext.txt','Node Class \n',(err)=>{
//     if(err) throw err;
//     console.log('Task Done')
// })

//read file
// fs.readFile('mytext.txt','utf-8',(err,data)=>{
//     if(err) throw err;
//     console.log(data)
// })

// delete file
// fs.unlink('mycode.txt',function(err){
//     if(err) throw err
//     console.log('File Deleted')
// })

//rename File
 //fs.rename('mytext.txt','mycode.txt',(err) => {
  //  if(err) throw err
  //  console.log('File Renamed')
 // })