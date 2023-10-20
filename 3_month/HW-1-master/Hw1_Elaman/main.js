// HW-1
const passportInput = document.querySelector('.passportInput')
const passportCheck= document.querySelector('.passportCheck')
const passportResult = document.querySelector('.passportResult')

const passportRegExp = /^[1-2]\d{13}$/

passportCheck.addEventListener('click', () => {
    if(passportRegExp.test(passportInput.value)){
        passportResult.innerText = "Good"
        passportResult.style.color = "green"
    } else {
        passportResult.innerText = "Error"
        passportResult.style.color = "red"
    }
})
// HW-2
const block = document.querySelector('.block')

let position = 0
let topPosition = 0
const animation = () => {
    if (position <= 400 ) {
        position += 15;
        block.style.left = `${position}px`;
        setTimeout(animation, 100);
    } else {
        console.log("asd")
    }
};
animation();