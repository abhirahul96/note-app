const fs = require('fs')
const chalk = require('chalk')


const getNotes = () => {
    return "Your notes..."
}

const addNote = (title, body) => {
    const notes = loadNotes()
    // const duplicateNotes = notes.filter((note) => note.title === title)
    const duplicateNote = notes.find((note) => note.title === title)

    // const duplicateNotes = notes.filter((note) => {
    //     return note.title === title
    // })

    // if (duplicateNotes.length === 0) {
    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('Note added!'))
    }
    else {
        console.log(chalk.red.inverse('Note title already exists!'))
    }


}

const saveNotes = (notes) => {
    const dataJson = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJson)
}


const listNotes = () => {
    const notes = loadNotes()
    if (notes.length > 0) {
        console.log(chalk.bold.green("Your notes"))
        notes.forEach(note => console.log(note.title));
    } else {
        console.log(chalk.bold.red("No notes added!"))
    }
}


const readNote = (title) => {
    const notes=loadNotes()
    const searchNote=notes.find((note)=>note.title===title)
    if(searchNote){
        console.log(chalk.green.inverse(searchNote.title)+"=>"+searchNote.body)
        // console.log(searchNote.body)
    }
    else{
        console.log(chalk.red.inverse("No note found!"))
    }
}


const loadNotes = () => {
    try {

        const dataBuffer = fs.readFileSync('notes.json')
        const dataJson = dataBuffer.toString()
        return JSON.parse(dataJson)

    } catch (e) {
        return []
    }
}

const removeNote = (title) => {
    const notes = loadNotes()
    const notekeep = notes.filter((note) => note.title !== title)


    // const notekeep = notes.filter((note) => {
    //     return note.title !== title
    // })


    if (notes.length > notekeep.length) {
        console.log(chalk.green.inverse('Note Removed!'))
        saveNotes(notekeep)
    } else {
        console.log(chalk.red.inverse('No note found!'))
    }




    // if(remnote.length===0){
    //     console.log(`Can't find the note with title ${title}!`)
    // }
    // else{
    //     note.pop(note.indexOf(remnote))
    //     saveNotes(note)
    //     console.log(`Notes Removed with title ${title}!`)
    // }

}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}