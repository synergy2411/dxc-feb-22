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

const saveNote = (notes) => {
    fs.writeFileSync("./db.json", JSON.stringify(notes));
    console.log("Saved".green);
}

const addNote = (title, body) => {
    const note = { title, body }
    const allNotes = loadNotes();
    allNotes.push(note)
    saveNote(allNotes);
}

module.exports = {
    addNote
}