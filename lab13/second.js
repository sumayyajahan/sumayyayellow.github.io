const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });

function getNumber(num){
    
    readline.question("Enter a number: ", (txtIn) => {
       
        if(txtIn == "stop"){
            
            console.log(num);
            readline.close();
        }else{
            getNumber(parseInt(num)+parseInt(txtIn));
        }
      });
}
getNumber(0);



