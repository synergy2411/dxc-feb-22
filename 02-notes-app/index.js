const yargs = require("yargs");
require("colors")
const { addNote, readNote, removeNote, listNotes } = require("./notes-crud");

yargs.command({
    command : "add",
    description : "to add new note",
    builder : {
        title : {
            type : "string",
            demandOption : true,
            description : "title to add new note"
        },
        body : {
            type : "string",
            demandOption : true,
            description : "body to add new note"
        }
    },
    handler : (args) => {
        const {title, body} = args;
        addNote(title, body, (err, result) => {
            if(err){
                console.log(err.toString().red)
            }else{
                console.log(result.status.toString().green);
            }
        });
    }
})

yargs.command({
    command : "read",
    description : "to read single note",
    builder : {
         title : {
             type : "string",
             demandOption : true,
             description : "title for seraching note"
         }
    },
    handler : async (args) => {
        const {title} = args
        try{
            const foundNote = await readNote(title)
            console.log("Note Found".green.underline);
            console.log("Title : ".bold, foundNote.title);
            console.log("Body : ".bold, foundNote.body);
        }catch(err){
            console.log(err.message.toString().red);
        }
    }
})

yargs.command({
    command : "remove",
    description : "to remove single note",
    builder : {
        title : {
            type : "string",
            demandOption : true,
            description : "title to remove note"
        }
    },
    handler : args => {
        removeNote(args.title);
    }
})

yargs.command({
    command : "list",
    description : "to read all notes",
    handler : () => {
        listNotes()
    }
})


yargs.parse();

// > node index.js --help
// > node index.js add --help
// > node index.js add --title="New Title" --body="New Title Body"
// > node index.js read --title="Some Title"
// > node index.js remove --title="Some Title"
// > node index.js list
