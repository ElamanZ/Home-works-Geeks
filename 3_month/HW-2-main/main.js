//HW-1
const block = document.querySelector('.block')

let position = 0
let topPosition = 0
const animation = () => {
    if (position <= 400 && topPosition === 0) {
        position += 15;
        block.style.left = `${position}px`;
        setTimeout(animation, 100);
    } else if (topPosition <= 400 && position >= 400 ) {
        topPosition += 15;
        block.style.top = `${topPosition}px`;
        setTimeout(animation, 100);
    } else if (topPosition >= 400 && position !== 0) {
        position -= 15;
        block.style.left = `${position}px`;
        setTimeout(animation, 100);
    } else if (position <= 400 && topPosition !== 0) {
        topPosition -= 15;
        block.style.top = `${topPosition}px`;
        setTimeout(animation, 100);
    }
};
animation();

//HW-2
let i = 0
setInterval(() => {
    const interval = i++
        if (i<=100) {
            console.log('Прошло ' +i+ ' сек' )
        }
},1000)
