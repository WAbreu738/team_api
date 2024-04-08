const printStudents = require('./lib/printStudents')
const addStudent = require('./lib/addStudent')
const studentName = process.argv[2]

if (studentName === 'print') {
    printStudents()
} else {
    addStudent(studentName)
}











// //Writefile will overwrite the files content 
// fs.writeFile('./student.txt', studentName, (err) => {
//     if (err) {
//         return console.log(err)
//     }
// })




// fs.readFile('./student.txt', 'utf8', (err, data) => {
//     if (err) {
//         return console.log(err)
//     }

//     const names = data.split('\n')

//     for (let name of names) {
//         console.log('name:', name)
//     }
// })

