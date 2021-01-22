const fs = require('fs');
const readline = require('readline');

const file = 'commoncrawl---input.txt';
var arr ='';
const lineRead = fs.createReadStream(file);
const lineR = readline.createInterface({
    input:lineRead
});
var num = 0;

lineR.on('line',(data)=>{
    
    num++;
    // arr += data;
    
    if(num%213283==0){
        arr = arr+data+'\n';
        const url = './result_input/commoncrawl---input'+num/213283+'.txt';
        fs.writeFile(url,arr,(err)=>{if(err) throw err;})
        arr = '';
    }else if(num<21115017){
        arr = arr+data+'\n';
    }else if(num>21115017 && num<21115069){
        arr = arr+data+'\n';
    }else if(num==21115069){
        console.log(num);
        arr = arr+data+'\n';
        const url = './result_input/commoncrawl---inputl100.txt';
        fs.writeFile(url,arr,(err)=>{if(err) throw err;})
        arr = '';
    }
    // console.log(num);
}).on('close',()=>{
    console.log(num);
    console.log('end');
    lineRead.close();
    // for(var i =0;i<Math.ceil(arr.length/rows);i++){
    //     fs.writeFile(
    //         i+'.txt',
    //         arr.slice(i*rows,i*rows+rows).join('\r\n')
    //     )
    // }
})
