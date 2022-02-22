const yargs = require("yargs");
const { addNote, readNote, removeNote } = require("./notes-crud");

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
        addNote(title, body);
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
    handler : (args) => {
        const {title} = args
        readNote(title)
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


yargs.parse();

// > node index.js --help
// > node index.js add --help
// > node index.js add --title="New Title" --body="New Title Body"
// > node index.js read --title="Some Title"
// > node index.js remove --title="Some Title"
// > node index.js list
