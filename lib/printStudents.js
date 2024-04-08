const fs = require('fs')


function printStudents() {
    fs.readFile('./student.txt', 'utf8', (err, data) => {
        if (err) {
            return console.log(err)
        }

        const names = data.split('\n')

        console.log('\nStudent List:', '\n', '---------')

        for (let name of names) {
            console.log(name)
        }
    })
}

module.exports = printStudents