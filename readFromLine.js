const readLine = require('readline')

const rline = readLine.createInterface({
    input: process.stdin,
    output:process.stdout
    
});

function takeInput(msg){
    return new Promise((callbackfunc,err)=>{
        rline.question(msg,(input)=>{
            callbackfunc(input)
        }, function(){
            err();
        })
    })
}

async function LineInput(){
     var  name = await takeInput("Please Enter Your Name: ");
    console.log("Hello "+ name)

}

LineInput()