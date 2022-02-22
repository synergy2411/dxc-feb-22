const fs = require("fs");
require("colors");

const loadNotes = () => {
  try {
    const bufferNotes = fs.readFileSync("./db.json");
    const bufferToStringNotes = bufferNotes.toString();
    return JSON.parse(bufferToStringNotes);
  } catch (err) {
    return [];
  }
};

const saveNote = (notes, op) => {
  fs.writeFileSync("./db.json", JSON.stringify(notes));
  if (op === "add") {
    console.log("Saved".green);
  } else {
    console.log("Updated".green);
  }
};

const addNote = (title, body, cb) => {
  const note = { title, body };
  const allNotes = loadNotes();
  const foundNote = allNotes.find((n) => n.title === title);
  if (foundNote) {
    cb("Note already exist. Try again!");
  } else {
    allNotes.push(note);
    saveNote(allNotes, "add");
    cb(null, { status: "SUCCESS" });
  }
};

const readNote = (title) => {
  const promise = new Promise((resolve, reject) => {
    const allNotes = loadNotes();
    const foundNote = allNotes.find((n) => n.title === title);
    if (foundNote) {
        resolve(foundNote);
    } else {
        reject({message : "NOT FOUND"})
    }
  });
  return promise;
};

const removeNote = (title) => {
  const allNotes = loadNotes();
  const position = allNotes.findIndex((n) => n.title === title);
  if (position >= 0) {
    allNotes.splice(position, 1);
    saveNote(allNotes, "delete");
  } else {
    console.log("Note does not exist. Try again!".red);
  }
};

const listNotes = () => {
  if (loadNotes().length > 0) {
    console.log("ALL NOTES".green);
    loadNotes().forEach((note) => {
      console.log("_______________".grey);
      console.log("Title : ", note.title);
      console.log("Body : ", note.body);
    });
  } else {
    console.log("Please insert some notes first".red);
  }
};

module.exports = {
  addNote,
  readNote,
  removeNote,
  listNotes,
};
