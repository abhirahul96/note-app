const validator = require('validator')
const yargs = require('yargs')
const chalk = require('chalk')
const notes = require('./notes')
const { string } = require('yargs')

//add, remove, read, list
//create add command
yargs.command({
    command: "add",
    describe: "Add a new note",
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: string
        },
        body: {
            describe: 'Note Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

//create remove command
yargs.command({
    command: "remove",
    describe: "Remove a note",
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

//create list command
yargs.command({
    command: "list",
    describe: "List all notes!",
    handler() {
        notes.listNotes()
    }
})

//create read command
yargs.command({
    command: "read",
    describe: "Reading a note",
    builder: {
        title: {
            describe: 'read a note',
            demandOption: true,
            type: 'String'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})



yargs.parse()


// console.log(process.argv)
// yargs.version('2.2.0')
// console.log(yargs.argv)

// const command=process.argv[2]

// if(command==='Add'){
//     console.log("Adding")
// }else if(command==='Remove'){
//     console.log("Removing")
// }






// console.log(notes())
// console.log(chalk.red('Success!'))
// console.log(chalk.bold('Success!'))
// console.log(chalk.inverse('Success!'))

// console.log(validator.isEmail('nofnoijfoijif@gmail.com'))
// console.log(validator.isURL('https:/www.hello.com'))

// const fs=require('fs')
// fs.writeFileSync('notes.txt','My name is Abhi')
// fs.appendFileSync('notes.txt',' Hello World')