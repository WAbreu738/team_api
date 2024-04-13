

const data = {
    name: 'JD',
    age: 44
}

function handlesSomeAsyncTask() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, 5000)
    })
}

handlesSomeAsyncTask()
    .then(() => {
        console.log('all good')
    })
    .catch(() => {
        console.log('all bad')
    })



// class Promise {
//     then(cb) {
//         //Wait until some async code runs and completes before calling the callback
//         setTimeout(() => {
//             cb()
//         }, 3000)
//     }

//     catch(cb) {

//     }
// }

// const prom = new Promise()

// prom.then(() => {
//     console.log('callback called')
// })










