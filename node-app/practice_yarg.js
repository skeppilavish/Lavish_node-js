
const yargs=require('yargs')  //when import didnt worked

 yargs.version('1.1.0')


//import yargs from "yargs";

console.log(yargs.argv)  // console.log((JSON.stringify(yargs.argv)))
 

//create add command


console.log("Reached to add yargs")
yargs.command({
    command:'add',
    describe:'Add a note',
    handler:function(){
        console.log("Adding a new line used command funtion 2");
    }
})



// console.log("Reached to add yargs")
// yargs.command({
//     command:'add',
//     describe:'Add a note',
//     builder:{
//         title: {
//             describe: 'Note title',
//             demandOption: true,
//             type: 'string'
//         },
//         body:{
//             describe:"Body note",
//             demandOption:true,
//             type:"string"
//         }

//     },
//     handler:function(argv){
//         console.log("Title:" + argv.title);
//         console.log("Body: "+ argv.body)
//     }
// })

const d = async () => { 
    await yargs.command('hello', 'print hello world', () => {
        console.log('Hello, world!');
    });
console.log("\n\n ---Removing/ Read/ List Command-----\n\n")
}

d();

yargs.command({
    command:'remove',
    describe:'Remove a note',
    handler:function(){
        console.log("removing a new line used command funtion ");
    }
})

yargs.command(
    {
    command:'read',
    describe:'Reading a note',
    handler:function(){
        console.log("reading a new line used command funtion ");}
    })
yargs.command(
    {
        command:'list',
        describe:'Listing a note',
        handler:function(){
            console.log("List a new line used command funtion ");
        }
    })

    yargs.argv;

