var a = 'hello'
console.log(a, ' gua')

var fs = require('fs')
fs.readdir('.', function (err, files) {
  console.log("error",typeof err, err)
  if (err != null) {
    console.log(err)
  } else {
    console.log('files', files)
  }
})
var os=require("os");
console.log(os.platform());
// fs.writeFile('message.txt', '你好 Node.js', (err) => {
//   if (err) {
//       throw err
//   }
//   console.log('成功')
// })
fs.writeFile("age.txt","你好 node.js",function(err){
  if (err) {
          throw err
      }
      console.log('成功') 
})
var file="age.txt";
fs.unlink(file,(err)=>{
  if(err){

  }else{
    console.log(`${file}成功删除`);
  }
})