// const add = (start = 0) => {
//     let number = start
//     return () => {
//         number++
//         document.body.textContent = `aktulany stan licznika kliknięc to ${number}`
//     }
// }

// const counter = add()
// document.addEventListener('click', counter)

const user = (name = '', age) => {
    let userName = name
    let userAge = age
    function showName() {
        console.log(`Cześć ${userName}, ${userAge > 18 ? " możesz kupić piwo" : "nie możesz kupić piwa"}`);
    }
    return showName
}

const mieszko = user('mieszko', 22)
const jan = user('jan', 12)
mieszko()
jan()
