// import fs from 'fs'
const fs =require('fs')
fs.writeFileSync("notes.text","to create and add text in file")

// challenge to append file

fs.appendFileSync("notes.text"," ---appended some item")
console.log("Created and edited succesfully")


//////
//////
//////

// define(function (require) {
//     var dependency1 = require('dependency1'),
//         dependency2 = require('dependency2');

//     return function () {};
// });

const msg=require('./noteapp.js')  // kyunki import use kr rhe hai ab , require se 'chalk' accessible nhi tha

//import {msg} from './noteapp.js'
const value=msg()
console.log(value)  // pehle he print ho rha hai toh wadste
console.log("Task Completed");





// Validator Library npm ///

// import validator from 'validator';

const validator=require('validator')
console.log(validator.isEmail('lavish@gmail.com'))   // check the string is email or not 

                                                    // similarly other validator, Check https://www.npmjs.com/package/validator this



//  ________Use Chalk Module ( https://www.npmjs.com/package/chalk )__________

//import chalk from 'chalk';

//const chalk = require('chalk');

//console.log(chalk.red.bold.bgBlue('signal'))



// /// _____Use Nodemon lib to display script just after saving (https://www.npmjs.com/package/nodemon)_______


/// Argument Parsing 

console.log("Printing element or string we added after calling app node");

console.log(process.argv)   // produce as string 
// console .log(chalk.bgRed(process.argv[2]))  // go to 2nd index

 console .log(process.argv[2])  // go to 2nd index
///______library to provide user interface addig commands . (https://www.npmjs.com/package/yargs)_____

console.log('\n\n'+"----Excerise 4 - to parsing argument---- \n\n")

 const yargs=require('yargs')  //when import didnt worked

 yargs.version('1.1.0')


//import yargs from "yargs";

console.log(yargs.argv)  // console.log((JSON.stringify(yargs.argv)))
 

// create add command
// console.log("Reached to add yargs")
// yargs.command({
//     command:'add',
//     describe:'Add a note',
//     handler:function(){
//         console.log("Adding a new line used command funtion 2");
//     }
// }).argv;






yargs.command('hello', 'print hello world', () => {
    console.log('Hello, world!');
  }).argv


console.log("\n\n ---Removing/ Read/ List Command-----\n\n")

// yargs(
//     .command({
//     command:'remove',
//     describe:'Remove a note',
//     handler:function(){
//         console.log("removing a new line used command funtion ");
//     }})
//     .command({
//     command:'read',
//     describe:'Reading a note',
//     handler:function(){
//         console.log("reading a new line used command funtion ");}
//     })
//     .command({
//         command:'list',
//         describe:'Listing a note',
//         handler:function(){
//             console.log("List a new line used command funtion ");
//         }
//         })
        
// ).argv;

yargs.command({
    command:'remove',
    describe:'Remove a note',
    handler:function(){
        console.log("removing a new line used command funtion ");
    }
}).argv

yargs.command(
    {
    command:'read',
    describe:'Reading a note',
    handler:function(){
        console.log("reading a new line used command funtion ");}
    }).argv
yargs.command(
    {
        command:'list',
        describe:'Listing a note',
        handler:function(){
            console.log("List a new line used command funtion ");
        }
    }).argv;


// now to print title and body

console.log("Reached to add yargs")
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
    handler:function(argv){
        console.log("Title:" + argv.title);
        console.log("Body: "+ argv.body)
    }
}).argv;

