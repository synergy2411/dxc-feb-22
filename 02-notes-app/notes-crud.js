const fs = require("fs");
require("colors");

const loadNotes = () => {
    try{
        const bufferNotes = fs.readFileSync("./db.json");
        const bufferToStringNotes = bufferNotes.toString()
        return JSON.parse(bufferToStringNotes);
    }catch(err){
        return [];
    }
}

const saveNote = (notes, op) => {
    fs.writeFileSync("./db.json", JSON.stringify(notes));
    if(op === "add"){
        console.log("Saved".green);
    }else{
        console.log("Updated".green);
    }
}

const addNote = (title, body) => {
    const note = { title, body }
    const allNotes = loadNotes();
    const foundNote = allNotes.find(n => n.title === title)
    if(foundNote){
        console.log("Note already exist. Try again!".red);
    }else{
        allNotes.push(note)
        saveNote(allNotes, "add");
    }
}

const readNote = title => {
    const allNotes= loadNotes();
    const foundNote = allNotes.find(n => n.title === title)
    if(foundNote){
        console.log("Note Found".green.underline)
        console.log("Title : ".bold, foundNote.title)
        console.log("Body : ".bold, foundNote.body)
    }else{

    }
}

const removeNote = title => {
    const allNotes = loadNotes();
    const position = allNotes.findIndex(n => n.title === title)
    if(position >= 0){
        allNotes.splice(position, 1);
        saveNote(allNotes, "delete");
    }else{
        console.log("Note does not exist. Try again!".red)
    }
}

module.exports = {
    addNote, readNote, removeNote
}