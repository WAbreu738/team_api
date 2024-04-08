const fs = require('fs')

function addStudent(studentName) {
    fs.appendFile('./student.txt', `\n` + studentName, (err) => {
        if (err) {
            return console.log(err)
        }

        console.log('Student has been added!')
    })
}

module.exports = addStudent