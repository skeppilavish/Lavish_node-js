const fs= require('fs')
const { nargs } = require('yargs')
const chalk = require('chalk')
const { title } = require('process')
const getNotes = function (){
    return 'Your notes...'
}

const addNote= (title, body)=>
{
    const notes= loadNotes()
//const duplicateNotes=notes.filter((note)=> note.title=== title)
    const duplicateNotes=notes.find((note)=> note.title===title)
    if(!duplicateNotes )//duplicateNotes.length===0)
    {
        notes.push({
            title: title,
            body:body
        })
        saveNotes(notes)
        console.log("Added successfully")
    }
    else
    {
        console.log("Already Present title")
    }
    
}

const removeNote=(title)=>
{
    const rem= loadNotes();
    const noteToKeep=rem.filter(function(note){
        return note.title!= title
    })
    if(rem.length> noteToKeep.length)
    {
        console.log(chalk.green.inverse("Removing Done"))
        saveNotes(noteToKeep)
    }
    else{
        console.log(chalk.red.inverse("Failed"))
    }
}
const saveNotes= (notes)=>
{
    const dataJSON= JSON.stringify(notes)
    fs.writeFileSync('notesjj.json',dataJSON)
}

const loadNotes=()=> {
    try {
        const dataBuffer= fs.readFileSync('notesjj.json')  // run if file is there otherwise goes to catch
        const dataJSON = dataBuffer.toString()
        //console.log("Hello try ")
        return JSON.parse(dataJSON)
    } catch (e){

        //console.log("Hello catch ")
        return []  // empty array
    }

}

const listNotes=()=>{
    const row= loadNotes();
    console.log(chalk.bold.italic("Your notes"));
    row.forEach((note) => {
        console.log(note.title)
    });
}

const readNote=(title)=>{
    const view= loadNotes();
    const infile= view.find((note)=> note.title===title)
    if(infile)
    {
        console.log(chalk.blue.bold.italic(infile.title))
        console.log(infile.body)
        
    }
    else{
        console.log(chalk.red.inverse("Not present"))
    }
    
}

// export multiple property or function

module.exports= {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes:listNotes,
    readNote: readNote

} 


addNote()
getNotes()
removeNote()
listNotes()
readNote()