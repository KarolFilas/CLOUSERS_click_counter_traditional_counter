const add = (start = 0) => {
    let number = start
    return () => {
        number++
        document.body.textContent = `aktulany stan licznika kliknięc to ${number}`
    }
}

const counter = add()
document.addEventListener('click', counter)