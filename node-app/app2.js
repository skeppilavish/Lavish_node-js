const msg =require('./notes2.js')  // kyunki import use kr rhe hai ab , require se 'chalk' accessible nhi tha
const chalk= require('chalk/index.js')



const yargs=require('yargs')  //when import didnt worked

 yargs.version('1.1.0')


//import yargs from "yargs";

console.log(yargs.argv)  // console.log((JSON.stringify(yargs.argv)))
 

//create add command


// console.log("Reached to add yargs")
// yargs.command({
//     command:'add',
//     describe:'Add a note',
//     handler:function(){
//         console.log("Adding a new line used command funtion 2");
//     }
// })


yargs.command({
    command:'add',
    describe:'Add a note',
    builder:{
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe:"Body note",
            demandOption:true,
            type:"string"
        }

    },
    handler(argv){
        msg.addNote(argv.title, argv.body)
    }
})

// const d = async () => { 
//     await yargs.command('hello', 'print hello world', () => {
//         console.log('Hello, world!');
//     });
// console.log("\n\n ---Removing/ Read/ List Command-----\n\n")
// }

// d();

yargs.command({
    command:'remove',
    describe:'Remove a note',
    builder:{
        title:{
            describe:'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        msg.removeNote(argv.title)
    }
})

yargs.command(
    {
    command:'read',
    describe:'Reading a note',
    builder:{
        title: {
            describe: 'Your List',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        msg.readNote(argv.title)}
    })
yargs.command(
    {
        command:'list',
        describe:'Listing a note',
        builder:{
            title: {
                describe: 'Your List',
                demandOption: true,
                type: 'string'
            },
            body:{
                describe:"Body note",
                demandOption:true,
                type:"string"
            }
        },
        handler(){
            console.log(msg.listNotes);
        }
    })

    yargs.argv;

// video 23: challenge
